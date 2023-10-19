<script setup>
import { ref } from "vue";
import axios from "axios";

const userData = ref({
  username: "nakashima",
  // email: "",
  password: "Hogehoge1234!!",
});

const signIn = async () => {
  const userJsonData = JSON.stringify(userData);
  console.log(userJsonData);
  try {
    const response2 = await axios.post(
      "http://127.0.0.1:8000/accounts/login/",
      userData
    );
    // 非同期：レスポンスが受信されるまで待機

    console.log(response2);
    // console.log(response);
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
    {{ response2 }}
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
