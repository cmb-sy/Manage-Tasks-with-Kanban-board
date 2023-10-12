<script setup>
import ListAdd from "./ListAdd.vue";
import ListList from "./ListList.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const lists = store.state.lists; // const { lists } = mapState(["lists"]); ← オプションAPIしか使えない。

const totalCardCount = computed(() => {
  return store.getters.totalCardCount;
});
</script>

<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <ListList
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :listIndex="index"
          :cards="item.cards"
        />
        <ListAdd />
      </div>
    </main>
  </div>
</template>
