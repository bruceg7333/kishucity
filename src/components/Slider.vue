<template>
  <div class="slider">
    <div
      ref="viewportRef"
      class="viewport"
      @mousedown="handleDragStart"
      @touchstart="handleDragStart"
      @dragstart.prevent
      @wheel.prevent="handleWheel"
    >
      <div class="slide bottom">
        <slot
          name="item"
          :item="slides[nextIndex]"
          :index="nextIndex"
          :active="false"
        >
          <img
            v-if="typeof slides[nextIndex] === 'string'"
            :src="slides[nextIndex]"
            alt="slide"
            draggable="false"
          />
          <component
            v-else
            :is="slides[nextIndex]"
            :active="false"
            style="width: 100%; height: 100%;"
          />
        </slot>
      </div>
      <div
        class="slide top"
        :style="{
          transform: `translateY(${translateY}%)`,
          transition: isTransitionEnabled ? '' : 'none',
        }"
        @transitionend="handleTransitionEnd"
      >
        <slot
          name="item"
          :item="slides[currentIndex]"
          :index="currentIndex"
          :active="isCurrentSlideActive"
        >
          <img
            v-if="typeof slides[currentIndex] === 'string'"
            :src="slides[currentIndex]"
            alt="slide"
            draggable="false"
          />
          <component
            v-else
            :is="slides[currentIndex]"
            :active="isCurrentSlideActive"
            @leaveend="resolveLeaveEnd"
            style="width: 100%; height: 100%;"
          />
        </slot>
      </div>
    </div>
    <div class="dots">
      <span
        v-for="(slide, index) in slidesCount"
        :key="index"
        :class="{ on: index === currentIndex }"
      ></span>
    </div>
    <div class="v-indicator">
      <span
        v-for="(slide, index) in slidesCount"
        :key="'v' + index"
        :class="{ on: index === currentIndex }"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';

const props = defineProps({
  slides: { type: Array, default: () => [] },
});

const defaultSlides = [
  new URL('../../assets/banner1.080d5b46.png', import.meta.url).href,
  new URL('../../assets/banner2.95462274.png', import.meta.url).href,
];

const internalSlides = computed(() =>
  props.slides && props.slides.length ? props.slides : defaultSlides
);
const slidesCount = computed(() =>
  internalSlides.value.length < 2 ? 2 : internalSlides.value.length
);

const currentIndex = ref(0);
const nextIndex = ref(1);
const scrollDirection = ref('up');
const translateY = ref(0);
const isTransitionEnabled = ref(false);
const isAnimating = ref(false);
const isDragging = ref(false);
const dragStartY = ref(0);
const viewportRef = ref(null);

let isWheeling = false;
let transitionEndTimeout = null;

const isCurrentSlideActive = ref(true);
const isWaitingForLeaveEnd = ref(false);
let leaveEndResolver = null;
let leaveEndTimeout = null;

function clearTransitionEndTimeout() {
  if (transitionEndTimeout) {
    clearTimeout(transitionEndTimeout);
    transitionEndTimeout = null;
  }
}

function clearLeaveEndTimeout() {
  if (leaveEndTimeout) {
    clearTimeout(leaveEndTimeout);
    leaveEndTimeout = null;
  }
  leaveEndResolver = null;
  isWaitingForLeaveEnd.value = false;
}

function resolveLeaveEnd() {
  if (isWaitingForLeaveEnd.value && leaveEndResolver) {
    const resolver = leaveEndResolver;
    clearLeaveEndTimeout();
    resolver();
  }
}

async function resetSlideState() {
  currentIndex.value = nextIndex.value;
  await nextTick();
  isTransitionEnabled.value = false;
  translateY.value = 0;
  await nextTick();
  isAnimating.value = false;
  isCurrentSlideActive.value = true;
  nextIndex.value = (currentIndex.value + 1) % slidesCount.value;
  scrollDirection.value = 'up';
  isWheeling = false;
  clearTransitionEndTimeout();
}

async function handleTransitionEnd() {
  if (isAnimating.value) {
    await resetSlideState();
  }
}

function handleDragStart(event) {
  if (isAnimating.value || isWaitingForLeaveEnd.value) return;

  isDragging.value = true;
  isTransitionEnabled.value = false;
  dragStartY.value = 'touches' in event ? event.touches[0].clientY : event.clientY;
  scrollDirection.value = 'up';
  nextIndex.value = (currentIndex.value + 1) % slidesCount.value;

  window.addEventListener('mousemove', handleDragMove);
  window.addEventListener('mouseup', handleDragEnd);
  window.addEventListener('touchmove', handleDragMove, { passive: false });
  window.addEventListener('touchend', handleDragEnd);
  window.addEventListener('touchcancel', handleDragEnd);
}

