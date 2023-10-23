<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import draggable from "vuedraggable";

import ListAdd from "./ListAdd.vue";
import ListList from "./ListList.vue";

const store = useStore();
const slists = store.state.lists;

const totalCardCount = computed(() => {
  return store.getters.totalCardCount;
});

const movingCard = () => {
  store.dispatch("updateList", { lists: slists });
};

const movingList = () => {
  store.dispatch("updateList", { lists: slists });
};
</script>

<template>
  <div>
    <nav><router-link to="/signout">サインアウト</router-link></nav>
    <main>
      <p class="info-line">ALL : {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <draggable :list="slists" @end="movingList">
          <template #item="{ element, index }">
            <ListList
              :key="element.id"
              :title="element.title"
              :listIndex="index"
              :cards="element.cards"
              @change="movingCard"
            />
          </template>
        </draggable>
        <ListAdd />
      </div>
    </main>
  </div>
</template>
