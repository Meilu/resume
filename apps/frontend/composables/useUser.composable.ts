import { computed, ref } from "vue";
import { onAuthStateChanged, type Unsubscribe, type Auth } from "firebase/auth";
import { type AuthenticationService } from "../services/authentication.service";
import { FirebaseError } from "firebase/app";

export const createUserComposable = () => {
  return ({ store, authService, firebaseAuth }: { store: UserStore; authService: AuthenticationService; firebaseAuth: Auth }) => {
    let unsubscribeAuthStateChanged: Unsubscribe | null = null;

    const user = computed(() => store.user);
    const profilePicture = computed(() => store.profilePicture);
    const isAuthenticated = computed(() => store.isAuthenticated);
    const isLoggingIn = computed(() => store.isAuthenticating);
    const authenticationError = computed(() => store.authenticationError);

    const isFirebaseReady = ref(false);

    const logOutUserAction = async () => {
      await authService.logOut();

      store.clearStore();

      if (unsubscribeAuthStateChanged) {
        unsubscribeAuthStateChanged();
        unsubscribeAuthStateChanged = null;
      }
    };

    const loginWithEmailAndPasswordAction = async (email: string, password: string) => {
      store.isAuthenticating = true;
      store.clearErrors();

      try {
        const user = await authService.loginWithEmailAndPassword(email, password);
        store.setUser(user);
      } catch (err) {
        const error = err instanceof FirebaseError ? err : new Error("Unknown login error");
        store.authenticationError = error.message;
      } finally {
        store.isAuthenticating = false;
      }
    };

    const registerWithEmailAndPasswordAction = async (email: string, password: string) => {
      store.isAuthenticating = true;
      store.authenticationError = null;

      try {
        const user = await authService.registerWithEmailAndPassword(email, password);
        store.setUser(user);
      } catch (err) {
        const error = err instanceof FirebaseError ? err : new Error("Unknown login error");
        store.authenticationError = error.message;
      } finally {
        store.isAuthenticating = false;
      }
    };

    const initializeOnAuthStateChanged = () => {
      unsubscribeAuthStateChanged = onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          store.setUser(user);
        } else {
          store.clearStore();
        }
        isFirebaseReady.value = true;
      });
    };

    initializeOnAuthStateChanged();

    return {
      loginWithEmailAndPasswordAction,
      registerWithEmailAndPasswordAction,
      logOutUserAction,
      initializeOnAuthStateChanged,
      isAuthenticated,
      isFirebaseReady,
      isLoggingIn,
      authenticationError,
      user,
      profilePicture,
    };
  };
};

export const useUserComposable = createUserComposable();
