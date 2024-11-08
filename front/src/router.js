import { createRouter, createWebHistory } from "vue-router";
import home from "./components/home.vue";
import login from "./components/login.vue";
import register from "./components/register.vue";
import logout from "./components/logout.vue";
import room from "./components/room.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/logout",
    component: logout,
  },
  {
    path: "/room/:roomId",
    component: room,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
