<template>
  <div class="app-layout">
    <router-view  class="router-area"/>
    <RightBar v-if="!isMobile" class="desktop-right-bar">
      <template #extra>
        <div class="logo2" style="padding-top: .6rem;">
          <h2>KISHU</h2>
          <h3>WORLD</h3>
        </div>
      </template>
    </RightBar>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import RightBar from './RightBar.vue';

const router = useRouter();
const isMobile = ref(false);

function goToAbout() {
  router.push('/about');
}

function checkScreenSize() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.app-layout {
  position: relative;
  width: 100%;
  flex: 1;
}
.router-area {
  height: 100%;
  padding-right: 1.45rem;
  box-sizing: border-box;
}
.desktop-right-bar {
  height: 100%;
}
.logo2 {
  text-align: center;
  h2 {
    font-size: .4rem;
    font-weight: bold;
    transform: scaleY(2);
   }
  h3 {
    font-size: .25rem;
    font-weight: bold;
    transform: scaleY(2);
   }
}

@media (max-width: 768px) {
  .router-area {
    padding-right: 0;
  }
  .app-layout > :deep(.right-bar) {
    display: none;
  }
}
</style>