function handleDragMove(event) {
  if (!isDragging.value) return;
  if ('preventDefault' in event) event.preventDefault();

  const dragDelta = ('touches' in event ? event.touches[0].clientY : event.clientY) - dragStartY.value;
  const viewport = viewportRef.value;
  let dragPercentage = (dragDelta / (viewport ? viewport.clientHeight : window.innerHeight)) * 100;

  if (dragPercentage < 0) {
    scrollDirection.value = 'up';
    nextIndex.value = (currentIndex.value + 1) % slidesCount.value;
    if (dragPercentage < -100) dragPercentage = -100;
  } else if (dragPercentage > 0) {
    scrollDirection.value = 'down';
    nextIndex.value = (currentIndex.value - 1 + slidesCount.value) % slidesCount.value;
    if (dragPercentage > 100) dragPercentage = 100;
  }
  translateY.value = dragPercentage;
}

function animateToNextSlide(direction) {
  if (direction === 'up') {
    scrollDirection.value = 'up';
    nextIndex.value = (currentIndex.value + 1) % slidesCount.value;
  } else {
    scrollDirection.value = 'down';
    nextIndex.value = (currentIndex.value - 1 + slidesCount.value) % slidesCount.value;
  }

  isAnimating.value = true;
  clearTransitionEndTimeout();

  return new Promise((resolve) => {
    isWaitingForLeaveEnd.value = true;
    leaveEndResolver = resolve;
    isCurrentSlideActive.value = false;

    const currentSlide = internalSlides.value[currentIndex.value];
        // Set a fallback timeout, but primarily rely on the component's leaveend event
        leaveEndTimeout = setTimeout(() => {
          if (leaveEndResolver) {
            const resolver = leaveEndResolver;
            clearLeaveEndTimeout();
            resolver();
          }
        }, 3000); // Max fallback timeout of 3 seconds
  }).then(() => {
    isTransitionEnabled.value = true;
    translateY.value = direction === 'up' ? -100 : 100;
    transitionEndTimeout = setTimeout(() => {
      if (isAnimating.value) resetSlideState();
    }, 1500);
  });
}

function handleDragEnd() {
  if (!isDragging.value) return;

  isDragging.value = false;
  if (!isAnimating.value && !isWaitingForLeaveEnd.value) {
    if (scrollDirection.value === 'up' && translateY.value <= -20) {
      animateToNextSlide('up');
    } else if (scrollDirection.value === 'down' && translateY.value >= 20) {
      animateToNextSlide('down');
    } else {
      isTransitionEnabled.value = true;
      translateY.value = 0;
      setTimeout(() => {
        isTransitionEnabled.value = false;
      }, 820);
    }
  }

  window.removeEventListener('mousemove', handleDragMove);
  window.removeEventListener('mouseup', handleDragEnd);
  window.removeEventListener('touchmove', handleDragMove);
  window.removeEventListener('touchend', handleDragEnd);
  window.removeEventListener('touchcancel', handleDragEnd);
}

function handleWheel(event) {
  if (isAnimating.value || isDragging.value || isWheeling || isWaitingForLeaveEnd.value) return;

  event.preventDefault();
  const deltaY = event.deltaY;
  if (Math.abs(deltaY) < 10) return;

  isWheeling = true;
  animateToNextSlide(deltaY > 0 ? 'up' : 'down');
}

onMounted(() => {
  nextIndex.value = (currentIndex.value + 1) % slidesCount.value;
  // The original code added a wheel listener to viewportRef.value, but it's already handled by @wheel.prevent on the template div.
  // If there's a need for a global wheel listener, it should be added here.
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleDragMove);
  window.removeEventListener('mouseup', handleDragEnd);
  window.removeEventListener('touchmove', handleDragMove);
  window.removeEventListener('touchend', handleDragEnd);
  window.removeEventListener('touchcancel', handleDragEnd);
  clearTransitionEndTimeout();
  clearLeaveEndTimeout();
});
</script>

<style scoped>
.slider {
  width: 100%;
  height: 100%;
  position: relative;
}
.viewport {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: grab;
}
.viewport:active {
  cursor: grabbing;
}
.slide {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex; /* Keep flex to allow content to grow */
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
}
.slide.top {
  z-index: 2;
  transition: transform 0.8s ease;
  will-change: transform;
  transform: translateY(0);
}
.slide.bottom {
  z-index: 1;
}
.dots {
  position: absolute;
  left: 50%;
  bottom: 0.3rem;
  transform: translate(-50%);
  display: flex;
  gap: 0.1rem;
}
.dots span {
  width: 0.08rem;
  height: 0.08rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.dots span.on {
  background: #111;
  border-color: #111;
}
.v-indicator {
  position: fixed;
  right: 1.125rem;
  top: 54%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.14rem;
  align-items: center;
  z-index: 13;
  pointer-events: none;
}

@media (max-width: 768px) {
  .v-indicator {
    right: 0.5rem;
  }
}
.v-indicator span {
  width: 3px;
  height: 0.16rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 2px;
  transition: all 0.3s ease;
}
.v-indicator span.on {
  height: 0.36rem;
  background: #caa45f;
}
</style>