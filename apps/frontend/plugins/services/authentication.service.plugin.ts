import { createAuthenticationService } from "~/services/authentication.service";

export default defineNuxtPlugin(() => {
  const { $firebase } = useNuxtApp();

  const authService = createAuthenticationService({
    firebaseAuth: $firebase.auth,
  });

  return {
    provide: {
      authService: authService
    },
  };
});
