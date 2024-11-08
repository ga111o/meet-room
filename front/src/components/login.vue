<template>
  <div class="mainBox">
    <div class="loginBox">
      <h1>Sign in</h1>
      <div v-if="isLoggedIn">
        <p>you are logged in as {{ username }}</p>
        <button @click="logout">logout</button>
      </div>
      <div v-else>
        <form @submit.prevent="login">
          <div class="inputBox">
            <div class="inputGroup">
              <input
                autocomplete="off"
                required
                type="text"
                v-model="id"
                @keyup.enter="login"
              />
              <label for="name">id</label>
            </div>
            <div class="inputGroup">
              <input
                autocomplete="off"
                required
                type="password"
                v-model="pw"
                @keyup.enter="login"
              />
              <label for="name">password</label>
            </div>
          </div>
        </form>
        <p class="error">&nbsp;{{ errorMessage }}</p>
        <div class="btns">
          <p v-if="!isLoggedIn" @click="goToRegister" class="register">
            Create an account
          </p>
          <button
            v-if="!isLoggedIn"
            @click="login"
            class="mainBtn"
            :disabled="isLoggingIn"
            :class="{ 'disabled-button': isLoggingIn }"
          >
            <template v-if="isLoggingIn">
              <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </template>
            <template v-else> Sign in </template>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LOGIN",
  data() {
    return {
      id: "",
      pw: "",
      errorMessage: "",
      isLoggedIn: false,
      username: "",
      isLoggingIn: false,
    };
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem("token");
      if (token) {
        this.isLoggedIn = true;
        const decoded = JSON.parse(atob(token.split(".")[1]));
        this.username = decoded.id;
      }
    },
    async login() {
      this.isLoggingIn = true;
      try {
        const response = await fetch(
          `${process.env.VUE_APP_FRONT_TO_BACK_URL}/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: this.id, pw: this.pw }),
          }
        );
        const data = await response.json();

        if (!response.ok) {
          if (data.message === "id") {
            this.errorMessage = "Incorrect id.";
          } else if (data.message === "pw") {
            this.errorMessage = "Incorrect password.";
          } else {
            this.errorMessage = " Incorrect username or password.";
            console.error(data);
          }
        } else {
          this.errorMessage = "";
          localStorage.setItem("token", data.token);
          this.isLoggedIn = true;
          this.username = this.id;
          this.$router.push("/home");
        }
      } catch (error) {
        this.errorMessage = ` Incorrect username or password.`;
      } finally {
        this.isLoggingIn = false;
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.isLoggedIn = false;
      this.username = "";
      this.$router.push("/login");
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.error {
  color: #ff9999;
}
.btns {
  display: flex;
  justify-content: space-between;
  margin: 0 22px;
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
  letter-spacing: 1px;
}
.mainBtn:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #000, inset -4px -4px 12px #1f1f1f;
}
.register {
  text-decoration: underline;
  cursor: pointer;
  margin: 0;
}
.mainBox {
  margin-bottom: 300px;
  display: flex;
  justify-content: center;
  margin-top: 200px;
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
.inputGroup label {
  font-size: 100%;
  position: absolute;
  left: 0;
  padding: 12px 8px;
  margin-left: 30px;
  margin-top: -7px;
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
.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  position: relative;
  width: 45px;
  height: 20px;
}
.lds-ellipsis div {
  position: absolute;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: -8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: -8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 16px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 40px;
  animation: lds-ellipsis3 0.6s infinite;
}
.disabled-button {
  cursor: not-allowed;
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
</style>
