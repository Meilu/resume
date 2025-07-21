import { Theme } from "@shared/dist";
import { defineStore } from "pinia";
import { ref } from "vue";

export const createSettingsStore = (storageKey: string) => {
  return defineStore(
    storageKey,
    () => {

      const theme = ref<Theme>(Theme.Auto);
      const resetSettings = () => {
        theme.value = Theme.Light;
      };

      return {
        theme,
        resetSettings,
      };
    },
    {
      persist: {
        key: storageKey,
      },
    }
  );
};

export type SettingsStore = ReturnType<ReturnType<typeof createSettingsStore>>;
