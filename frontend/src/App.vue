<script setup>
// import BackBoard from "./components/BackBoard.vue";
import TestTest from "./components/TestTest.vue";
</script>

<template>
  <div id="app">
    <div id="nav">
      <TestTest />
      <router-link to="/">Home</router-link>
      <router-link to="/singup">Sing up</router-link>
      <router-link to="/singin">Sing in</router-link>
      <router-link to="/singout">Sing out</router-link>
      <router-link to="/mypage">Mypage</router-link>
    </div>
    <router-view />
  </div>
</template>

<!-- <template>
  <div id="app">
    <BackBoard />
  </div>
</template> -->
