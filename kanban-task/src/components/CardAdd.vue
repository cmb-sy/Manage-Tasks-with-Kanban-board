<script setup>
import { ref, defineProps, computed } from "vue";
import { useStore } from "vuex";

const body = ref("");
const isEditing = ref(false);
const props = defineProps({
  listIndex: {
    type: Number,
    required: true,
  },
});

const store = useStore();
const addCardToList = () => {
  store.dispatch("addCardToList", {
    body: body.value,
    listIndex: props.listIndex,
  }),
    (body.value = "");
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
      placeholder="Add new card"
      @focusin="startEditing"
      @focusout="finishEditing"
    />
    <button type="submit" class="add-button" v-if="isEditing || bodyExists">
      Add
    </button>
  </form>
</template>
