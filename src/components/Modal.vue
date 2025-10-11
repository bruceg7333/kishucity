<template>
  <div class="modal-wrapper">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
});
</script>

<style scoped>
.modal-wrapper {
  /* Basic styling for modal wrapper if needed */
  position: relative; /* Or absolute/fixed depending on usage */
  z-index: 100;
}
</style>
