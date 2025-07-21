// plugins/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
  };

  // Initialize Firebase
  const app = initializeApp(<any>firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Optionally connect to emulators for local development
//   if (import.meta.dev) {
//     connectAuthEmulator(auth, 'http://127.0.0.1:9099');
//     connectFirestoreEmulator(db, '127.0.0.1', 8080);
//   }

  // Provide Firebase services globally in Nuxt
  return {
    provide: {
      firebase: { app, auth, db },
    },
  };
});
