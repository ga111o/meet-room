<template>
  <div v-if="isLogIn" class="mainBox">
    <div class="leftBox">
      <div class="lefts">
        <div class="titleBox">
          <p class="hello">
            Good {{ hello }} <span class="helloUser">{{ userId }}</span>
          </p>
          <a
            href="https://github.com/ga111o"
            target="_blank"
            rel="noopener"
            class="myName"
            >강민혁</a
          >
        </div>
        <button @click="logout" class="mainBtn logoutBtn">logout</button>
      </div>
    </div>

    <div class="rightBox">
      <!-- <button @click="toggleInput" class="mainBtn">create room</button> -->
      <button class="button below" @click="toggleInput">
        <div class="bg"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 342 208"
          height="208"
          width="342"
          class="splash"
        >
          <path
            stroke-linecap="round"
            stroke-width="3"
            d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            stroke-opacity="0.3"
            d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            stroke-opacity="0.3"
            d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            stroke-opacity="0.3"
            d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            stroke-opacity="0.3"
            d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            stroke-opacity="0.3"
            d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="3"
            stroke-opacity="0.3"
            d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449"
          ></path>
        </svg>

        <div class="wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 221 42"
            height="42"
            width="221"
            class="path"
          >
            <path
              stroke-linecap="round"
              stroke-width="3"
              d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
            ></path>
          </svg>

          <div class="outline"></div>
          <div class="content">
            <span class="char state-1">
              <span data-label="M" style="--i: 1">M</span>
              <span data-label="e" style="--i: 2">e</span>
              <span data-label="e" style="--i: 3">e</span>
              <span data-label="t" style="--i: 4">t</span>
              <span data-label="N" style="--i: 5">N</span>
              <span data-label="o" style="--i: 6">o</span>
              <span data-label="w" style="--i: 7">w</span>
            </span>

            <div class="icon">
              <div></div>
            </div>

            <span class="char state-2">
              <span data-label="M" style="--i: 1">M</span>
              <span data-label="e" style="--i: 2">e</span>
              <span data-label="e" style="--i: 3">e</span>
              <span data-label="t" style="--i: 4">t</span>
              <span data-label="N" style="--i: 5">N</span>
              <span data-label="o" style="--i: 6">o</span>
              <span data-label="w" style="--i: 7">w</span>
            </span>
          </div>
        </div>
      </button>

      <div v-if="showCreateRoom" class="popup" @click.self="toggleInput">
        <div class="createRoomBox">
          <div class="inputGroup">
            <input
              v-model="roomTitle"
              autocomplete="off"
              required
              type="text"
              @keyup.enter="createRoom"
            />
            <label for="name">Meet Name</label>
          </div>
          <div class="roomTitleBtnBox">
            <button @click="toggleInput" class="mainBtn">Cancel</button>
            <button @click="createRoom" class="mainBtn createRoomBtn">
              Create Meet
            </button>
          </div>
        </div>
      </div>

      <div class="roomBoxBox">
        <center>
          <div
            v-for="room in rooms"
            :key="room.roomId"
            @click="goToRoom(room.roomId)"
            class="roomBox"
            :class="{ notAllowed: room.currentUsers >= 3 }"
          >
            <div class="roomBoxLeft">
              <div
                :class="room.currentUsers >= 3 ? 'statusFull' : 'statusGood'"
              ></div>
            </div>
            <div class="roomBoxRight">
              <p class="roomId">
                {{ room.roomId }}
              </p>
              <p class="peopleNum">{{ room.currentUsers }}명 참여 중</p>
            </div>
          </div>
        </center>
      </div>
    </div>
  </div>
  <div v-else class="loading">
    <p>
      로딩 중...
      <br />(서버 성능으로 인해 로딩이 오래 걸릴 수도 있어요. 조금만 더
      기다려주세요.)
    </p>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "HELLO!",
  props: {
    msg: String,
  },
  data() {
    return {
      isLogIn: false,
      userId: null,
      rooms: [],
      showCreateRoom: false,
      roomTitle: "",
      hello: "",
    };
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    async checkLoginStatus() {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await fetch(
          `${process.env.VUE_APP_FRONT_TO_BACK_URL}/home`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();

          this.userId = data.userId;
          this.rooms = data.rooms;
          this.isLogIn = true;
          this.setHello();
        } else {
          localStorage.removeItem("token");
          this.isLogIn = false;
          this.userId = null;
          this.$router.push("/login");
        }
      } else {
        this.$router.push("/login");
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.isLogIn = false;
      this.userId = null;
      this.$router.push("/login");
    },
    goToRoom(roomId) {
      const room = this.rooms.find((r) => r.roomId === roomId);
      if (room && room.currentUsers <= 2) {
        this.$router.push(`/room/${roomId}`);
      } else {
        console.log(roomId, room.currentUsers);
      }
    },
    toggleInput() {
      this.showCreateRoom = !this.showCreateRoom;
      this.roomTitle = "";
    },
    createRoom() {
      if (this.roomTitle) {
        this.$router.push(`/room/${this.roomTitle}`);
        this.showCreateRoom = false;
      }
    },
    setHello() {
      const nowHour = new Date().getHours();
      console.log(nowHour);
      if (nowHour < 12) {
        this.hello = "morning!";
      } else if (nowHour < 18) {
        this.hello = "afternoon!";
      } else {
        this.hello = "evening!";
      }
    },
  },
};
</script>

