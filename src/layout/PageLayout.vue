<!--
 * @Author: zhangshixin mrzsxofanhui@163.com
 * @Date: 2022-08-08 08:31:12
 * @LastEditors: zhangshixin mrzsxofanhui@163.com
 * @LastEditTime: 2022-08-08 08:39:45
 * @FilePath: \xiaobai-calendar\src\layout\PageLayout.vue
 * @Description: 
 * @Signature: No Bugs No Overtime
-->
<template>
  <div class="flex h-full">
    <div
      class="w-[60px] h-full bg-gray-400 box-border border-r basis-[60px] flex-shrink-0 border-green-200"
    >
      <NavigationMenu />
    </div>
    <div class="h-full bg-gray-500 animationDelay" :style="calenderStyle">
      <XiaobaiCalender></XiaobaiCalender>
    </div>
    <div class="h-full bg-slate-700 animationDelay" :style="todoStyle"></div>
  </div>
</template>

<script lang="ts" setup>
import NavigationMenu from "~/components/menu/NavigationMenu.vue";
import { reactive, CSSProperties, computed, ref, unref, onMounted } from "vue";
import { px2vmin } from "~/utils/viewport";
import { useSettingStore } from "~/stores/setting";
import XiaobaiCalender from "~/components/calender/XiaobaiCalender.vue";

const settingStore = useSettingStore();

const clientWidth = ref(window.document.body.clientWidth)

const calenderStyle = computed<CSSProperties>(() => {
  clientWidth.value = window.document.body.clientWidth
  const pxNum = new Map([
    ["true", 0],
    ["false", 740/800*unref(clientWidth)],
    ["auto", 450/800*unref(clientWidth)],
  ]).get(settingStore.todo.toString()) as number;
  return {
    width: px2vmin(pxNum) + "vmin",
  };
});

const todoStyle = computed<CSSProperties>(() => {
  clientWidth.value = window.document.body.clientWidth
  const pxNum = new Map([
    ["true", 740/800*unref(clientWidth)],
    ["false", 0],
    ["auto", 290/800*unref(clientWidth)],
  ]).get(settingStore.todo.toString()) as number;
  return {
    width: px2vmin(pxNum) + "vmin",
  };
});

onMounted(()=> {
  clientWidth.value = window.document.body.clientWidth
})
</script>
