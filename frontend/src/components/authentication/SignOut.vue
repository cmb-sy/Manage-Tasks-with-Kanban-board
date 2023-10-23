<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const $router = useRouter();

const signOut = () => {
  store.dispatch("removeAuthentication");
  $router.push("/signin");
};
</script>
<template>
  <p style="text-align: center">
    <img src="../../assets/css/img/accountIcon.png" alt="ログイン" />
  </p>
  <div class="card-body text-center card" style="text-align: center">
    <p>本当にサインアウトしますか？</p>
    <button
      type="submit"
      class="btn btn-primary"
      style="font-size: 20px"
      v-on:click="signOut"
    >
      サインアウト
    </button>
  </div>
</template>
