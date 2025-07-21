<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" sm="12" md="12">
        <v-card class="mx-auto" max-width="400">
    <v-img height="150" src="/public/images/avatar_jurgen_vector2.png"></v-img>
    <v-card-text>
      <div class="font-weight-bold ms-1 mb-2">Short overview</div>
      <v-timeline align="start" density="compact">
        <v-timeline-item size="x-small">
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>from</strong> @time
            </div>

            <div>message</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'authentication',
});

</script>

<style></style>
