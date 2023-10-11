<script setup>
import ListAdd from "./ListAdd.vue";
import ListList from "./ListList.vue";
// import { mapState } from "vuex";

// const { lists } = mapState("", ["lists"]);
</script>

<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <div class="list-index">
        <ListList />
        <!-- <ListList
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :listIndex="index"
        /> -->
      </div>
      <ListAdd />
    </main>
  </div>
</template>
