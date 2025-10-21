<template>
  <div id="app">
    <AppHeader />
    <AppLayout>
      <router-view v-slot="{ Component }">
        <transition name="route-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </AppLayout>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppLayout from './components/AppLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

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
</style>
