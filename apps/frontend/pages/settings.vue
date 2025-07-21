<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" sm="12" md="7">
        <v-card class="mx-auto" prepend-icon="mdi-cog">
          <template v-slot:title>
            <span class="font-weight-black">Settings</span>
          </template>
          <client-only>
            <v-form fast-fail @submit.prevent>
              <v-card-item>
                <v-select v-model="$settingsStore.theme" label="Theme" :items="themeOptions" item-title="label" item-value="value" />
              </v-card-item>
              <v-card-actions>
                <v-btn @click="$settingsStore.resetSettings" type="submit" color="primary" block> Reset Settings </v-btn>
              </v-card-actions>
            </v-form>
          </client-only>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { Theme } from "@shared/dist";

const themeOptions = [
  { label: "System", value: Theme.Auto },
  { label: "Light", value: Theme.Light },
  { label: "Dark", value: Theme.Dark },
];
</script>
