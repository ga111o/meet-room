<template>
  <div class="mainBox">
    <div class="registerBox">
      <h1>register</h1>
      <form v-if="!checkToken" @submit.prevent="registerUser">
        <div>
          <div class="idInputBox">
            <div class="inputGroup idInputGroups">
              <input
                autocomplete="off"
                required
                type="text"
                v-model="id"
                @keyup.enter="checkDuplicateId"
              />
              <label for="name">id</label>
            </div>

            <button
              type="button"
              @click="checkDuplicateId"
              :disabled="!id || !isDupName"
              class="mainBtn checkDupBtn"
            >
              <span v-if="!id || !isDupName">Awesome!</span>
              <span v-else>Check<br />Duplicate</span>
            </button>
          </div>
          <p v-if="duplicateMessage">{{ duplicateMessage }}</p>
        </div>
        <div class="inputGroup">
          <input
            autocomplete="off"
            required
            type="text"
            v-model="pw"
            @keyup.enter="registerUser"
          />
          <label for="name">password</label>
        </div>
        <div class="inputGroup">
          <input
            autocomplete="off"
            required
            type="text"
            v-model="confirmPw"
            @keyup.enter="registerUser"
            @input="checkPasswordMatch"
          />
          <label for="name">rewrite password</label>
          <p v-if="passwordMatchMessage">{{ passwordMatchMessage }}</p>
        </div>
        <div class="btns">
          <button class="mainBtn" @click="goToLogin">Sign in →</button>
          <button
            class="mainBtn registerBtn"
            type="submit"
            :disabled="isDupName || !isPasswordSame"
          >
            Sign up
          </button>
        </div>
      </form>
      <p>&nbsp;{{ registrationMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "REGISTER!",
  data() {
    return {
      id: "",
      pw: "",
      confirmPw: "",
      duplicateMessage: "",
      registrationMessage: "",
      isDupName: true,
      isPasswordSame: false,
      passwordMatchMessage: "",
      checkToken: true,
    };
  },
  watch: {
    id() {
      this.isDupName = true;
      this.duplicateMessage = "";
    },
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    async checkDuplicateId() {
      console.log(
        `${process.env.VUE_APP_FRONT_TO_BACK_URL}/register/check_dup_id`
      );
      if (this.id) {
        try {
          const response = await fetch(
            `${process.env.VUE_APP_FRONT_TO_BACK_URL}/register/check_dup_id`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id: this.id }),
            }
          );
          const message = await response.text();
          this.duplicateMessage =
            message === "true" ? "Already associated with an account." : "";
          this.isDupName = message === "true";
        } catch (error) {
          console.error("check_dup_id", error);
        }
      }
    },
    checkPasswordMatch() {
      if (this.pw && this.confirmPw) {
        this.isPasswordSame = this.pw === this.confirmPw;
        this.passwordMatchMessage = this.isPasswordSame
          ? ""
          : "Password doesn't match.";
      } else {
        this.isPasswordSame = false;
        this.passwordMatchMessage = "";
      }
    },
    async registerUser() {
      try {
        console.log(`${process.env.VUE_APP_FRONT_TO_BACK_URL}/register`);
        const response = await fetch(
          `${process.env.VUE_APP_FRONT_TO_BACK_URL}/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: this.id, pw: this.pw }),
          }
        );

        if (response.ok) {
          this.registrationMessage = await response.text();
          this.id = "";
          this.pw = "";
          this.confirmPw = "";
          this.duplicateMessage = "";
          this.goToLogin();
        } else {
          const errorMessage = await response.text();
          this.registrationMessage = errorMessage;
        }
      } catch (error) {
        console.error("회원가입 오류:", error);
      }
    },
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
          this.$router.push("/home");
        } else {
          this.checkToken = false;
        }
      } else {
        this.checkToken = false;
      }
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.idInputBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btns {
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
.registerBtn {
  background: linear-gradient(145deg, #c389f2, #8e26e2);
  color: white;
  margin-left: 6px;
  border: none;
}
.registerBtn:hover {
  background: linear-gradient(145deg, #8e26e2, #c389f2);
  box-shadow: 2px 2px 8px #9138da, -2px -2px 8px #cda0f2;
}
.mainBtn:disabled {
  background: linear-gradient(145deg, #d4cbdbc0, #b4abbbdd);
  color: #ccc; /* 비활성화된 글자색 */
  cursor: not-allowed; /* 커서 변경 */
}
.mainBtn:disabled:hover {
  color: #ccc;
  background: linear-gradient(145deg, #d4cbdbc0, #b4abbbdd);
  letter-spacing: 0px;
  box-shadow: 6px 6px 12px #000, -6px -6px 12px #2f2f2f;
}
.mainBox {
  margin-bottom: 300px;
  display: flex;
  justify-content: center;
  margin-top: 200px;
  color: white;
}
.loginBox {
  width: 300px;
  padding: 20px 20px 40px 20px;
  border-radius: 15px;
  color: #fff;
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
.idInputGroups input {
  width: 150px;
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
</style>
