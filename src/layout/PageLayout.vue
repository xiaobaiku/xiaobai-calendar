<template>
  <div class="flex h-full">
    <div
      class="w-[60px] h-full bg-gray-400 box-border border-r basis-[60px] flex-shrink-0 border-green-200"
    >
      <NavigationMenu />
    </div>
    <div class="h-full bg-gray-500 animationDelay" :style="calenderStyle">
      <div class="h-full"></div>
    </div>
    <div class="h-full bg-slate-700 animationDelay" :style="todoStyle"></div>
  </div>
</template>

<script lang="ts" setup>
import NavigationMenu from "~/components/menu/NavigationMenu.vue";
import { reactive, CSSProperties, computed } from "vue";
import { px2vmin } from "~/utils/viewport";
import { useSettingStore } from "~/stores/setting";

const settingStore = useSettingStore();

const calenderStyle = computed<CSSProperties>(() => {
  const clientWidth = window.document.body.clientWidth
  const pxNum = new Map([
    ["true", 0],
    ["false", 740/800*clientWidth],
    ["auto", 450/800*clientWidth],
  ]).get(settingStore.todo.toString()) as number;
  return {
    width: px2vmin(pxNum) + "vmin",
  };
});

const todoStyle = computed<CSSProperties>(() => {
  const clientWidth = window.document.body.clientWidth
  const pxNum = new Map([
    ["true", 740/800*clientWidth],
    ["false", 0],
    ["auto", 290/800*clientWidth],
  ]).get(settingStore.todo.toString()) as number;
  return {
    width: px2vmin(pxNum) + "vmin",
  };
});
</script>
