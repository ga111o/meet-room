<template>
  <div class="logout">
    <p>logout....</p>
  </div>
</template>

<script>
export default {
  name: "LOGOUT",
  data() {
    return {
      isLoggedIn: false,
      username: "",
    };
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem("token");
      this.isLoggedIn = !!token;
      if (this.isLoggedIn) {
        this.logout();
      } else {
        this.$router.push("/login");
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.isLoggedIn = false;
      this.username = "";
      this.$router.push("/login");
    },
  },
};
</script>
