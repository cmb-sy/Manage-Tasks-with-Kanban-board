<template>
  <div>
    {{ text }}
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const text = ref(null);

// onMountes:Vue 3のコンポーネントがマウントされたときに実行されるコード
onMounted(async () => {
  try {
    // awaitを使用することで、非同期処理が完了するまで待機
    const response = await axios.get("/accounts/sample");
    text.value = response.data;
    console.log(text.value);
  } catch (e) {
    console.error(e);
  }
});
</script>
