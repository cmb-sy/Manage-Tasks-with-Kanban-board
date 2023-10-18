import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../components/authentication/SingnUp.vue";
import SignIn from "../components/authentication/SignIn.vue";
import SingnOut from "../components/authentication/SignOut.vue";

const routes = [
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/signout",
    name: "signout",
    component: SingnOut,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
