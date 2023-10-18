<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const text = ref(null);

const data1 = {
  key1: "value1",
  key2: "value2",
};

const jsonData = JSON.stringify(data1);

// onMounted: Vue3のコンポーネントがマウントされたときに実行されるコード
onMounted(async () => {
  try {
    // awaitを使用することで、非同期処理が完了するまで待機
    const response = await axios.post("/accounts/sample/", jsonData);
    text.value = response.data;
    console.log(text.value);
  } catch (e) {
    console.error(e);
  }
});
</script>

<template>
  <div>
    {{ text }}
  </div>
</template>
