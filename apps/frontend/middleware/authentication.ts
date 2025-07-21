export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $userComposable } = useNuxtApp();
  const { isAuthenticated, isFirebaseReady } = $userComposable;
  
  while (!isFirebaseReady.value) {
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }
});
