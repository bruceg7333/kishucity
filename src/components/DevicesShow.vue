<template>
  <div :class="['splash', { entered: isEntered, leaving: isLeaving }]">
    <SlideMask :title="$i18n.t('设置展示页面')"  maskOpacity="0.7"></SlideMask>
    <div class="title">{{ $i18n.t('设置展示页面') }}</div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import SlideMask from './SlideMask.vue';

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
  background-color: #d88159;
}
.title {
  font-size: 0.62rem;
  font-weight: bold;
  text-align: center;
  padding-top: 2rem;
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
