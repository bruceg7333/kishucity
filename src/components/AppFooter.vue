<template>
  <footer class="menu-footer" :class="{ 'show-footer': showFooter, 'always-show': props.alwaysShow }">
    <div class="logo">
     </div>
    <div class="links">
      <a href="/terms-of-use">{{ t('menu.compliance.terms') }}</a>
      <a href="/privacy-policy">{{ t('menu.compliance.privacy') }}</a>
      <div class="a-gap"></div>
      <a href="/copyright-terms">{{ t('menu.compliance.contact') }}</a>
      <a href="/end-user-terms">{{ t('menu.compliance.end_user_terms') }}</a>
    </div>
    <div class="logo-text">
      <h2>KISHU</h2>
      <h3>WORLD</h3>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  alwaysShow: {
    type: Boolean,
    default: false,
  },
});

const showFooter = ref(false);

const handleScroll = () => {
  if (props.alwaysShow) {
    showFooter.value = true;
    return;
  }
  const scrollY = window.scrollY;
  const visibleHeight = document.documentElement.clientHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollY + visibleHeight >= pageHeight - 100) { // -100 for a small buffer
    showFooter.value = true;
  } else {
    showFooter.value = false;
  }
};

onMounted(() => {
  if (props.alwaysShow) {
    showFooter.value = true;
  } else {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
  }
});

onUnmounted(() => {
  if (!props.alwaysShow) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped>
.logo {
  margin-top: 20px;
}
.a-gap {
  width: 2rem;
}
.logo-text { 
  h2 {
    font-size: 0.54rem; 
    margin: 0;
   }
  h3 {
    font-size: 0.34rem; 
   }
}
.menu-footer {
  min-height: 3.4rem;
  background: #0b0b0b;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 2.62rem;
  border-top: 1px solid #000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.menu-footer.show-footer {
  opacity: 1;
  visibility: visible;
}

.menu-footer.always-show {
  opacity: 1;
  visibility: visible;
}

.links {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
  flex-wrap: wrap;
  padding: 0.2rem 0;
}

.links a {
  color: #9fa0a0;
  font-size: 0.19rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.1rem 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.links a:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .menu-footer {
    min-height: 1rem;
    padding: 0.2rem;
    justify-content: center;
  }

  .links {
    margin: 0;
    justify-content: center;
    gap: 0.8rem;
  }

  .links a {
    font-size: 0.18rem;
    writing-mode: horizontal-tb;
  }
  .a-gap {
    display: none;
  }
  .logo, .logo-text {
    display: none;
  }
}

@media (max-width: 375px) {
  .links {
    gap: 0.6rem;
  }

  .links a {
    font-size: 0.16rem;
  }
}
</style>