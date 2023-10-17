<script setup>
import firebase from "../firebase.js";

const signOut = () => {
  // サインアウトのロジックをここに追加
  firebase.signOut(); // 仮の signOut 関数でFirebaseサインアウトを試みる

  // ここでAPI呼び出しや他のロジックを実行できます
};
</script>

<template>
  <div>
    <h1>SIGN OUT</h1>
    <button @click="signOut">Sign out Now!!</button>
  </div>
</template>
