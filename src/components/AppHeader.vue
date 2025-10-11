<template>
  <header class="page-header">
    <div class="logo" @click="goToHome"></div>
    <nav class="nav">
      <slot></slot> <!-- Slot for dynamic content -->
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push('/');
}
</script>

<style scoped>
.page-header {
  width: 100%;
  height: calc(1.55rem + 2px);
  display: flex;
  justify-content: space-between; /* Corrected */
  align-items: center;
  padding: 0 0.2rem;
  border-bottom: 2px solid #000;
  /* Removed gap from .page-header */
  z-index: 100;
}

.logo {
  width: 1.62rem;
  height: 1rem;
  background: url(../../assets/logo.d7845fb0.png) no-repeat center/contain;
  border-right: 1px solid #3e3a3a;
  cursor: pointer;
}

.nav {
  display: flex;
  gap: 0.2rem;
  margin-left: 0.4rem; /* Corrected */
  flex: 1; /* Added */
}

.nav-link {
  color: #111;
  text-decoration: none;
  font-size: 0.24rem;
  border-right: 2px solid #111; /* Added */
  padding-right: 0.2rem; /* Added */
  line-height: 1; /* Added */
  cursor: pointer; /* Added */
}

.nav-link:last-child {
  border-right: none; /* Added */
}

.nav-link.router-link-active {
  font-weight: 700;
  color: #caa45f;
}
</style>
