<script setup>
// import BackBoard from "./components/BackBoard.vue";

import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";

const store = useStore();
const $router = useRouter();

const userData = ref({
  username: "nakashima",
  password: "Hogehoge1234!!",
});

// アクセストークンを受け取り保存できたらログイン成功
const signIn = async () => {
  try {
    // 非同期：レスポンスが受信されるまで待機
    const response = await axios.post(
      "http://127.0.0.1:8000/accounts/login/",
      userData.value
    );

    updateUserAuthentication(response); //tokenとusernameの保存
    $router.push("/backboard");
  } catch (e) {
    alert("ログインに失敗しました");
    console.error(e);
  }
  // userData.value = ""; // 入力文字のリセット
};

// onMounted: Vue3のコンポーネントがマウントされたときに実行されるコード
// onMounted(signIn);

const updateUserAuthentication = (authnticationJson) => {
  store.dispatch("updateAuthentication", {
    token: authnticationJson.data.token,
    username: authnticationJson.data.username,
  });
};
</script>

<template>
  <div class="signin">
    <h1>サインインページ</h1>
    <form>
      <input type="text" placeholder="ユーザ名" v-model="userData.username" />
      <input
        type="password"
        placeholder="パスワード"
        v-model="userData.password"
      />
    </form>
    <button v-on:click="signIn">サインイン</button>
    <p>
      <router-link to="/signup">アカウント登録をしてください</router-link>
    </p>
  </div>
</template>

<!-- <template>
  <div id="app">
    <BackBoard />
  </div>
</template> -->
