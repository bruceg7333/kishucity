<template>
  <header class="page-header">
    <div class="logo" @click="goToHome"></div>
    <nav class="nav">
      <router-link to="/properties" class="nav-link">{{ $t('header.properties') }}</router-link>
      <router-link to="/about" class="nav-link">{{ $t('header.about_us') }}</router-link>
      <router-link to="/how-it-works" class="nav-link">{{ $t('header.how_it_works') }}</router-link>
      <router-link to="/white-papers" class="nav-link">{{ $t('header.white_papers') }}</router-link>
    </nav>
    <FabButton class="mobile" @click="handleFabClick" />
    <LanguageSwitcher class="mobile-lang-wrapper" />
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import FabButton from './FabButton.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const router = useRouter();
const emit = defineEmits(['fab-click']);

function goToHome() {
  router.push('/');
}

function handleFabClick() {
  emit('fab-click');
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
  box-sizing: border-box;
}

.mobile {
  position: absolute;
  right: 0.5rem;
  top: 0.25rem;
}

@media (min-width: 769px) {
  .mobile,.mobile-lang-wrapper {
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
