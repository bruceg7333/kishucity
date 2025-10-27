<template>
  <div :class="['splash', { entered: isEntered, leaving: isLeaving }]">
    <div class="gallery-wall"  @click="handleJumpToProperties">
      <img v-for="(image, index) in galleryImages" :key="index" :src="image" :style="{ '--animation-order': index }" alt="Gallery Image" class="gallery-image" />
    </div>
    <SlideMask style="display: flex;" :title="t('Device_show_title')" :subtitle="t('Device_show_subtitle')" maskOpacity="0.6"></SlideMask>
  </div>  
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import SlideMask from './SlideMask.vue';
import { useI18n } from 'vue-i18n';
import router from '@/router';

const galleryImages = ref([
        '/properties/covers/image1.jpg',
        '/properties/covers/image10.png',
        '/properties/covers/image11.jpg',
        '/properties/covers/image12.png',
        '/properties/covers/image13.png',
        '/properties/covers/image14.png',
        '/properties/covers/image15.png',
        '/properties/covers/image16.jpg',
        '/properties/covers/image17.jpg',
        '/properties/covers/image18.jpg',
        '/properties/covers/image19.png',
        '/properties/covers/image2.jpg',
        '/properties/covers/image20.png',
        '/properties/covers/image21.jpg',
        '/properties/covers/image22.png',
        '/properties/covers/image23.png',
        '/properties/covers/image24.png',
        '/properties/covers/image25.jpg',
        '/properties/covers/image3.png',
        '/properties/covers/image4.jpg',
        '/properties/covers/image5.jpg',
        '/properties/covers/image6.jpg',
        '/properties/covers/image7.jpg',
        '/properties/covers/image8.jpg',
        '/properties/covers/image9.jpg',
      ]);

const { t } = useI18n();

const props = defineProps({
  active: { type: Boolean, default: false },
});
const handleJumpToProperties = () => {
  router.push('/properties');
}
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

.gallery-wall {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 30px;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 0; /* Ensure it's behind SlideMask */
}

.gallery-image {
  width: 100%;
  height: 100px; /* Adjust as needed */
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: slideInLeft 1s ease-out forwards;
  animation-delay: calc(var(--animation-order) * 0.1s);
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
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
