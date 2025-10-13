<template>
  <div class="mask-content">
    <div class="title" v-if="title">
      <span v-for="(line, index) in titleLines" :key="index">
        {{ line }}
        <br v-if="index < titleLines.length - 1" />
      </span>
    </div>
    <div class="subtitle" v-if="subtitle">{{ subtitle }}</div>
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  forceDisplay: {type: Boolean, default: false},
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  maskOpacity: { type: Number, default: 0.7 }, // New prop for opacity
});

const titleLines = computed(() => props.title.split('\n'));

const maskBackground = computed(() => `rgba(0, 0, 0, ${props.maskOpacity})`);
</script>

<style scoped>
.mask-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  box-sizing: border-box;
  text-align: center;
  background: v-bind(maskBackground); /* Use v-bind to apply dynamic style */
  color: #fff;
  pointer-events: none; /* Allow clicks to pass through the mask */
}
.title {
  font-size: 0.32rem;
  font-weight: bold;
  width: 100%;
  pointer-events: auto; /* Re-enable pointer events for the title */
  z-index: 101; /* Ensure title is above other elements if needed */
}
.subtitle {
  font-size: 0.24rem;
  pointer-events: auto; /* Re-enable pointer events for the subtitle */
  z-index: 101; /* Ensure subtitle is above other elements if needed */
}
</style>