<script setup>
import { ref, defineProps, computed } from "vue";
import { useStore } from "vuex";

const body = ref("");
const isEditing = ref(false);
const store = useStore();

// 親コンポーネントのデータ取得
const props = defineProps({
  listIndex: {
    type: Number,
    required: true,
  },
});

const addCardToList = () => {
  store.dispatch("addCardToList", {
    body: body.value,
    listIndex: props.listIndex,
  }),
    (body.value = "");
};

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

  if (bodyExists.value) {
    classList.push("addable");
  }
  return classList;
});

const bodyExists = computed(() => {
  return body.value.length > 0;
});
</script>
<template>
  <form :class="classes" @submit.prevent="addCardToList">
    <input
      v-model="body"
      type="text"
      class="text-input"
      placeholder="カードを追加"
      @focusin="startEditing"
      @focusout="finishEditing"
    />
    <br />
    <!--  改行をいれる -->
    <button type="submit" class="add-button" v-if="isEditing || bodyExists">
      追加
    </button>
  </form>
</template>
