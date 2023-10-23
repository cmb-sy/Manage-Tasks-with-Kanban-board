<script setup>
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
  console.log(userData.value);
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
  userData.value = ""; // 入力文字のリセット
};

const updateUserAuthentication = (authnticationJson) => {
  store.dispatch("updateAuthentication", {
    token: authnticationJson.data.token,
    username: authnticationJson.data.username,
  });
};
</script>

<template>
  <div class="signin">
    <head>
      <title>ログイン</title>
    </head>
    <!-- <form class="text-center card"> -->
    <div class="card-body text-center card" style="text-align: center">
      <h1 class="card-title">
        <img src="../../assets/css/img/accountIcon.png" alt="ログイン" />
      </h1>
      <p class="card-text">
        <input
          class="form-control"
          type="text"
          placeholder="username"
          v-model="userData.username"
        />
      </p>
      <p class="card-text">
        <input
          class="form-control"
          type="password"
          placeholder="password"
          v-model="userData.password"
        />
      </p>
      <p class="card-text">
        <button v-on:click="signIn" class="btn btn-primary">サインイン</button>
      </p>
      <p class="card-text" style="font-size: smaller">
        サインアップは<router-link to="/signup">こちら</router-link>
      </p>
    </div>
    <!-- </form> -->
  </div>
</template>
