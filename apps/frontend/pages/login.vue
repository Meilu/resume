<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" sm="12" md="8">
        <v-card class="mx-auto">
          <v-card-title>
            Login
          </v-card-title>
          <v-card-text>
            Gebruik de knoppen hieronder om in te loggen of te registreren.
            <v-form fast-fail @submit.prevent class="mt-5">
              <v-text-field type="email" v-model="email" label="Email" :hide-details="true" class="mb-5"></v-text-field>
              <v-text-field type="password" v-model="password" label="Password" :hide-details="true" class="mb-5"></v-text-field>
              <v-card-actions>
                <v-btn @click="login" type="submit" class="sign-in-with-microsoft-button">Log in</v-btn>
                <v-btn @click="register" type="submit" class="sign-in-with-microsoft-button"> Registreer </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
  <Loader :is-loading="isLoading"></Loader>
  <v-dialog v-model="showMessage" max-width="500px">
    <v-card>
      <v-card-title></v-card-title>
      <v-card-text>
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="showMessage = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const { $userComposable } = useNuxtApp();
const { loginWithEmailAndPasswordAction, registerWithEmailAndPasswordAction, authenticationError } = $userComposable;
const { typewriter } = useMenuComposable();

const router = useRouter();
const email = ref<string>("username@email.com");
const password = ref<string>("password");
const isLoading = ref<boolean>(false);
const showMessage = ref(false);

const message = ref("");
const login = async () => {
  isLoading.value = true;

  await loginWithEmailAndPasswordAction(email.value, password.value);

  isLoading.value = false;

  if (!authenticationError.value) {
    router.push({ name: "index" });
    return;
  }
  message.value = `Error: ${authenticationError.value}`;
  showMessage.value = true;
};

const register = async () => {
  isLoading.value = true;

  await registerWithEmailAndPasswordAction(email.value, password.value);

  isLoading.value = false;

  if (!authenticationError.value) {
    message.value = "Registration successful! You can now log in.";
    showMessage.value = true;
    return;
  }
  message.value = `Error: ${authenticationError.value}`;
  showMessage.value = true;
};

onMounted(() => {
  typewriter([`Hoi en welkom!`, ` Log eerst in om mijn C.V te kunnen bekijken.`]);
});
</script>

<style></style>
