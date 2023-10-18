<script setup>
import { ref } from "vue";
import axios from "axios";

const userData = ref({
  username: "nakashima",
  // email: "",
  password: "Hogehoge1234!!",
});

const signIn = async () => {
  // const userJsonData = JSON.stringify(userData);
  try {
    const response = await axios.post("/accounts/login/", userData);
    // 非同期：レスポンスが受信されるまで待機
    // const response = await axios.post("/accounts/login/", userJsonData);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
  // userData.value = "";
};

// onMounted: Vue3のコンポーネントがマウントされたときに実行されるコード
// onMounted(signIn);
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