<style scoped>
.lds-ellipsis {
  color: #1c4c5b;
}
.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33.33333px;
  width: 13.33333px;
  height: 13.33333px;
  border-radius: 50%;
  background: currentColor;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
.mainBox {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  height: 100vh;
  align-items: center;

  overflow-y: auto;
  border-radius: 30px;
}

.leftBox {
  margin-bottom: 300px;
  display: flex;
  justify-content: center;
}
.lefts {
  width: 300px;
  background: #212121;
  box-shadow: inset 5px 5px 10px #0d0d0d, inset -5px -5px 10px #353535;
  padding: 20px 20px 40px 20px;
  border-radius: 15px;
}
.rightBox {
  height: 100vh;
  overflow-y: auto;
  padding-top: 200px;
  background: #212121;
}
.titleBox {
  margin-bottom: 45px;
}
.hello {
  font-size: 24px;
  color: #fff;
  font-weight: 500;
}
.helloUser {
  color: #fff;
  font-weight: 700;
}
.myName {
  color: #ddd;
  text-decoration: wavy;
}
.mainBtn {
  transition: background 0.3s ease-out, box-shadow 0.3s ease-out,
    border-radius 0.3s ease-out;
  padding: 13px 21px;
  color: #fff;
  font-size: 18px;
  border-radius: 0.5em;
  background: #212121;
  border: 1px solid #212121;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #000, -6px -6px 12px #2f2f2f;
}
.logoutBtn:hover {
  letter-spacing: 1px;
}
.mainBtn:hover {
  color: #ccc;
  box-shadow: 10px 10px 18px #000, -10px -10px 18px #2f2f2f;
  cursor: pointer;
  transform: scale(1.03);
}
.mainBtn:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #000, inset -4px -4px 12px #1f1f1f;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.createRoomBtn {
  background: linear-gradient(145deg, #c389f2, #8e26e2);
  color: white;
  margin-left: 6px;
}
.createRoomBtn:hover {
  background: linear-gradient(145deg, #8e26e2, #c389f2);
  box-shadow: 2px 2px 8px #9138da, -2px -2px 8px #cda0f2;
}
.createRoomBox {
  background: #212121;
  padding: 20px;
  border-radius: 5px;
  margin-left: 40%;
  margin-bottom: 200px;
  display: flex;
  border-radius: 21px;
  flex-direction: column;
}
.inputGroup {
  margin: 1em 0 1em 0;
  position: relative;
}
.inputGroup input {
  font-size: 100%;
  padding: 15px 8px;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  width: 240px;
  background: #212121;
  box-shadow: inset 5px 5px 10px #0d0d0d, inset -5px -5px 10px #353535;
  color: #fff;
  margin-top: -10px;
}
.inputGroup label {
  font-size: 100%;
  position: absolute;
  left: 0;
  padding: 12px 8px;
  margin-left: 10px;
  margin-top: -7px;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}
.inputGroup :is(input:focus, input:valid) ~ label {
  transform: translateY(-80%) scale(0.9);
  margin: 0em;
  margin-left: 10px;
  padding: 0.4em;
  background-color: #212121;
}
.inputGroup :is(input:focus, input:valid) {
  border-color: rgb(150, 150, 200);
  outline: none;
  border: none;
}
.roomTitleInput {
  outline: none;
  border: none;
  padding: 12px 8px;
  width: 240px;
  border-radius: 10px;
  background: #212121;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
}
.roomTitleBtnBox {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
}
.loading {
  background: #212121;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}
.roomBoxBox {
  width: 100%;
  padding-bottom: 100px;
}
.roomBoxLeft {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
.roomBoxRight {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.roomBox {
  display: flex;
  width: 400px;
  height: 60px;
  align-items: center;
  background-color: #1e1e1e;
  cursor: pointer;
  border-radius: 0.75em;
  transition: ease 0.2s;
  box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2),
    -0.75em -0.75em 1em rgba(255, 255, 255, 0.05);
  border: 1.5px solid #2a2a2a;
  margin-top: 15px;
  transition: all 0.3 ease-in-out;
}
.notAllowed {
  cursor: not-allowed;
}
.roomBox:hover {
  background-color: #2a2a2a;
  border: 1.5px solid #c389f2;
}
.roomId {
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  text-align: left;
  margin-left: 15px;
}
.peopleNum {
  color: #fbfbfb;
  font-weight: 400;
  font-size: 16px;
  text-align: right;
  margin-right: 15px;
}
.statusFull {
  width: 0.625em;
  height: 0.625em;
  background-color: #ff3333;
  margin: 0.375em 0;
  border-radius: 0.5em;
  margin-left: 7px;
}
.statusGood {
  width: 0.625em;
  height: 0.625em;
  background-color: #33ff63;
  margin: 0.375em 0;
  border-radius: 0.5em;
  margin-left: 7px;
}

.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  white-space: pre;
  font-size: 30px;
  line-height: 1.2em;
  height: 1.2em;
  overflow: hidden;
  color: white;
}

.loader:before {
  content: "Loading...\A⌰oading...\A⌰⍜ading...\A⌰⍜⏃ding...\A⌰⍜⏃⎅ing...\A⌰⍜⏃⎅⟟ng...\A⌰⍜⏃⎅⟟⋏g...\A⌰⍜⏃⎅⟟⋏☌...\A⌰⍜⏃⎅⟟⋏☌⟒..\A⌰⍜⏃⎅⟟⋏☌⟒⏁.\A⌰⍜⏃⎅⟟⋏☌⟒⏁⋔";
  white-space: pre;
  display: inline-block;
  animation: l39 1s infinite steps(11) alternate;
}

@keyframes l39 {
  100% {
    transform: translateY(-100%);
  }
}

/* ========================= */
.button {
  --white: #ffe7ff;
  --purple-100: #f4b1fd;
  --purple-200: #d190ff;
  --purple-300: #c389f2;
  --purple-400: #8e26e2;
  --purple-500: #5e2b83;
  --radius: 18px;

  border-radius: var(--radius);
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-family: Arial;
  background: transparent;
  letter-spacing: -1px;
  border: 0;
  position: relative;
  width: 130px;
  height: 60px;
  transform: rotate(353deg) skewX(4deg);
}

.wrap {
  border-radius: inherit;
  overflow: hidden;
  height: 100%;
  transform: translate(6px, -6px);
  padding: 3px;
  background: linear-gradient(
    to bottom,
    var(--purple-100) 0%,
    var(--purple-400) 100%
  );
  position: relative;
  transition: all 0.3s ease;
}

.outline {
  position: absolute;
  overflow: hidden;
  inset: 0;
  opacity: 0;
  outline: none;
  border-radius: inherit;
  transition: all 0.4s ease;
}
.outline::before {
  content: "";
  position: absolute;
  inset: 2px;
  width: 120px;
  height: 300px;
  margin: auto;
  background: linear-gradient(
    to right,
    transparent 0%,
    white 50%,
    transparent 100%
  );
  animation: spin 3s linear infinite;
  animation-play-state: paused;
}

.content {
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  height: 100%;
  gap: 10px;
  border-radius: calc(var(--radius) * 0.85);
  font-weight: 600;
  transition: all 0.3s ease;
  background: linear-gradient(
    to bottom,
    var(--purple-300) 0%,
    var(--purple-400) 100%
  );
  box-shadow: inset -2px 12px 11px -5px var(--purple-200),
    inset 1px -3px 11px 0px rgb(0 0 0 / 35%);
}
.content::before {
  content: "";
  inset: 0;
  position: absolute;
  z-index: 10;
  width: 80%;
  top: 45%;
  bottom: 35%;
  opacity: 0.7;
  margin: auto;
  background: linear-gradient(to bottom, transparent, var(--purple-400));
  filter: brightness(1.3) blur(5px);
}

.char {
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.char span {
  display: block;
  color: transparent;
  position: relative;
}
.char span:nth-child(5) {
  margin-left: 5px;
}
.char.state-1 span:nth-child(5) {
  margin-right: -3px;
}
.char.state-1 span {
  animation: charAppear 1.2s ease backwards calc(var(--i) * 0.03s);
}
.char.state-1 span::before,
.char span::after {
  content: attr(data-label);
  position: absolute;
  color: var(--white);
  text-shadow: -1px 1px 2px var(--purple-500);
  left: 0;
}
.char span::before {
  opacity: 0;
  transform: translateY(-100%);
}
.char.state-2 {
  position: absolute;
  left: 80px;
}
.char.state-2 span::after {
  opacity: 1;
}

.icon {
  animation: resetArrow 0.8s cubic-bezier(0.7, -0.5, 0.3, 1.2) forwards;
  z-index: 10;
}
.icon div,
.icon div::before,
.icon div::after {
  height: 3px;
  border-radius: 1px;
  background-color: var(--white);
}
.icon div::before,
.icon div::after {
  content: "";
  position: absolute;
  right: 0;
  transform-origin: center right;
  width: 14px;
  border-radius: 15px;
  transition: all 0.3s ease;
}
.icon div {
  position: relative;
  width: 24px;
  box-shadow: -2px 2px 5px var(--purple-400);
  transform: scale(0.9);
  background: linear-gradient(to bottom, var(--white), var(--purple-100));
  animation: swingArrow 1s ease-in-out infinite;
  animation-play-state: paused;
}
.icon div::before {
  transform: rotate(44deg);
  top: 1px;
  box-shadow: 1px -2px 3px -1px var(--purple-400);
  animation: rotateArrowLine 1s linear infinite;
  animation-play-state: paused;
}
.icon div::after {
  bottom: 1px;
  transform: rotate(316deg);
  box-shadow: -2px 2px 3px 0 var(--purple-400);
  background: linear-gradient(200deg, var(--white), var(--purple-100));
  animation: rotateArrowLine2 1s linear infinite;
  animation-play-state: paused;
}

.path {
  position: absolute;
  z-index: 12;
  bottom: 0;
  left: 0;
  right: 0;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  pointer-events: none;
}

.splash {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  stroke-dasharray: 60 60;
  stroke-dashoffset: 60;
  transform: translate(-17%, -31%);
  stroke: var(--purple-300);
}

/** STATES */

.button:hover .words {
  opacity: 1;
}
.button:hover .words span {
  animation-play-state: running;
}

.button:hover .char.state-1 span::before {
  animation: charAppear 0.7s ease calc(var(--i) * 0.03s);
}

.button:hover .char.state-1 span::after {
  opacity: 1;
  animation: charDisappear 0.7s ease calc(var(--i) * 0.03s);
}

.button:hover .wrap {
  transform: translate(8px, -8px);
}

.button:hover .outline {
  opacity: 1;
}

.button:hover .outline::before,
.button:hover .icon div::before,
.button:hover .icon div::after,
.button:hover .icon div {
  animation-play-state: running;
}

.button:active .words,
.button:active .outline {
  opacity: 0;
}

.button:active .wrap {
  transform: translate(3px, -3px);
}

.button:active .splash {
  animation: splash 0.8s cubic-bezier(0.3, 0, 0, 1) forwards 0.05s;
}

.button:focus .path {
  animation: path 1.6s ease forwards 0.2s;
}

.button:focus .icon {
  animation: arrow 1s cubic-bezier(0.7, -0.5, 0.3, 1.5) forwards;
}

.char.state-2 span::after,
.button:focus .char.state-1 span {
  animation: charDisappear 0.5s ease forwards calc(var(--i) * 0.03s);
}

.button:focus .char.state-2 span::after {
  animation: charAppear 1s ease backwards calc(var(--i) * 0.03s);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes charAppear {
  0% {
    transform: translateY(50%);
    opacity: 0;
    filter: blur(20px);
  }
  20% {
    transform: translateY(70%);
    opacity: 1;
  }
  50% {
    transform: translateY(-15%);
    opacity: 1;
    filter: blur(0);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes charDisappear {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-70%);
    opacity: 0;
    filter: blur(3px);
  }
}

@keyframes arrow {
  0% {
    opacity: 1;
  }
  50% {
    transform: translateX(60px);
    opacity: 0;
  }
  51% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-128px);
    opacity: 1;
  }
}

@keyframes swingArrow {
  50% {
    transform: translateX(5px) scale(0.9);
  }
}

@keyframes rotateArrowLine {
  50% {
    transform: rotate(30deg);
  }
  80% {
    transform: rotate(55deg);
  }
}

@keyframes rotateArrowLine2 {
  50% {
    transform: rotate(330deg);
  }
  80% {
    transform: rotate(300deg);
  }
}

@keyframes resetArrow {
  0% {
    transform: translateX(-128px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes path {
  from {
    stroke: white;
  }
  to {
    stroke-dashoffset: -480;
    stroke: #f9c6fe;
  }
}

.below {
  position: fixed;
  right: 30%;
  bottom: 100px;
  transform: translateX(50%);
}
</style>
