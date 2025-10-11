<template>
  <div class="page">
    <div class="content-wrapper">
      <main class="page-main">
      <Slider :slides="slides" />
    </main>
    <RightBar :fab-open="isFabOpen" :show-langs="showLoginOptions" @fab-click="toggleFab">
      <template #extra>
        <div class="logo2" style="padding-top: .6rem;">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAB1CAYAAAACy8wKAAAFO0lEQVR4nO2cjVHjMBCFlcw14CshV4KvhFwJXAlQApQAJSQlkBKSEkgJoYRQgm/EaW82y6705NhXE/ab8QC2LMvP+2PJMrOu6wLCbDaLpbDC0+bvjYD3HZlfwU2PzrfKC8w+4T2ejVsSAByTvjJuSQAuEoCLBOAiAbhIAC4SgIsE4CIBuEgALhKAiwTgIgG4SAAuEoCLBOAiAbhIAHG90TKE0KaibyGEtXIaLxPZhxB27O779nswhPBqXHoRQrhJdTVp3y6V36Xr565ttY/XTTxVHufI+3nf0aVtq5wQG3hkZV7YDRId25aZC3eZLV7jtnCe1j5iKequPW7eT8ndohgrJkp8knfGE88Rb/RRHN8Li6NraUJdlJJIsdHnze7SzdXCzTee/yOE8JP9JNfdZNzpYuTWTN4LH34g/6xkKdzzSVhQFO1XKtfnAYyOJdKNcI9NIdDVIOMZsetd48ho7tYmNyP2yc36Iq3jMRPcJ4m0JBmoI+segZpDaZsCcpOy1D7tr4lBTUbg1tg/CKXU/AJcpNQFaFI9Wv3H1AbLDUvtszbJaF2ASCuyUx/eUhZ7UKyySS54EIliMlgi7UQGyj3pGmLw/55inOyVx/qfC25DmVDbHsYUVZrzgfk+37/K1IH0uDWWihs+Z9o3iR53dIXf6edOpOXbEYLjLlkEt6qxMp9084VRTu5/kyLtRcqWqV8OLYZADlqHcGsN2RWxHoLcvy8F7viEeSdy2WNsRZntJWOJvGHWDMIQSM/Q2sr3v5dHstuTMNXHyqdNwbhNQvHOZJuOc5HGHLvxYVWbYhw9uBvx90l5JDDeimAmuwS5wF3Tz9GmYYYK3MQWbMvJtdBGyCzEFS9ltyXQONnTH0sk6pfl2nISe2cpmlNEf8uMxBci8r+y+MGF2WeGMQ1zPV4+dw7avkbUWxowUzeH35PaFv8oEMBfBAC4SAAuEoCLBFD6zl/LRqHwnuyqyCU26gmXOlyrzECR0PpHkj6TalYHsDWOldqpnXe0RCp1tLQtNyn3v0UKxgMuTRyutHM0kbSC5wp1CZFk77tL08QWC6N8E0XiLwLujZExTWVQD7ZN5WTv+5yBaa53LIc5uV437ae5MH4ujfC1dmrTxnJbryrZpfGa5ssNs7pjYTIOsaQclrWU0KzJeqlx1KwoHuDuprmZNiKXtAMF7jFEsq4tLVPOcJyEDhLJsqKhpmovKZJmTXIO/2BZUWAiaUrmJv1ruaRIwbg+Wb8m4sk0SRRpbljMZN/L9yAXqLWArSYgTekhJ+MvbUlBcamDEWY+eBC5G5oB+jIFkbSQor12/5CEyN0k1zgeWytvYWSY0cq885VmAUrrq8zjX0kk01IKx96RQa02ZpSYQkwitNikxqJ/F08xSVOw1Iv+rGjpXa6g+cDcGCxOcp3QpbBEmtxa6ksyT++7tWUpyOq23BrGq4Gym5b+7guDXFoguh1pSc3kaJQ5lS6z6PNWKW+56JSyW3V9cvpWGxHLyraGmF1mevSqRAqGhSBbbnby04ske9zrtIaxZqpkkz6kmeR3IUOgfVvCP4ihD/ikldBHgRtAnM2Z81Ny6fG5A/Dq+nzpDYCvBQBwkQBcJAAXCcBFAnCRAFwkABcJwEUCcJEAXCQAFwnARQJwkQBcJAAXCcBFAnCRAFwkABcJwEUCcJEAXCQAFwnARQJwkQBcJAAXCcBFAsj979sTZrPSvxD4XNSspoFFSlzDOp3qp+3uViKE8AesRRCczV+InAAAAABJRU5ErkJggg==" alt="" draggable="false">
        </div>
      </template>
    </RightBar>
    </div>
    <Modal name="mm">
      <template #default>
        <RightBarModal v-if="isModalOpen" @close="closeModal" />
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Slider from './Slider.vue';
import RightBar from './RightBar.vue';
import RightBarModal from './RightBarModal.vue';
import Modal from './Modal.vue';

// Import slide components
import SplashScreen from './SplashScreen.vue';
import CloudSlide from './CloudSlide.vue';
import FloatSlideD from './FloatSlideD.vue';
import OrangeSlide from './OrangeSlide.vue';
import FloatSlideE from './FloatSlideE.vue';
import CardsSlide from './CardsSlide.vue';

// Data and state from the original home.js
const isFabOpen = ref(false);
const showLoginOptions = ref(false);
const isModalOpen = ref(false);

// Methods from the original home.js
const goToHome = () => {
  // t.push("/"); // Assuming 't' is vue-router's useRouter().push
  console.log('Navigate to home');
};

const toggleLogin = () => {
  showLoginOptions.value = !showLoginOptions.value;
};

const goToAssets = () => {
  // t.push("/assets"); // Assuming 't' is vue-router's useRouter().push
  console.log('Navigate to assets');
};

const toggleFab = () => {
  isFabOpen.value = !isFabOpen.value;
};

const closeModal = () => {
  isModalOpen.value = false;
};

// The 'w' array from home.js contains the slide components
const slides = [
  SplashScreen,
  CloudSlide,
  FloatSlideD,
  OrangeSlide,
  FloatSlideE,
  CardsSlide,
];

// Lifecycle hooks
onMounted(() => {
  // Any specific setup for the main Home component
});

onUnmounted(() => {
  // Any specific cleanup for the main Home component
});
</script>

<style scoped>
/* Styles for the main Home component */
  .page {
    width: 100%;
    min-height: 100vh; /* Use min-height to allow content to extend beyond viewport */
    display: flex;
    flex-direction: column;
    position: relative; /* Keep relative for children that might need absolute positioning relative to the page */
  }

  /* Removed .page-header styles as they are now in AppHeader */

  .content-wrapper {
    display: flex;
    flex-direction: row;
    flex-grow: 1; /* Allow content-wrapper to take up remaining vertical space */
    width: 100%;
  }

  .page-main {
    width: 100%; /* Will be overridden by flex-grow in content-wrapper */
    flex-grow: 1; /* Allow main content to take up available horizontal space */
    /* Removed margin-right as it's now handled by flex layout */
  }

.logo2 {
  /* Styles for the logo in the extra slot of RightBar */
}
</style>