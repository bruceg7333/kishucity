<template>
  <aside class="right-bar">
    <div class="notice">
      <img :src="noticeImage" alt="" draggable="false" />
    </div>
    <div class="divider"></div>
    <slot name="extra"></slot>
    <div class="slogan">{{ slogan }}</div>
    <div class="langs">
      <template v-if="showLangOptions">
        <div class="lang" @click="setLang('ja')">
          <span class="dot ja">
            <img :src="jaFlag" alt="" draggable="false" />
          </span>
          <span>日本語</span>
        </div>
        <div class="lang" @click="setLang('en')">
          <span class="dot en">
            <img :src="enFlag" alt="" draggable="false" />
          </span>
          <span>EN</span>
        </div>
        <div class="lang" @click="setLang('zh')">
          <span class="dot zh">
            <img :src="zhFlag" alt="" draggable="false" />
          </span>
          <span>中文</span>
        </div>
      </template>
      <div v-else class="lang" @click="toggleLangOptions">
        <span v-if="currentLang === 'ja'" class="dot ja">
          <img :src="jaFlag" alt="" draggable="false" />
        </span>
        <span v-else-if="currentLang === 'en'" class="dot en">
          <img :src="enFlag" alt="" draggable="false" />
        </span>
        <span v-else-if="currentLang === 'zh'" class="dot zh">
          <img :src="zhFlag" alt="" draggable="false" />
        </span>
        <span>{{ currentLang === 'ja' ? '日本語' : currentLang === 'en' ? 'EN' : '中文' }}</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch } from 'vue';
import { jaFlag,enFlag,zhFlag,noticeImage } from '../assets/base64_images';

const props = defineProps({
  slogan: { type: String, default: '开启您的未来之旅' },
  showLangs: { type: Boolean, default: false },
});

const showLangOptions = ref(false);
const currentLang = ref('zh');

// Base64 encoded flag images from the original JS
function toggleLangOptions() {
  showLangOptions.value = !showLangOptions.value;
}

function setLang(lang) {
  currentLang.value = lang;
  showLangOptions.value = false;
}

// Watch for changes in props.showLangs to update internal state
watch(
  () => props.showLangs,
  (newVal) => {
    showLangOptions.value = newVal;
  }
);
</script>

<style scoped>
.right-bar {
    position: fixed;
    top: 0;
    right: 0;
    width: 1.45rem;
    height: 100%;
    border-left: 2px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 12;
}
.notice {
  height: 1.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divider {
  width: 100%;
  height: 0;
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

.langs {
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
  bottom: 0.3rem;
  display: grid;
  gap: 0.1rem;
}
.lang {
  display: flex;
  padding-left: 0.33rem;
  align-items: center;
  gap: 0.06rem;
  font-size: 0.19rem;
  cursor: pointer;
}
.dot {
  width: 0.26rem;
  display: inline-block;
}

@font-face {
  font-family: "Gen-Jyuu-Gothic-P-Bold-2";
  src: url(../../assets/Gen-Jyuu-Gothic-P-Bold-2.9c3d5b1f.woff) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
</style>