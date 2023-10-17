import { createRouter, createWebHistory } from "vue-router";
import Singin from "../components/SignIn.vue";
import Mypage from "../components/MyPage.vue";

const routes = [
  {
    path: "/singin",
    name: "singin",
    component: Singin,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: Mypage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
