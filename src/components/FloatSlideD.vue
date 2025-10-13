<template>
  <div :class="['b2', { entered: isEntered, leaving: isLeaving }]">
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
    <SlideMask title="Float Slide D" subtitle="Dynamic elements" maskOpacity="0.7"></SlideMask>
  </div>
</template>

<script setup>
import SlideMask from './SlideMask.vue';
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  active: { type: Boolean, default: false },
});

const emit = defineEmits(['leaveend']);

const imageUrls = [
  '/assets/d1.ac8ec8e3.png',
'/assets/d2.39f80b01.png',
'/assets/d3.ba1efc3d.png',
'/assets/d4.57f8ee73.png',
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
      }, 2000);
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
.b2 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bg {
  position: absolute;
  inset: 0;
  background: url(../../assets/banner2.85b3f4da.jpg) center/cover no-repeat;
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
  left: 8.34rem;
  bottom: 0.5rem;
  width: 5rem;
  height: auto;
}
.f2 {
  left: 0;
  bottom: 0;
  width: 8.5rem;
  height: auto;
  z-index: 2;
}
.f3 {
  left: 3.7rem;
  bottom: 1.2rem;
  width: 4.8rem;
  height: auto;
}
.f4 {
  right: 5.4rem;
  top: 1.3rem;
  width: 1.3rem;
  height: auto;
}
.b2.entered .f2 {
  animation: a2 3.2s cubic-bezier(0.2, 0.8, 0.2, 1) both 0s;
}
.b2.entered .f3 {
  animation: a3 3.4s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.2s;
}
.b2.entered .f1 {
  animation: a1 2.8s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.4s;
}
.b2.entered .f4 {
  animation: a4 3.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.6s;
}
.b2.leaving .f2 {
  animation: a2o 2s ease both 0s;
}
.b2.leaving .f3 {
  animation: a3o 2s ease both 0.2s;
}
.b2.leaving .f1 {
  animation: a1o 2s ease both 0.4s;
}
.b2.leaving .f4 {
  animation: a4o 2s ease both 0.6s;
}
@keyframes a1 {
  0% {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes a2 {
  0% {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes a3 {
  0% {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes a4 {
  0% {
    opacity: 0;
    transform: translate(3rem, -2rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes a1o {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
}
@keyframes a2o {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
}
@keyframes a3o {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-3rem) scale(0.96);
  }
}
@keyframes a4o {
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
