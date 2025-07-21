// stores/user.store.ts (Nuxt project)
import { createUserStore } from '@/stores/user.store';

export default defineNuxtPlugin(() => {
  const { $firebase } = useNuxtApp();

  const useUserStore = createUserStore('user');

  return {
    provide: {
      userStore: useUserStore()
    },
  };
});
