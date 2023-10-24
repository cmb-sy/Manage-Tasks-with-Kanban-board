<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 親コンポーネントのデータを参照
const props = defineProps({
  body: {
    type: String,
    required: true,
  },
  listIndex: {
    type: Number,
    required: true,
  },
  cardIndex: {
    type: Number,
    required: true,
  },
});

const removeCardFromList = () => {
  if (confirm("本当にこのカードを削除しますか？")) {
    store.dispatch("removeCardFromList", {
      cardIndex: props.cardIndex,
      listIndex: props.listIndex,
    });
  }
};
</script>

<template>
  <div class="card">
    <button class="close-button" @click="removeCardFromList">×</button>
    <p>
      {{ body }}
    </p>
  </div>
</template>
