<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
</script>

<template>
  <div class="signin">
    <h1>サインイン</h1>
    <input type="text" placeholder="ユーザ名" v-model="username" />
    <input type="password" placeholder="パスワード" v-model="password" />
    <button @click="signIn">サインイン</button>
    <p>
      アカウント登録はしましたか? <br />
      <router-link to="/signup"
        >ここをクリックしてアカウント登録をしてください</router-link
      >
    </p>
  </div>
</template>
