<script setup>
import ListAdd from "./ListAdd.vue";
import ListList from "./ListList.vue";
import { useStore } from "vuex";

const store = useStore(); // ストアを取得
const lists = store.state.lists;
// const { lists } = mapState(["lists"]); ← オプションAPIしか使えない。
</script>

<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <div class="list-index">
        <ListList
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :listIndex="index"
        />
        <ListAdd />
      </div>
    </main>
  </div>
</template>
