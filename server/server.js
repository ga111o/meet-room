const express = require("express");
const http = require("http");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const socket = require("socket.io");

require("dotenv").config();

const app = express();
const port = 3002;
const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: [
      "http://localhost:8082",
      "http://localhost:8082/",
      "http://127.0.0.1:8082",
      "http://127.0.0.1:8082/",
      "http://localhost:3002",
      "http://localhost:3002/",
      "http://127.0.0.1:3002",
      "http://127.0.0.1:3002/",
      "https://wdp-assignment.duckdns.org:8082/",
      "https://wdp-assignment.duckdns.org:8082",
    ],
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("./user.db", (err) => {
  if (err) {
    console.error("db err", err.message);
  } else {
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      pw TEXT NOT NULL
    )`,
      (err) => {
        if (err) {
          console.error("err", err.message);
        }
      }
    );
  }
});

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).send("!toekn");
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("no valid");
    }
    req.userId = decoded.id;
    next();
  });
};

app.post("/verify_token", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "!token" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: `err ${err}` });
    }

    res.json({ message: "goood", userId: decoded.id });
  });
});

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.post("/register", (req, res) => {
  const { id, pw } = req.body;

  db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).send("err", err.message);
    }
    if (row) {
      return res.status(400).send("id exist");
    }

    db.run("INSERT INTO users (id, pw) VALUES (?, ?)", [id, pw], (err) => {
      if (err) {
        return res.status(500).send("err", err.message);
      }
      res.send("true");
    });
  });
});

app.post("/login", (req, res) => {
  const { id, pw } = req.body;

  db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).json({ message: `err, ${err}` });
    }
    if (!row) {
      return res.status(401).json({ message: "id" });
    }

    if (row.pw !== pw) {
      return res.status(401).json({ message: "pw" });
    }

    const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  });
});

app.post("/register/check_dup_id", (req, res) => {
  const { id } = req.body;

  db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).send("err", err.message);
    }

    if (row) {
      return res.send("true");
    }
    res.send("false");
  });
});

app.post("/logout", (req, res) => {
  res.send("logged out!");
});

app.get("/home", verifyToken, (req, res) => {
  const userId = req.userId;

  const roomList = Array.from(rooms.entries()).map(([roomId, users]) => ({
    roomId: roomId,
    currentUsers: users.size,
  }));

  res.json({
    userId: userId,
    rooms: roomList,
  });
});

const rooms = new Map();

app.get("/room/:roomId", verifyToken, (req, res) => {
  const roomId = req.params.roomId;
  const room = rooms.get(roomId) || new Set();

  if (room.size >= 3) {
    return res.status(403).json({
      error: "Room is full",
      currentUsers: room.size,
    });
  }

  res.json({
    roomId: roomId,
    userId: req.userId,
    currentUsers: room.size,
  });
});

io.on("connection", (socket) => {
  const req = socket.request;
  const socket_id = socket.id;
  const client_ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userId = req._query.userId;

  console.log("\n| ======== connect!", userId, "========");
  console.log("| client_ip\t", client_ip);
  console.log("| socket_id:", socket_id);
  console.log("| user_id:", userId);

  socket.on("join_room", (roomId) => {
    const room = rooms.get(roomId) || new Set();

    if (room.size >= 3) {
      socket.emit("room_full");
      return;
    }

    socket.join(roomId);
    room.add(userId);
    rooms.set(roomId, room);

    console.log("| join room:", roomId);
    console.log("| current users:", room.size);

    socket.to(roomId).emit("welcome", userId);
  });

  socket.on("offer", (offer, roomId) => {
    socket.to(roomId).emit("offer", offer, userId);
    console.log("| offer:", roomId, userId);
  });

  socket.on("answer", (answer, roomId) => {
    socket.to(roomId).emit("answer", answer, userId);
    console.log("| answer:", roomId, userId);
  });

  socket.on("ice", (ice, roomId) => {
    socket.to(roomId).emit("ice", ice, userId);
    console.log("| ice con:", roomId, userId);
  });

  socket.on("chat", (message, roomId) => {
    const chatUserId = message.id;
    const chatMessage = message.message;
    const chatTime = message.messageTime;
    const chatData = {
      id: chatUserId,
      message: chatMessage,
      messageTime: chatTime,
    };
    socket.to(roomId).emit("chat", chatData);
    console.log("| chat", chatData.id, chatData.message);
  });

  socket.on("disconnect", () => {
    console.log("|- in disconnect...", userId);
    for (const [roomId, users] of rooms.entries()) {
      if (users.has(userId)) {
        users.delete(userId);
        if (users.size === 0) {
          rooms.delete(roomId);
        }
        socket.to(roomId).emit("user_left", userId);
        console.log("|- disconnected", userId);
        console.log("| remaining users in room:", users.size);
        break;
      }
    }
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`http://0.0.0.0:${port}`);
});
