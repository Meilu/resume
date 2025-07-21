import { useTheme } from 'vuetify';

export default defineNuxtPlugin(() => {
  const { $settingsStore } = useNuxtApp();
  
  const useSettings = useSettingsComposable({
    store: $settingsStore,
    useTheme: useTheme
  });

  return {
    provide: {
      settingsComposable: useSettings,
    },
  };
});
