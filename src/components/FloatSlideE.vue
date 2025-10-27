<template>
  <div :class="['b5', { entered: isEntered, leaving: isLeaving }]">
    <div class="bg"></div>
    <div class="floats">
      <img
        v-for="(imageUrl, index) in imageUrls"
        :key="index"
        :src="imageUrl"
        :class="['f' + (index + 1)]"
        draggable="false"
      />
    </div>
    <SlideMask :subtitle="t('economic_ecosystem.hero_title')" :title="t('object_ecosystem.title')" maskOpacity="0.7"></SlideMask>
  </div>
</template>

<script setup>
import SlideMask from './SlideMask.vue';
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  active: { type: Boolean, default: false },
});

const emit = defineEmits(['leaveend']);

const imageUrls = [
  '/assets/e1.3b42a54f.png',
'/assets/e2.ad8de915.png',
'/assets/e3.7506ff3b.png',
'/assets/e4.5ad9c094.png',
'/assets/e5.57e1fcb0.png',
];

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
      }, 1400);
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
.b5 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #cb5851;
}
.bg {
  position: absolute;
  inset: 0;
  background: url(/assets/banner5.f4c6c54b.png) center/cover no-repeat;
  opacity: 0.95;
}
.floats {
  position: absolute;
  inset: 0;
}
.floats img {
  position: absolute;
  object-fit: cover;
  opacity: 0;
}
.f1 {
  left: 7.5rem;
  bottom: 3.5rem;
  width: 2.3rem;
  height: auto;
}
.f2 {
  right: 0;
  bottom: 0.22rem;
  width: 3.6rem;
  height: auto;
}
.f3 {
  left: 0.74rem;
  bottom: 0.94rem;
  width: 3.8rem;
  height: auto;
  z-index: 1;
}
.f4 {
  left: 0.1rem;
  bottom: 3.16rem;
  width: 2.6rem;
  height: auto;
}
.f5 {
  right: 5.1rem;
  top: 8%;
  width: 2rem;
  height: auto;
}
.b5.entered .f1 {
  animation: ea1 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.b5.entered .f2 {
  animation: ea2 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.05s;
}
.b5.entered .f3 {
  animation: ea3 1.3s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.1s;
}
.b5.entered .f4 {
  animation: ea4 1.4s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.15s;
}
.b5.entered .f5 {
  animation: ea5 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.2s;
}
.b5.leaving .f1 {
  animation: ea1o 1s ease both;
}
.b5.leaving .f2 {
  animation: ea2o 1s ease both 0.05s;
}
.b5.leaving .f3 {
  animation: ea3o 1s ease both 0.1s;
}
.b5.leaving .f4 {
  animation: ea4o 1s ease both 0.15s;
}
.b5.leaving .f5 {
  animation: ea5o 1s ease both 0.2s;
}
@keyframes ea1 {
  0% {
    opacity: 0;
    transform: translateY(-3rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes ea2 {
  0% {
    opacity: 0;
    transform: translate(3rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes ea3 {
  0% {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes ea4 {
  0% {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes ea5 {
  0% {
    opacity: 0;
    transform: translate(3rem, -2rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes ea1o {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-3rem) scale(0.96);
  }
}
@keyframes ea2o {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(3rem) scale(0.96);
  }
}
@keyframes ea3o {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
}
@keyframes ea4o {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
}
@keyframes ea5o {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(3rem, -2rem) scale(0.96);
  }
}
</style>
