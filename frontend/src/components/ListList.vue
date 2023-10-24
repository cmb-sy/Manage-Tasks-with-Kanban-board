<!--  -->
<script setup>
// ライブラリ
import { defineProps } from "vue";
import { useStore } from "vuex";
import draggable from "vuedraggable";

// 親コンポーネント
import CardAdd from "./CardAdd.vue";
import CardCard from "./CardCard.vue";

const store = useStore();

// 親コンポーネントのデータを参照
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

// リストの削除
const removeList = () => {
  if (confirm("本当にこのリストを削除しますか？")) {
    store.dispatch("removelist", { listIndex: props.listIndex });
  }
};
</script>

<template>
  <div class="list">
    <p class="list-title">{{ title }}</p>
    <div class="deletelist" @click="removeList">×</div>

    <draggable group="cards" :list="cards" @end="$emit('change')"
      ><!--emitで親コンポーネントのchangeイベントを呼ぶ-->
      <template #item="{ element, index }">
        <CardCard
          :body="element.body"
          :key="element.key"
          :cardIndex="index"
          :listIndex="listIndex"
        />
      </template>
    </draggable>
    <CardAdd :listIndex="listIndex" />
  </div>
</template>
