<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex"; // useStore フックを追加

let title = ref("");
let isEditing = ref("");

const store = useStore(); // ストアを取得

// リストの追加
const addList = () => {
  store.dispatch("addlist", { title: title.value });
  title.value = ""; //追加後に入力フォームを空欄にする
};

const startEditing = () => {
  isEditing.value = true;
};

const finishEditing = () => {
  isEditing.value = false;
};

// class属性にactive要素を加える関数
const classes = computed(() => {
  const classList = ["addlist"];
  if (isEditing.value) {
    classList.push("active"); //classListにactive文字列を追加
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
