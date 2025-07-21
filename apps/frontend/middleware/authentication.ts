export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $userComposable } = useNuxtApp();
  const { isAuthenticated } = $userComposable;

  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }
});
