<template>
  <header class="page-header">
    <div class="logo" @click="goToHome"></div>
    <nav class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/assets" class="nav-link">我的资产</router-link>
      <router-link to="/invite-rank" class="nav-link">邀请排行</router-link>
      <a href="#" @click.prevent="copyAddress" class="nav-link">复制地址</a>
      <a href="#" @click.prevent="disconnectWallet" class="nav-link">断开链接</a>
    </nav>
    <FabButton class="mobile" />
    <LanguageSwitcher class="mobile-lang-wrapper" />
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import FabButton from './FabButton.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

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
  flex:none;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  border-bottom: 2px solid #000;
  z-index: 100;
}

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

@media (max-width: 768px) {
  .mobile-lang-wrapper {
    position: fixed;
    right: 0.25rem;
    bottom: 0.25rem;
    .lang {
      color: white !important;
    }
  }

  .page-header{
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 0;
    /* background-color: white; */
    .logo {
      border-right: 0;
      width: 0.75rem;
      position: absolute;
      top: 0.1rem;
    }
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
