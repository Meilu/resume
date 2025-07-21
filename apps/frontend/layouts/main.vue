<template>
  <v-layout>
    <v-navigation-drawer permanent v-model="drawer" @click="hideIfSmallScreen" :rail="rail">
      <template v-slot:prepend>
        <v-list-item v-if="isClient" lines="two" class="text-subtitle-2" :prepend-avatar="'https://ionicframework.com/docs/img/demos/avatar.svg'" :subtitle="user != null ? 'Ingelogd' : 'Uitgelogd'">
          <span class="text-truncate d-inline-block" v-if="user?.email != null" style="max-width: 140px">
            {{ user?.email }}
          </span>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <template v-if="isAuthenticated && isClient">
          <v-list-subheader> INFORMATIE </v-list-subheader>
          <v-list-item class="text-subtitle-1" title="Overzicht" @click="router.push({ path: '/' })">
            <template v-slot:prepend>
              <v-icon icon="mdi-timeline-outline"></v-icon>
            </template>
          </v-list-item>
          <v-list-item class="text-subtitle-1" title="Over mij" @click="router.push({ path: '/about-me' })">
            <template v-slot:prepend>
              <v-icon icon="mdi-account"></v-icon>
            </template>
          </v-list-item>
          <v-list-item class="text-subtitle-1" title="OSM" @click="router.push({ path: '/osm' })">
            <template v-slot:prepend>
              <v-icon icon="mdi-soccer"></v-icon>
            </template>
          </v-list-item>
          <v-list-item class="text-subtitle-1" title="Minifootball" @click="router.push({ path: '/minifootball' })">
            <template v-slot:prepend>
              <v-icon icon="mdi-unity"></v-icon>
            </template>
          </v-list-item>
        </template>
        <v-list-item v-if="!isAuthenticated && isClient" prepend-icon="mdi-account" title="Login" value="Login" @click="router.push({ path: '/login' })"></v-list-item>
        <v-list-subheader class="mt-5">EXTRA</v-list-subheader>
        <v-list-item @click="showBuildInfoDialog = true" title="Commit Info" prepend-icon="mdi-github">
          <template v-slot:append>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-list-item>
        <v-list-item class="text-subtitle-1" title="Settings" @click="router.push({ path: '/settings' })">
          <template v-slot:prepend>
            <v-icon icon="mdi-cog"></v-icon>
          </template>
        </v-list-item>
        <v-list-item v-if="isAuthenticated && isClient" prepend-icon="mdi-account" title="Uitloggen" value="Logout" @click="logOut"></v-list-item>
      </v-list>

      <template v-slot:append>
        <v-divider></v-divider>
        <speech-bubble></speech-bubble>
        <v-list density="compact" nav>
          <v-list-subheader>OVER MIJ</v-list-subheader>
          <v-list-item prepend-avatar="/public/images/avatar_jurgen.png" subtitle="jurgen.welschen@gmail.com" title="Jurgen Welschen"> </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <v-avatar>
                <v-icon icon="mdi-phone"></v-icon>
              </v-avatar>
            </template>

            <v-list-item-title>0651274065</v-list-item-title>
            <v-list-item-subtitle>Mobiel</v-list-item-subtitle>
          </v-list-item>
          <v-list-item prepend-icon="mdi-github" target="_blank" title="GitHub" value="GitHub" href="https://github.com/Meilu"></v-list-item>
          <v-list-item prepend-icon="mdi-linkedin" target="_blank" title="LinkedIn" value="LinkedIn" href="https://www.linkedin.com/in/jurgen-welschen/"></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar prominent image="/public/images/header_coral.png">
      <v-app-bar-nav-icon variant="text" @click.stop="toggleMenu()" color="white"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main class="scrollable-content">
      <NuxtPage />
    </v-main>
    <v-dialog v-model="showBuildInfoDialog" max-width="500px">
      <v-card>
        <v-card-title>Commit Info</v-card-title>
        <v-card-text>
          <vue-json-pretty :data="gitInfo" :deep="4" :key-name-as-string="true" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="showBuildInfoDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useDisplay } from "vuetify";
import { useRouter } from "vue-router";
import VueJsonPretty from "vue-json-pretty";
import { useTheme } from "vuetify";
import "vue-json-pretty/lib/styles.css";
import { Theme } from "@shared/dist";

const { $settingsStore } = useNuxtApp();
const vuetifyTheme = useTheme();

const config = useRuntimeConfig();
const gitInfo: any = config.public.gitInfo;

const { $userComposable, $settingsComposable } = useNuxtApp();
const { logOutUserAction, isAuthenticated, user } = $userComposable;

const router = useRouter();
const display = useDisplay();

const drawer = ref(false);
const rail = ref(false);
const isClient = ref(false);
const showBuildInfoDialog = ref(false);

watch(
  () => display.smAndUp.value,
  (isLarge) => {
    drawer.value = isLarge;
  },
  { immediate: true }
);

const hideIfSmallScreen = () => {
  if (display.xs.value) drawer.value = false;
};

const toggleMenu = () => {
  drawer.value = !drawer.value;
};

const goBack = () => router.back();

const logOut = async () => {
  await logOutUserAction();
  router.push({ path: "/login" });
};

onMounted(() => {
  isClient.value = true;

  watch(
    () => $settingsStore.theme,
    (newTheme) => {
      vuetifyTheme.global.name.value = $settingsComposable.resolveThemeName(newTheme);
    },
    { immediate: true }
  );
});
</script>

<style scoped>
.scrollable-content {
  height: calc(100vh);

  overflow-y: auto;
}
</style>

<style>
.vjs-tree-node.is-highlight,
.vjs-tree-node:hover {
  background-color: transparent;
}
</style>
