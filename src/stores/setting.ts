// @ts-check
import { defineStore, acceptHMRUpdate } from "pinia";

export const useSettingStore = defineStore({
  id: "setting",
  state: () => ({
    model: "light" as "light" | "dark",
    todo: "auto" as "auto" | boolean,
  }),

  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}
