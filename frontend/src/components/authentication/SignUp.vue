<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const $router = useRouter();

const userSignupData = ref({
  username: "",
  email: "",
  password: "",
});

const signUp = async () => {
  try {
    // 非同期：レスポンスが受信されるまで待機
    const response = await axios.post(
      "http://127.0.0.1:8000/accounts/signup/",
      userSignupData.value
    );
    console.log(response);
    $router.push("/backboard");
  } catch (e) {
    alert("サインアップに失敗しました");
    console.error(e);
  }
};
</script>
<template>
  <div class="sign-form">
    <h2 class="sign-form-title">サインアップ</h2>
    <p>本サイトにユーザ登録する方はこちらから</p>
    <p><router-link to="/signin">サインインへ戻る</router-link></p>
    <div class="sign-form-group">
      <label for="username">ユーザー名</label>
      <input
        type="text"
        id="username"
        class="form-control"
        v-model="userSignupData.username"
      />
    </div>

    <div class="sign-form-group">
      <label for="email">メールアドレス</label>
      <input
        type="email"
        id="email"
        class="form-control"
        aria-describedby="emailHelp"
        v-model="userSignupData.email"
      />
    </div>

    <div class="sign-form-group">
      <label for="password">パスワード</label>
      <input
        type="password"
        id="password"
        class="form-control"
        v-model="userSignupData.password"
      />
    </div>

    <div class="sign-button">
      <button
        type="submit"
        class="btn btn-primary signup-button"
        v-on:click="signUp"
      >
        サインアップ
      </button>
    </div>
  </div>
</template>
