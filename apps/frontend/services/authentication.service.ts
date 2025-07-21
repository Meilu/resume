import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export const createAuthenticationService = ({ firebaseAuth }: { firebaseAuth: any }) => {
  const logOut = async () => {
    await signOut(firebaseAuth);
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return userCredential.user;
  };

  const registerWithEmailAndPassword = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    return userCredential.user;
  };

  return {
    loginWithEmailAndPassword,
    logOut,
    registerWithEmailAndPassword,
  };
};

export type AuthenticationService = ReturnType<typeof createAuthenticationService>;
