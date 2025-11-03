<template>
    <AppHeader @fab-click="toggleFab" />
    <AppLayout>
      <router-view v-slot="{ Component }">
        <transition name="route-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </AppLayout>
    <div class="fab-desktop-wrapper">
      <FabButton v-if="!isMobile" :class="{ open: isFabOpen }" class="fab-desktop" @click="toggleFab" />
    </div>
    <Transition name="mm">
      <RightBarModal v-if="isFabOpen" @close="closeFab" />
    </Transition>
    <AppFooter v-if="showAppFooter" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppLayout from './components/AppLayout.vue';
import RightBarModal from './components/RightBarModal.vue';
import FabButton from './components/FabButton.vue';
import { useRouter } from 'vue-router';
import AppFooter from './components/AppFooter.vue';

const router = useRouter();
const isFabOpen = ref(false);
const isMobile = ref(false);

const showAppFooter = computed(() => router.currentRoute.value.path !== '/');

function toggleFab() {
  isFabOpen.value = !isFabOpen.value;
}

function closeFab() {
  isFabOpen.value = false;
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

function copyAddress() {
  alert('Address copied!');
  // In a real application, you would copy the address to the clipboard
}

function disconnectWallet() {
  alert('Wallet disconnected!');
  // In a real application, you would disconnect the user's wallet
}
</script>

<style>
/* Global styles if any */
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
body {
  margin: 0;
  font-family: "SourceHanSansCN-Regular", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Route transition styles */
.route-fade-enter-from,
.route-fade-leave-to {
  opacity: 0;
  transform: translateX(20px); /* Example transition */
}

.route-fade-enter-active,
.route-fade-leave-active {
  transition: all 0.3s ease-out;
}

/* Modal transition styles */
.mm-enter-active,
.mm-leave-active {
  transition: opacity 0.3s ease;
}

.mm-enter-from,
.mm-leave-to {
  opacity: 0;
}

/* FabButton styles */
.fab-desktop-wrapper {
  width: 1.45rem;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: flex-end;
  right:0;
  top: 0;
  z-index: 33;
pointer-events: none;
}
.fab-desktop {
  margin-bottom: 1.1rem;
  pointer-events: auto;
}
</style>
