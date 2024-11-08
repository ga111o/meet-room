<template>
  <div class="room">
    <h2 class="roomId">{{ roomId }}</h2>

    <div v-if="isLogIn" class="roomBox">
      <div class="leftBox">
        <!-- 좌측에 캠들 놓고 우측에 채팅?-->
        <div>
          <div class="myCamBox">
            <video
              class="myCam"
              ref="localVideoRef"
              autoplay
              muted
              playsinline
            />
            <p class="myId">
              {{ currentUserId }}
            </p>
          </div>
          <div class="toggleBtns">
            <button
              @click="toggleVideo"
              class="toggleOnBtn"
              :class="{ enabled: isVideoEnabled }"
            >
              <svg
                v-if="isVideoEnabled"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                  stroke="#c389f2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                  stroke="#c389f2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-else
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3L6.00007 6.00007M21 21L19.8455 19.8221M9.74194 4.06811C9.83646 4.04279 9.93334 4.02428 10.0319 4.01299C10.1453 4 10.2683 4 10.5141 4H13.5327C13.7786 4 13.9015 4 14.015 4.01299C14.6068 4.08078 15.1375 4.40882 15.4628 4.90782C15.5252 5.00345 15.5802 5.11345 15.6901 5.33333C15.7451 5.44329 15.7726 5.49827 15.8037 5.54609C15.9664 5.79559 16.2318 5.95961 16.5277 5.9935C16.5844 6 16.6459 6 16.7688 6H17.8234C18.9435 6 19.5036 6 19.9314 6.21799C20.3077 6.40973 20.6137 6.71569 20.8055 7.09202C21.0234 7.51984 21.0234 8.0799 21.0234 9.2V15.3496M19.8455 19.8221C19.4278 20 18.8702 20 17.8234 20H6.22344C5.10333 20 4.54328 20 4.11546 19.782C3.73913 19.5903 3.43317 19.2843 3.24142 18.908C3.02344 18.4802 3.02344 17.9201 3.02344 16.8V9.2C3.02344 8.0799 3.02344 7.51984 3.24142 7.09202C3.43317 6.71569 3.73913 6.40973 4.11546 6.21799C4.51385 6.015 5.0269 6.00103 6.00007 6.00007M19.8455 19.8221L14.5619 14.5619M14.5619 14.5619C14.0349 15.4243 13.0847 16 12 16C10.3431 16 9 14.6569 9 13C9 11.9153 9.57566 10.9651 10.4381 10.4381M14.5619 14.5619L10.4381 10.4381M10.4381 10.4381L6.00007 6.00007"
                  stroke="#cccccc"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              @click="toggleAudio"
              class="toggleOnBtn"
              :class="{ enabled: isAudioEnabled }"
            >
              <svg
                v-if="isAudioEnabled"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 1C9.79086 1 8 2.79086 8 5V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V5C16 2.79086 14.2091 1 12 1ZM10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V5Z"
                  fill="#c389f2"
                />
                <path
                  d="M5 9C5.55228 9 6 9.44771 6 10V12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12V10C18 9.44771 18.4477 9 19 9C19.5523 9 20 9.44771 20 10V12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.3938 18.9199 14.7518 19.717 12.9981 19.9375C12.9993 19.9582 13 19.979 13 20V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20C11 19.979 11.0006 19.9582 11.0019 19.9375C9.2482 19.717 7.60623 18.9199 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12V10C4 9.44771 4.44772 9 5 9Z"
                  fill="#c389f2"
                />
              </svg>
              <svg
                v-else
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 9.41421L23.7071 1.70711C24.0976 1.31658 24.0976 0.683417 23.7071 0.292893C23.3166 -0.0976311 22.6834 -0.0976311 22.2929 0.292893L0.292893 22.2929C-0.0976311 22.6834 -0.0976311 23.3166 0.292893 23.7071C0.683417 24.0976 1.31658 24.0976 1.70711 23.7071L7.0946 18.3196C8.2281 19.1995 9.57818 19.7585 11.0019 19.9375C11.0007 19.9582 11 19.979 11 20V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V20C13 19.979 12.9993 19.9582 12.9981 19.9375C14.7518 19.717 16.3938 18.9199 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12V10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10V12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.746 18 9.53253 17.6075 8.52379 16.8904L9.96817 15.446C10.5637 15.7978 11.2589 16 12 16C14.2091 16 16 14.2091 16 12V9.41421ZM14 11.4142L11.4818 13.9324C11.6469 13.9765 11.8206 14 12 14C13.1046 14 14 13.1046 14 12V11.4142Z"
                  fill="#cccccc"
                />
                <path
                  d="M8 5C8 2.79086 9.79086 1 12 1C13.983 1 15.6272 2.44198 15.9447 4.33454C16.0361 4.87922 15.6686 5.39484 15.124 5.48622C14.5793 5.5776 14.0637 5.21013 13.9723 4.66546C13.8137 3.72031 12.99 3 12 3C10.8954 3 10 3.89543 10 5V10.5C10 11.0523 9.55229 11.5 9 11.5C8.44771 11.5 8 11.0523 8 10.5V5Z"
                  fill="#cccccc"
                />
                <path
                  d="M6 10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 12.7811 4.11424 13.5505 4.33348 14.2857C4.49129 14.815 5.04827 15.1161 5.57752 14.9583C6.10678 14.8005 6.4079 14.2435 6.25009 13.7143C6.08568 13.1629 6 12.5859 6 12V10Z"
                  fill="#cccccc"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="cams">
          <div
            class="userCamBox"
            v-for="(video, userId) in remoteVideoRef"
            :key="userId"
          >
            <video
              class="userCam"
              :ref="`remoteVideo_${userId}`"
              autoplay
              playsinline
              :srcObject="video.srcObject"
            />
            <p class="userId">
              {{ userId }}
            </p>
          </div>
        </div>
      </div>
      <div class="rightBox">
        <div v-for="msg in chatMessages" :key="msg.timestamp" class="chats">
          <p>
            <strong>{{ msg.id }}</strong>
          </p>
          <p>{{ msg.message }}</p>
          <p class="messageTime">{{ msg.messageTime.split(" ").pop() }}</p>
        </div>
        <div class="inputBoxBox">
          <div class="idInputBox">
            <div class="inputGroup">
              <input
                v-model="chatInput"
                @keyup.enter="sendMessage"
                type="text"
              />
              <label for="name">Type your message!</label>
            </div>
            <button @click="sendMessage" class="mainBtn checkDupBtn">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8951 3.61502C19.7248 3.37794 20.492 4.1451 20.2549 4.97489L16.2553 18.9736C15.8267 20.4736 13.823 20.7554 12.9973 19.4317L10.1999 14.947C9.87715 14.4296 9.44039 13.9928 8.92298 13.6701L4.43823 10.8726C3.11455 10.047 3.39632 8.04323 4.89636 7.61465L18.8951 3.61502Z"
                  stroke="#cccccc"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.1924 13.6777L13.7279 10.1422"
                  stroke="#cccccc"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
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
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { io } from "socket.io-client";
import axios from "axios";
import { useRouter } from "vue-router";
import { nextTick } from "vue";

