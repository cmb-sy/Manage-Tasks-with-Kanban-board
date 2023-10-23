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
    const response = await axios.post(
      "http://127.0.0.1:8000/accounts/signup/",
      userSignupData.value
    );
    // 非同期：レスポンスが受信されるまで待機
    console.log(response);
    $router.push("/backboard");
  } catch (e) {
    alert("サインアップに失敗しました");
    console.error(e);
  }
  userSignupData.value = "";
};
</script>

<template>
  <h2>サインアップ</h2>
  <p>本サイトにユーザ登録する方はこちらから</p>
  <form>
    <div class="mb-3">
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
    サインアップ
  </button>
</template>
