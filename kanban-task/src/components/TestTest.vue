<template>
  <div>
    {{ text }}
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const text = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get("/accounts/sample");
    text.value = response.data;
  } catch (e) {
    console.error(e);
  }
});
</script>
