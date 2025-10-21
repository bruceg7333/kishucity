<template>
  <div :class="['orange', { entered: isEntered, leaving: isLeaving }]">
    <div class="clouds">
      <img
        v-for="(imageUrl, index) in imageUrls"
        :key="index"
        :src="imageUrl"
        :class="['c' + (index + 1)]"
        draggable="false"
      />
    </div>
    <SlideMask :title="t('slides.slide2.title')" :subtitle="t('slides.slide2.subtitle')" maskOpacity="0.7"></SlideMask>
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
  '/assets/i1.77b7a461.png',
'/assets/i2.3fa22f26.png',
'/assets/i3.f239815b.png',
'/assets/i4.3299d505.png',
'/assets/i5.9eace426.png',
'/assets/i6.321fd21a.png',
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
      }, 1000);
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
.orange {
  width: 100%;
  height: 100%;
  background: #d88159;
  position: relative;
  overflow: hidden;
}
.clouds {
  position: absolute;
  inset: 0;
}
.clouds img {
  position: absolute;
  object-fit: cover;
  opacity: 0;
}
.c1 {
  right: 1.5rem;
  height: auto !important;
  width: 3.6rem !important;
  left: auto;
  z-index: 1;
  top: 28%;
}
.c2 {
  top: 55%;
  width: 6rem !important;
  height: auto !important;
  left: 6.5rem;
  z-index: 1;
}
.c3 {
  top: 0;
  left: auto;
  right: 0.6rem;
  width: 1rem !important;
  height: auto !important;
}
.c4 {
  left: 0;
  width: 4.3rem !important;
  height: auto !important;
  bottom: 0;
  z-index: 1;
}
.c5 {
  left: 0%;
  right: 0;
  margin: 0 auto;
  top: 16%;
  width: 6rem !important;
  height: auto !important;
}
.c6 {
  width: 100% !important;
  height: auto !important;
  bottom: 0;
  left: 0;
}
.orange.entered .c1 {
  animation: c1In 1.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.orange.entered .c2 {
  animation: c2In 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.05s;
}
.orange.entered .c3 {
  animation: c3In 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.1s;
}
.orange.entered .c4 {
  animation: c4In 1.9s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.15s;
}
.orange.entered .c5 {
  animation: c5In 2s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.2s;
}
.orange.entered .c6 {
  animation: c6In 2.1s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.25s;
}
.orange.leaving .c1 {
  animation: c1Out 1.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.orange.leaving .c2 {
  animation: c2Out 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.05s;
}
.orange.leaving .c3 {
  animation: c3Out 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.1s;
}
.orange.leaving .c4 {
  animation: c4Out 1.9s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.15s;
}
.orange.leaving .c5 {
  animation: c5Out 2s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.2s;
}
.orange.leaving .c6 {
  animation: c6Out 2.1s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.25s;
}
@keyframes c1In {
  0% {
    opacity: 0;
    transform: translate(30rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes c2In {
  0% {
    opacity: 0;
    top: 120%;
  }
  to {
    opacity: 1;
    top: 55%;
  }
}
@keyframes c3In {
  0% {
    opacity: 0;
    transform: translate(15rem, 22px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes c4In {
  0% {
    opacity: 0;
    transform: translate(-15rem, 30px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes c5In {
  0% {
    opacity: 0;
    transform: translateY(-10rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes c6In {
  0% {
    opacity: 0;
    transform: translateY(3rem) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes c1Out {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(30rem) scale(0.96);
  }
}
@keyframes c2Out {
  0% {
    opacity: 1;
    top: 55%;
  }
  to {
    opacity: 0;
    top: 120%;
  }
}
@keyframes c3Out {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(15rem, 22px) scale(0.97);
  }
}
@keyframes c4Out {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-15rem, 30px) scale(0.97);
  }
}
@keyframes c5Out {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10rem) scale(0.96);
  }
}
@keyframes c6Out {
  0% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(3rem) scale(0.96);
  }
}
</style>
