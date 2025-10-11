<template>
  <div id="app">
    <AppHeader>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/assets" class="nav-link">我的资产</router-link>
      <router-link to="/invite-rank" class="nav-link">邀请排行</router-link>
      <a href="#" @click.prevent="copyAddress" class="nav-link">复制地址</a>
      <a href="#" @click.prevent="disconnectWallet" class="nav-link">断开链接</a>
    </AppHeader>
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
