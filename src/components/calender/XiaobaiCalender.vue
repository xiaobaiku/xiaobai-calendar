<template>
  <div class="w-full h-full">
    <div class="w-full h-[70px] bg-gray-50 flex items-center">
      <p class="text-[24px] ml-[10px]">{{ poetry }}</p>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const poetry = ref("");

function getPoetry() {
  const jinrishici = require("jinrishici");
  console.log(jinrishici);
  jinrishici.load((result: { data: { content: string } }) => {
    poetry.value = result.data.content;
  });
}

onMounted(() => {
  getPoetry();
});
</script>
