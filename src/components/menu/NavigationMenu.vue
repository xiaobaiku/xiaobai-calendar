<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="box-border w-full h-auto aspect-square border-b border-green-200 flex justify-center items-center"
      role="button"
      @click="handleTodoClick"
    >
      <i class="ri-arrow-left-right-line text-[20px]"></i>
    </div>
    <div></div>
    <div
      class="mt-auto box-border w-full h-auto aspect-square border-t border-green-200"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { useSettingStore } from "~/stores/setting";

const settingStore = useSettingStore();

function handleTodoClick() {
  const todoValueList: (boolean | "auto")[] = ["auto", true, false];

  const index = todoValueList.findIndex((item) => item === settingStore.todo);

  [-1, 2].includes(index)
    ? (settingStore.todo = todoValueList.at(0) as "auto" | boolean)
    : (settingStore.todo = todoValueList.at(index + 1) as "auto" | boolean);
}
</script>
