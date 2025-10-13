<template>
  <div :class="['splash', { entered: isEntered, leaving: isLeaving }]">
    <div class="mask"></div>
    <div class="logod logo">
      
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  active: { type: Boolean, default: false },
});

const emit = defineEmits(['leaveend']);

const isEntered = ref(false);
const isLeaving = ref(false);
let leaveTimeout = null;

function enterAnimation() {
  requestAnimationFrame(() => {
    isEntered.value = true;
  });
}

watch(
  () => props.active,
  (isActive) => {
    if (isActive) {
      if (leaveTimeout) clearTimeout(leaveTimeout);
      isLeaving.value = false;
      isEntered.value = false;
      enterAnimation();
    } else {
      isLeaving.value = true;
      if (leaveTimeout) clearTimeout(leaveTimeout);
      leaveTimeout = setTimeout(() => {
        isLeaving.value = false;
        isEntered.value = false;
        emit('leaveend');
      }, 800);
    }
  }
);

onMounted(() => {
  if (props.active) {
    enterAnimation();
  }
});

onUnmounted(() => {
  if (leaveTimeout) clearTimeout(leaveTimeout);
});
</script>

<style scoped>
.splash {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mask {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
}
.logod {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
   width: 2.4rem;
  height: 2.4rem;
  border-right: 0;
}


@media (max-width: 768px) {
  .logod img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
.splash.entered .logod img {
  animation: fadeIn 0.8s ease both;
}
.splash.leaving .logod img {
  animation: fadeOut 0.6s ease both;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -54%) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -46%) scale(0.99);
  }
}
</style>
