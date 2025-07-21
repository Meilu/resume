import { createSettingsStore } from '@/stores/settings.store';

export default defineNuxtPlugin(() => {

  const useSettingsStore = createSettingsStore('settings');

  return {
    provide: {
      settingsStore: useSettingsStore()
    },
  };
});
