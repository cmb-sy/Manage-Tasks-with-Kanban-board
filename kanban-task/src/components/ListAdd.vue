<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex"; // useStore フックを追加

let title = ref("");
let isEditing = ref(false);
const store = useStore(); // ストアを取得

const addList = () => {
  store.dispatch("addlist", { title: title }); // title.value として参照
  title = ""; // title.value として更新
};

// フォーカスされる：ユーザビリティなクリックの実現
const startEditing = () => {
  isEditing.value = true;
};

const finishEditing = () => {
  isEditing.value = false;
};

const classes = computed(() => {
  const classList = ["addlist"];
  if (isEditing.value) {
    classList.push("active");
  }
  return classList;
});

const titleExists = computed(() => {
  return title.value.length > 0;
});
</script>

<template>
  <form :class="classes" @submit.prevent="addList">
    <input
      v-model="title"
      type="text"
      class="text-input"
      placeholder="Add new list"
      @focusin="startEditing"
      @focusout="finishEditing"
    />
    <button type="submit" class="add-button" v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>
