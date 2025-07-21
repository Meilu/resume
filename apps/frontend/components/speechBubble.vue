<template>
  <v-banner class="position-relative text-caption" avatar="/public/images/avatar_jurgen_vector_small.png" :text="speechText"> </v-banner>
</template>

<script setup lang="ts">
const { speechText } = storeToRefs(useMenuStore());
</script>

<style>
.v-banner-text {
  padding-inline-end: 0 !important;
}
</style>
