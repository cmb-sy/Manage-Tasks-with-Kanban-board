<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

// refがないとドロップ後に元の場所へ戻る。
const todos = ref([
  { id: 1, name: "キャベツ", content: "テスト1", categoryNo: "1" },
  { id: 2, name: "赤い", content: "テスト2", categoryNo: "1" },
  { id: 3, name: "wswsw", content: "テスト3", categoryNo: "1" },
]);

const todos2 = ref([
  { id: 1, name: "おかし", content: "おかき", categoryNo: "2" },
  { id: 2, name: "青", content: "おかし", categoryNo: "2" },
  { id: 3, name: "黄色", content: "いし", categoryNo: "2" },
]);

const dragIndex = ref("");
const saveIndex = (index) => {
  console.log("dragStart", index);
  dragIndex.value = index;
};

const addTodo = () => {
  // 追加タスクに一番大きいインデックス番号を振る
  let newIndex = todos.value.length;
  todos.value.push({
    no: newIndex + 1,
    name: newTodo.value,
    categoryNo: "1",
  });
  // 値をいれた後空欄にする。
  newTodo.value = "";
};

const newTodo = ref("");

// タスクを削するメソッド
const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<!-- :key:idで空でも入れられるようになっている -->
<template>
  <input type="text" size="30" v-model="newTodo" />
  <button v-on:click="addTodo()">タスク追加</button><br /><br />
  <div class="flex">
    <div class="col3">
      <span class="tag">候補</span><br />
      <draggable v-model="todos" group="people" :key="id" tag="ul">
        <template #item="{ element, index }">
          <div class="drag-item" @dragstart="saveIndex(index)">
            <li class="handle">
              {{ element.name }}
              <button @click="removeTodo(index)">削除</button>
            </li>
          </div>
        </template>
      </draggable>
    </div>

    <div class="col2">
      <span class="tag">処理中</span>
      <draggable v-model="todos2" group="people" :key="id" tag="ul">
        <template #item="{ element, index }">
          <div class="drag-item" @dragstart="saveIndex(index)">
            <li class="handle">{{ element.name }} <button>削除</button></li>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped>
.drag-item {
  background: rgb(233, 249, 255);
  margin: 10px;
  width: 250px;
}
li {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
}
ul {
  list-style-type: none;
}

.col3 {
  background: #f0f8ff;
  width: 500px;
}

.col2 {
  background: #ffffe0;
  width: 500px;
}
.flex {
  display: flex;
  display: -webkit-flex;
}
</style>
