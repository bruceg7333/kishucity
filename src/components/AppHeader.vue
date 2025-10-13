<template>
  <header class="page-header">
    <div class="logo" @click="goToHome"></div>
    <nav class="nav">
      <slot></slot> <!-- Slot for dynamic content -->
    </nav>
    <FabButton class="mobile" />
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import FabButton from './FabButton.vue';

const router = useRouter();

function goToHome() {
  router.push('/');
}
</script>

<style scoped>

.mobile {
  position: absolute;
  right: 0.5rem;
  top: 0.25rem;
}

@media (min-width: 769px) {
  .mobile {
    display: none;
  }
}

.logo {
  width: 1.62rem;
  height: 1rem;
  background: url(/assets/logo.d7845fb0.png) no-repeat center/contain;
  border-right: 1px solid #3e3a3a;
  cursor: pointer;
}

.nav {
  display: flex;
  gap: 0.2rem;
  margin-left: 0.4rem;
  flex: 1;
}

.nav-link {
  color: #111;
  text-decoration: none;
  font-size: 0.24rem;
  border-right: 2px solid #111;
  padding-right: 0.2rem;
  line-height: 1;
  cursor: pointer;
}

.nav-link:last-child {
  border-right: none;
}

.nav-link.router-link-active {
  font-weight: 700;
  color: #caa45f;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style>
