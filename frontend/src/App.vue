<script setup>
// import BackBoard from "./components/BackBoard.vue";
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signuup">Sing up</router-link>
      <router-link to="/signin">Sing in</router-link>
      <router-link to="/signout">Sing out</router-link>
    </div>
    <router-view />
  </div>
</template>

<!-- <template>
  <div id="app">
    <BackBoard />
  </div>
</template> -->