export default {
  name: "ROOM",
  setup() {
    const localVideoRef = ref(null);
    const remoteVideoRef = ref({});
    const remoteStreams = ref({});
    const connectedUsers = ref([]);
    const socketRef = ref(null);
    const peerConnections = ref({});
    const localStream = ref(null);
    const isNegotiating = ref({});
    const currentUserId = ref(null);
    const router = useRouter();
    const roomId = decodeURIComponent(window.location.pathname.split("/")[2]);
    const isVideoEnabled = ref(true);
    const isAudioEnabled = ref(true);
    const chatMessages = ref([]);
    const chatInput = ref("");

    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        localStream.value = stream;
        if (localVideoRef.value) {
          localVideoRef.value.srcObject = stream;
        }
      } catch (error) {
        console.error("=== initCamera", error);
        isVideoEnabled.value = false;
        isAudioEnabled.value = false;
      }
    };

    const toggleVideo = () => {
      if (localStream.value) {
        const videoTrack = localStream.value.getVideoTracks()[0];
        if (videoTrack) {
          videoTrack.enabled = !videoTrack.enabled;
          isVideoEnabled.value = videoTrack.enabled;

          Object.values(peerConnections.value).forEach((pc) => {
            const senders = pc.getSenders();
            const sender = senders.find((s) => s.track?.kind === "video");
            if (sender) {
              sender.track.enabled = videoTrack.enabled;
            }
          });
        }
      }
    };

    const toggleAudio = () => {
      if (localStream.value) {
        const audioTrack = localStream.value.getAudioTracks()[0];
        if (audioTrack) {
          audioTrack.enabled = !audioTrack.enabled;
          isAudioEnabled.value = audioTrack.enabled;

          Object.values(peerConnections.value).forEach((pc) => {
            const senders = pc.getSenders();
            const sender = senders.find((s) => s.track?.kind === "audio");
            if (sender) {
              sender.track.enabled = audioTrack.enabled;
            }
          });
        }
      }
    };

    const pendingIceCandidates = ref({});
    const isRemoteDescriptionSet = ref({});

    const createPeerConnection = async (userId) => {
      if (peerConnections.value[userId]) {
        return peerConnections.value[userId];
      }

      const peerConnection = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:stun1.l.google.com:19302" },
          { urls: "stun:stun2.l.google.com:19302" },
          { urls: "stun:stun3.l.google.com:19302" },
          { urls: "stun:stun4.l.google.com:19302" },
        ],
        iceCandidatePoolSize: 10,
        iceTransportPolicy: "all",
        bundlePolicy: "max-bundle",
      });

      pendingIceCandidates.value[userId] = [];
      isRemoteDescriptionSet.value[userId] = false;
      isNegotiating.value[userId] = false;

      peerConnection.onnegotiationneeded = async () => {
        try {
          if (isNegotiating.value[userId]) return;
          isNegotiating.value[userId] = true;

          console.log("peerConnection.onnegotiationneeded", userId);
          const offer = await peerConnection.createOffer();
          if (peerConnection.signalingState !== "stable") return;

          await peerConnection.setLocalDescription(offer);
          socketRef.value.emit("offer", offer, roomId, userId);
        } catch (err) {
          console.error("== peerConnection.onnegotiationneeded", err);
        } finally {
          isNegotiating.value[userId] = false;
        }
      };

      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          socketRef.value.emit("ice", event.candidate, roomId, userId);
        }
      };

      peerConnection.onicegatheringstatechange = () => {
        console.log(
          "peerConnection.iceGatheringState",
          peerConnection.iceGatheringState
        );
      };

      peerConnection.oniceconnectionstatechange = () => {
        console.log(
          "peerConnection.iceConnectionState",
          peerConnection.iceConnectionState
        );
        if (peerConnection.iceConnectionState === "failed") {
          peerConnection.restartIce();
        }
      };

      peerConnection.ontrack = async (event) => {
        console.log("receive remote from", userId);
        remoteStreams.value[userId] = event.streams[0];

        await nextTick();

        if (!remoteVideoRef.value[userId]) {
          const videoElement = document.createElement("video");
          videoElement.autoplay = true;
          videoElement.playsInline = true;
          videoElement.srcObject = event.streams[0];
          remoteVideoRef.value[userId] = videoElement;
        } else {
          remoteVideoRef.value[userId].srcObject = event.streams[0];
        }
      };

      peerConnection.onconnectionstatechange = () => {
        if (peerConnection.connectionState === "failed") {
          console.log("=== connection failed", userId);
          handlePeerDisconnection(userId);
        }
      };

      if (localStream.value) {
        localStream.value.getTracks().forEach((track) => {
          peerConnection.addTrack(track, localStream.value);
        });
      }

      peerConnections.value[userId] = peerConnection;
      return peerConnection;
    };

    const handlePendingIceCandidates = async (userId) => {
      const pc = peerConnections.value[userId];
      const candidates = pendingIceCandidates.value[userId] || [];

      try {
        for (const candidate of candidates) {
          await pc.addIceCandidate(new RTCIceCandidate(candidate));
        }
        pendingIceCandidates.value[userId] = [];
      } catch (err) {
        console.error("=== err add ice candidate", err);
      }
    };

    const handlePeerDisconnection = async (userId) => {
      if (peerConnections.value[userId]) {
        peerConnections.value[userId].close();
        delete peerConnections.value[userId];
        delete remoteStreams.value[userId];
        delete remoteVideoRef.value[userId];
        delete isNegotiating.value[userId];
      }
    };

    const initConnection = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get(
          `${process.env.VUE_APP_FRONT_TO_BACK_URL}/room/${roomId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 403) {
          router.push("/");
          return;
        }

        currentUserId.value = response.data.userId;

        if (!currentUserId.value) {
          router.push("/login");
          return;
        }

        socketRef.value = io(`${process.env.VUE_APP_FRONT_TO_BACK_URL}`, {
          query: { userId: currentUserId.value },
        });

        socketRef.value.emit("join_room", roomId);

        socketRef.value.on("room_full", () => {
          router.push("/");
        });

        socketRef.value.on("welcome", async (userId) => {
          console.log(userId, "joined");
          const pc = await createPeerConnection(userId);

          try {
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            socketRef.value.emit("offer", offer, roomId, userId);
          } catch (err) {
            console.error("=== err create offer", err);
          }
        });

        socketRef.value.on("offer", async (offer, userId) => {
          console.log("receive offer from:", userId);
          try {
            const pc = await createPeerConnection(userId);

            if (pc.signalingState !== "stable") {
              await new Promise((resolve) => {
                const checkState = () => {
                  if (pc.signalingState === "stable") {
                    resolve();
                  } else {
                    setTimeout(checkState, 100);
                  }
                };
                checkState();
              });
            }

            await pc.setRemoteDescription(new RTCSessionDescription(offer));
            isRemoteDescriptionSet.value[userId] = true;

            await handlePendingIceCandidates(userId);

            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            socketRef.value.emit("answer", answer, roomId, userId);
          } catch (err) {
            console.error("=== err at offer", err);
          }
        });

        socketRef.value.on("answer", async (answer, userId) => {
          console.log("received answer from", userId);
          try {
            const pc = peerConnections.value[userId];
            if (!pc) {
              console.log("no peer connection", userId);
              return;
            }

            if (pc.signalingState === "stable") {
              console.log("pc.signalingState !== 'stable'");
              return;
            }

            await pc.setRemoteDescription(new RTCSessionDescription(answer));
          } catch (err) {
            console.error("=== err at answer", err);
          }
        });

        socketRef.value.on("ice", async (ice, userId) => {
          try {
            const pc = peerConnections.value[userId];
            if (!pc) return;

            if (!isRemoteDescriptionSet.value[userId]) {
              pendingIceCandidates.value[userId] =
                pendingIceCandidates.value[userId] || [];
              pendingIceCandidates.value[userId].push(ice);
              return;
            }

            await pc.addIceCandidate(new RTCIceCandidate(ice));
          } catch (err) {
            console.error("=== err at ice", err);
          }
        });

        socketRef.value.on("user_left", (userId) => {
          handlePeerDisconnection(userId);
        });

        socketRef.value.on("chat", (chatData) => {
          console.log("chat message received:", chatData);
          chatMessages.value.push({
            id: chatData.id,
            message: chatData.message,
            messageTime: new Date(chatData.messageTime).toLocaleString(
              "ko-KR",
              timeOption
            ),
          });
        });
      } catch (error) {
        console.error("=== err initConnection", error);
        if (error.response && error.response.status === 403) {
          router.push("/");
        }
      }
    };

    const timeOption = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Seoul",
    };

    const sendMessage = () => {
      const message = chatInput.value.trim();
      if (message) {
        const messageTime = new Date().toLocaleString("ko-KR", timeOption);
        const chatData = {
          id: currentUserId.value,
          message: message,
          messageTime: messageTime,
        };

        console.log("in sendMessage func, chatData", chatData);
        socketRef.value.emit("chat", chatData, roomId);
        chatMessages.value.push(chatData);
        chatInput.value = "";
      }
    };

    onMounted(async () => {
      await initCamera();
      await initConnection();
    });

    const cleanup = () => {
      if (socketRef.value) {
        socketRef.value.disconnect();
      }
      if (localStream.value) {
        localStream.value.getTracks().forEach((track) => track.stop());
      }
      Object.values(peerConnections.value).forEach((pc) => {
        if (pc) {
          pc.close();
        }
      });
      peerConnections.value = {};
      remoteStreams.value = {};
      isNegotiating.value = {};
      pendingIceCandidates.value = {};
      isRemoteDescriptionSet.value = {};
    };
    onUnmounted(cleanup);

    return {
      localVideoRef,
      remoteVideoRef,
      remoteStreams,
      connectedUsers,
      roomId,
      currentUserId,
      isVideoEnabled,
      isAudioEnabled,
      toggleVideo,
      toggleAudio,
      chatMessages,
      chatInput,
      sendMessage,
    };
  },
  data() {
    return {
      isLogIn: false,
    };
  },
  methods: {
    async checkLoginStatus() {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await fetch(
          `${process.env.VUE_APP_FRONT_TO_BACK_URL}/verify_token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          this.isLogIn = true;
        } else {
          this.$router.push("/login");
        }
      } else {
        this.$router.push("/login");
      }
    },
  },
  created() {
    this.checkLoginStatus();
  },
};
</script>

