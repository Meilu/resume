<template>
<v-dialog v-model="isLoading" persistent fullscreen>
  <div class="d-flex justify-center align-center fill-height">
    <img src="/images/loader.png" alt="Loading" style="width: 60px;" class="spin-animation" />
  </div>
</v-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  isLoading: boolean;
}>();

const { isLoading } = toRefs(props);
</script>

<style scoped>
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}
.spin-animation {

  animation:spin 1s linear infinite;
}

</style>
