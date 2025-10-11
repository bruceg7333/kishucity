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
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 2px solid #000; /* Assuming this border is common for all headers */
  gap: 1rem;
  z-index: 100; /* Ensure header is on top */
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
  gap: 1rem; /* Adjust gap as needed */
  margin-left: auto; /* Push nav to the right */
}

.nav-link {
  color: #111;
  text-decoration: none;
  font-size: 0.24rem;
  /* Add other styles for nav links */
}

.nav-link.router-link-active {
  font-weight: bold;
  color: #caa45f; /* Highlight active link */
}
</style>