<style scoped>
.toggleOnBtn {
  border-radius: 50px;
  margin: 0 5px;
  outline: none;
  border: none;
  padding: 5px 13px;
  background: linear-gradient(145deg, #212121, #282828);
  box-shadow: 6px 6px 22px #0f0f0f, -6px -6px 22px #3b3b3b;
}
.enabled {
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 3px 3px 6px #111, -3px -3px 6px #444;
}
.chatInput {
  padding: 10px 5px;
}
.roomId {
  margin-bottom: 40px;
}
.room {
  margin-top: 100px;
  color: #fff;
}
.chats {
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  text-align: left;
  padding: 5px;
  margin-bottom: 5px;
}

.chats p {
  margin: 0;
}
.messageTime {
  color: #ccc;
}

.inputBox {
  position: fixed;
  bottom: 20px;
  right: 16%;
  transform: translateX(50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.inputBox input {
  flex-grow: 1;
  margin-right: 10px;
}
.leftBox {
  overflow: hidden;
  height: 100%;
}
.rightBox {
  overflow-y: auto;
  height: 700px;
}
.roomBox {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  border-radius: 30px;
  color: #fff;
}
.userCam {
  border-radius: 10px;
  width: 100%;
}
.userId {
  position: absolute;
  bottom: 10px;
  right: 5px;
  margin: 0;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 6px;
  backdrop-filter: blur(4px);
}
.userCamBox {
  position: relative;
  display: inline-block;
  width: 40%;
}
.cams {
  display: flex;
  justify-content: space-around;
}
.myCamBox {
  position: relative;
  display: inline-block;
}
.myCam {
  margin: 5px 0;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 0 15px #333, 0 0 10px #222;
}

.myId {
  position: absolute;
  bottom: 10px;
  right: 5px;
  margin: 0;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 6px;
  backdrop-filter: blur(4px);
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
.toggleBtns {
  margin-bottom: 30px;
}

@keyframes l39 {
  100% {
    transform: translateY(-100%);
  }
}
.inputBoxBox {
  position: fixed;
  bottom: 20px;
  right: 16%;
  transform: translateX(50%);
  z-index: 1000;
}

.idInputBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mainBtn {
  transition: all 0.3s ease-out, box-shadow 0.3s ease-out,
    border-radius 0.3s ease-out;
  padding: 10px 14px;
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  background: #212121;
  border: 1px solid #212121;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #000, -6px -6px 12px #2f2f2f;
}
.mainBtn:hover {
  color: #ccc;
  box-shadow: 10px 10px 18px #000, -10px -10px 18px #2f2f2f;
  cursor: pointer;
}
.mainBtn:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #000, inset -4px -4px 12px #1f1f1f;
}
.checkDupBtn {
  transition: all 0.3s ease-out;
  font-size: 12px;
  letter-spacing: -0.3px;
  padding: 0 14px;
  height: 49px;
  margin-bottom: 9px;
  margin-left: 10px;
}
.checkDupBtn:hover {
  color: #ccc;
  box-shadow: 10px 10px 18px #000, -10px -10px 18px #2f2f2f;
  cursor: pointer;
}
.checkDupBtn:active {
  background: #212121;
  box-shadow: inset 5px 5px 10px #0d0d0d, inset -5px -5px 10px #353535;
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
  margin-left: 20px;
  margin-top: -9px;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}
.inputGroup :is(input:focus, input:valid) ~ label {
  transform: scale(0.9);
  margin: 0em;
  margin-left: 30px;
  padding: 0.4em;
  color: #21212100;
}
.inputGroup :is(input:focus, input:valid) {
  border-color: rgb(150, 150, 200);
  outline: none;
  border: none;
}

.input-container {
  position: fixed;
  bottom: 20px;
  right: 16%;
  transform: translateX(50%);
  z-index: 1000;

  border: 1px solid #ccc;

  background: white;
  border-radius: 1rem;
  background: linear-gradient(173deg, #23272f 0%, #14161a 100%);
  box-shadow: 10px 10px 20px #0e1013, -10px -10px 40px #383e4b;
  padding: 0.3rem;
  gap: 0.3rem;
}

@media (max-width: 500px) {
  .input-container {
    flex-direction: column;
  }

  .input-container input {
    border-radius: 0.8rem;
  }
}
</style>
