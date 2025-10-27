<template>
  <aside class="right-bar">
    <div class="bar-top">
      <div class="notice">
        <img :src="noticeImage" alt="" draggable="false" />
      </div>
      <div class="divider"></div>
      <slot name="extra"></slot>
      <div class="slogan">{{ displaySlogan }}</div>
    </div>
    <LanguageSwitcher class="language-switcher-wrapper" :showLangs="showLangs" />
  </aside>
</template>

<script setup>
import { noticeImage } from '../assets/base64_images';
import LanguageSwitcher from './LanguageSwitcher.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const props = defineProps({
  slogan: { type: String },
  showLangs: { type: Boolean, default: false },
});

const displaySlogan = computed(() => props.slogan || t('right_bar.slogan'));
</script>

<style scoped>

.language-switcher-wrapper {
  margin-bottom: 0.2rem;
}
.right-bar {
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
    width: 1.45rem;
    height: 100%;
    border-left: 2px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 12;
}

.bar-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
}
.notice {
  height: 1.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divider {
  width: 100%;
  height: 2px;
  background-color: #000;
}
.slogan {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.28rem;
  letter-spacing: 0.06rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  user-select: none;
  font-family:
    "Gen-Jyuu-Gothic-P-Bold-2", "SourceHanSansCN-Regular", sans-serif;
}

@font-face {
  font-family: "Gen-Jyuu-Gothic-P-Bold-2";
  src: url(../../assets/Gen-Jyuu-Gothic-P-Bold-2.9c3d5b1f.woff) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
</style>