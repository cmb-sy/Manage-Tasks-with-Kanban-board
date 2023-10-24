/**
 * ルーティング先を定義する。その結果、以下のように書き込めるようになる。
 * templateにて：router-link to="/signup">hogehoge</router-link>
 * scriptにて：$router.push("/backboard");
 */
import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../components/authentication/SignUp.vue";
import SignIn from "../components/authentication/SignIn.vue";
import SignOut from "../components/authentication/SignOut.vue";
import BackBoard from "../components/BackBoard.vue";
// import { useStore } from "vuex";
import store from "../store/index";
// パスの設定
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
    component: SignOut,
    // ナビゲーションガード
    beforeEnter: (to, from, next) => {
      // ユーザがログインしているかどうかを確認
      if (store.getters.getToken) {
        // const store = useStore();
        next(); // アクセスを許可
      } else {
        next("/signin"); // ログインページにリダイレクト
      }
    },
  },
  {
    path: "/backboard",
    name: "backboard",
    component: BackBoard,
    // ナビゲーションガード
    beforeEnter: (to, from, next) => {
      // ユーザがログインしているかどうかを確認
      if (store.getters.getToken) {
        // const store = useStore();
        next(); // アクセスを許可
      } else {
        next("/signin"); // ログインページにリダイレクト
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
