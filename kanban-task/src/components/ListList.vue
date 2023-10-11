<!-- リスト自体 -->
<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

// 親コンポーネントから受け取るデータを定義
const props = defineProps({
  title: {
    type: String,
    required: true, //必ず受け取る
  },
  listIndex: {
    type: Number,
    required: true,
  },
});

const store = useStore(); // ストアを取得
const removeList = () => {
  if (confirm("本当にこのリストを削除しますか？")) {
    store.dispatch("removelist", { listIndex: props.listIndex });
  }
};
</script>

<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ props.title }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
  </div>
</template>
