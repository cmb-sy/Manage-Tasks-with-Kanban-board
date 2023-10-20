<script setup>
import { ref } from "vue";
import axios from "axios";

const userSignupData = ref({
  username: "nakashima",
  email: "free.freeman1214@gmail.com",
  password: "Hogehoge1234!!",
});

const signUp = async () => {
  const userSignupJsonData = JSON.stringify(userSignupData);
  try {
    const response2 = await axios.post(
      "http://127.0.0.1:8000/accounts/signup/",
      userSignupJsonData
    );
    // 非同期：レスポンスが受信されるまで待機

    console.log(response2);
    // console.log(response);
  } catch (e) {
    console.error(e);
  }
  // userData.value = "";
};
</script>

<template>
  <h2>サインアップフォーム</h2>
  <p>本サイトにユーザ登録する方はこちらから</p>
  <form>
    <div class="ml-3 mt-4 w-50">
      <div class="mt-4">
        <p style="font-size: 20px">ユーザー名</p>
        <input
          type="text"
          class="form-control"
          v-model="userSignupData.username"
        />

        <div class="mt-4">
          <p style="font-size: 20px">メールアドレス</p>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            v-model="userSignupData.email"
          />
          <div class="mt-4">
            <p style="font-size: 20px">パスワード</p>
            <input
              type="password"
              class="form-control"
              v-model="userSignupData.password"
            />
            <div class="mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  </form>
  <button
    type="submit"
    class="btn btn-primary"
    style="font-size: 20px"
    v-on:click="signUp"
  >
    Submit
  </button>
</template>
