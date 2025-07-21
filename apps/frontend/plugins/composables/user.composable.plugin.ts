import { createAuthenticationService } from "~/services/authentication.service";

export default defineNuxtPlugin(() => {
  const { $firebase, $authService, $userStore } = useNuxtApp();

  const useUser = useUserComposable({
    store: $userStore,
    firebaseAuth: $firebase.auth,
    authService: $authService,
  });

  
  return {
    provide: {
      userComposable: useUser,
    },
  };
});
