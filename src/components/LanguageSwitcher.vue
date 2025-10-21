<template>
  <div class="language-switcher">
       <template v-if="showLangOptions">
        <div class="lang"  @click="setLang('ja')">
          <span class="dot ja" v-if="currentLang === 'ja'">
            <img :src="jaFlag" alt="" draggable="false" />
          </span>
          <span style="font-size: 0.21rem;">ja</span>
        </div>
        <div class="lang"  @click="setLang('en')">
          <span class="dot en" v-if="currentLang === 'en'">
            <img :src="enFlag" alt="" draggable="false" />
          </span>
          <span>en</span>
        </div>
        <div class="lang" @click="setLang('zh')">
          <span class="dot zh"  v-if="currentLang === 'zh'">
            <img :src="zhFlag" alt="" draggable="false" />
          </span>
          <span>cn</span>
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
        <span>{{ currentLang === 'ja' ? 'ja' : currentLang === 'en' ? 'en' : 'cn' }}</span>
      </div>
   </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { jaFlag, enFlag, zhFlag } from '../assets/base64_images';

const { locale, t } = useI18n();

const props = defineProps({
  showLangs: { type: Boolean, default: false },
});

const showLangOptions = ref(false);
const currentLang = ref(locale.value);

function toggleLangOptions() {
  showLangOptions.value = !showLangOptions.value;
}

function setLang(lang) {
  locale.value = lang;
  currentLang.value = lang;
  localStorage.setItem('lang', lang);
  showLangOptions.value = false;
}

// Watch for changes in props.showLangs to update internal state
watch(
  () => props.showLangs,
  (newVal) => {
    showLangOptions.value = newVal;
  }
);

watch(locale, (newLocale) => {
  currentLang.value = newLocale;
});
</script>

<style scoped>
.language-switcher {
  position: relative;
}

@media (max-width: 768px) {
  .lang {
    color: white !important;
  }
}

.lang {
  display: flex;
  padding-left: 0.13rem;
  align-items: center;
  justify-content: flex-end;
  gap: 0.06rem;
  font-size: 0.20rem;
  cursor: pointer;
  img {
    width: 0.26rem;
  }
}

.dot {
  /* width: 0.26rem; */
  display: inline-block;
  margin-right: 0.01rem;
}
</style>