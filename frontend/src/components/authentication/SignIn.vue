<script setup>
// import { ref, onMounted } from "vue";
import { ref } from "vue";
import axios from "axios";

const userData = ref({
  password: "",
  username: "",
});

const signIn = async () => {
  const userJsonData = JSON.stringify(userData);
  try {
    // 非同期：レスポンスが受信されるまで待機
    const response = await axios.post("/accounts/sample/", userJsonData);
    let tmp = response.data;
    console.log(tmp);
  } catch (e) {
    console.error(e);
  }
  userData.value = "";
};

// onMounted: Vue3のコンポーネントがマウントされたときに実行されるコード
// onMounted(signIn);
</script>

<template>
  <div class="signin">
    <h1>サインイン</h1>
    <input type="text" placeholder="ユーザ名" v-model="userData.username" />
    <input
      type="password"
      placeholder="パスワード"
      v-model="userData.password"
    />
    <button v-on:click="signIn">サインイン</button>
    <p>
      アカウント登録はしましたか? <br />
      <router-link to="/signup"
        >ここをクリックしてアカウント登録をしてください</router-link
      >
    </p>
  </div>
</template>
