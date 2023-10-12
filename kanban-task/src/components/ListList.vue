<!-- リスト自体 -->
<script setup>
import { defineProps, computed } from "vue";
import { useStore } from "vuex";
import CardAdd from "./CardAdd.vue";
import CardCard from "./CardCard.vue";

const store = useStore();

// 親コンポーネントから受け取るデータを定義
const props = defineProps({
  title: {
    type: String,
    required: true, //必ず受け取る
  },

  cards: {
    type: Array,
    required: true,
  },

  listIndex: {
    type: Number,
    required: true,
  },
});

const removeList = () => {
  if (confirm("本当にこのリストを削除しますか？")) {
    store.dispatch("removelist", { listIndex: props.listIndex });
  }
};

const totalCardInList = computed(() => {
  return props.cards.length;
});
</script>

<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total: {{ totalCardInList }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <CardCard
      v-for="(item, index) in cards"
      :body="item.body"
      :key="item.key"
      :cardIndex="index"
      :listIndex="listIndex"
    />
    <CardAdd :listIndex="listIndex" />
  </div>
</template>
