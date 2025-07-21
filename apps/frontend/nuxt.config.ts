// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { execSync } from 'child_process';

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  debug: true,
  devtools: {
    
    enabled: true,
    vscode: {
      reuseExistingServer: true,
      port: 3090
    }
  },
  build: {
    transpile: ["vuetify"],
  },
    plugins: [
    '~/plugins/0-firebase.ts',
    '~/plugins/vuetify',
    '~/plugins/services/authentication.service.plugin.ts',
    '~/plugins/stores/user.store.plugin.ts',
    '~/plugins/stores/settings.store.plugin.ts',
    '~/plugins/composables/user.composable.plugin.ts',
    '~/plugins/composables/settings.composable.plugin.ts',
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  piniaPluginPersistedstate: {
    storage: 'sessionStorage',
    debug: true
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBaseUrl: '',
      firebaseApiKey: '',
      firebaseAuthDomain: '',
      firebaseProjectId: '',
      firebaseStorageBucket: '',
      firebaseMessagingSenderId: 0,
      firebaseAppId: '',
      firebaseMeasurementId: '',
      gitInfo: getGitInfo()
    }
  }
});

function getGitInfo() {
  try {
    return {
      short: execSync('git rev-parse --short HEAD').toString().trim(),
      hash: execSync('git rev-parse HEAD').toString().trim(),
      message: execSync('git log -1 --pretty=%B').toString().trim(),
      author: execSync('git log -1 --pretty=%an').toString().trim(),
      date: execSync('git log -1 --pretty=%ad').toString().trim(),
    };
  } catch (error) {
    return { short: 'N/A', error: 'Failed to load git info' };
  }
}
