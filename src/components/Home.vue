<template>
    <main class="page-main">
      <Slider :slides="slides" />
    </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Slider from './Slider.vue';

// Import slide components
import SplashScreen from './SplashScreen.vue';
import CloudSlide from './CloudSlide.vue';
import FloatSlideD from './FloatSlideD.vue';
import OrangeSlide from './OrangeSlide.vue';
import FloatSlideE from './FloatSlideE.vue';
import CardsSlide from './CardsSlide.vue';
import DevicesShow from './DevicesShow.vue';

// Data and state from the original home.js
const showLoginOptions = ref(false);

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

// The 'w' array from home.js contains the slide components
const slides = [
  SplashScreen,
  CloudSlide,
  DevicesShow,
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
    display: flex;
    flex-direction: column;
    position: relative; /* Keep relative for children that might need absolute positioning relative to the page */
  }

  .content-wrapper {
    display: flex;
    flex-direction: row;
    flex-grow: 1; /* Allow content-wrapper to take up remaining vertical space */
    width: 100%;
  }

  .page-main {
    display: flex;
    width: 100%; /* Will be overridden by flex-grow in content-wrapper */
    flex-grow: 1; /* Allow main content to take up available horizontal space */
  }
  
  @media (max-width: 768px) {

    .page-main {
      flex-direction: column;
      margin-right: 0;
    }
  }

.logo2 {
  /* Styles for the logo in the extra slot of RightBar */
}
</style>