<script setup>
import { ref } from "vue";
import { useStore } from "vuex"; // useStore フックを追加

let title = ref("");
const store = useStore(); // ストアを取得

const addList = () => {
  store.dispatch("addList", { title: title.value }); // title.value として参照
  title.value = ""; // title.value として更新
};
</script>

<template>
  <form class="addlist" @submit.prevent="addList">
    <input
      v-model="title"
      type="text"
      class="text-input"
      placeholder="Add new list"
    />
    <button type="submit" class="add-button">Add</button>
  </form>
</template>
