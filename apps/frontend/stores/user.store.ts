import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { type User } from "firebase/auth";

export const createUserStore = (storageKey: string) => {
  return defineStore(
    storageKey,
    () => {
      const user = ref<User | undefined>();
      const profilePicture = ref<string | undefined>();

      const isAuthenticated = computed(() => !!user.value);
      const isAuthenticating = ref(false);

      const authenticationError = ref<string | null>(null);

      const setUser = (firebaseUser: User) => {
        user.value = firebaseUser;
        clearErrors();
      };

      const setPicture = (base64: string) => {
        profilePicture.value = base64;
      };

      const clearStore = () => {
        user.value = undefined;
        profilePicture.value = undefined;
        clearErrors();
      };

      const clearErrors = () => {
        authenticationError.value = null;
      };

      return {
        user,
        isAuthenticating,
        isAuthenticated,
        authenticationError,
        profilePicture,
        setUser,
        setPicture,
        clearStore,
        clearErrors,
      };
    },
    {
      persist: {
        key: storageKey,
      },
    }
  );
};

export type UserStore = ReturnType<ReturnType<typeof createUserStore>>;
