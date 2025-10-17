<template>
  <div class="language-switcher">
    <div class="selected-language" @click="toggleDropdown">
      {{ $i18n.t(currentLanguageDisplay) }}
    </div>
    <div class="language-dropdown" v-if="isOpen">
      <div 
        v-for="(name, code) in availableLanguages" 
        :key="code" 
        class="language-option"
        :class="{ active: currentLanguage === code }"
        @click="selectLanguage(code)"
      >
        {{ $i18n.t(name) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import i18n from '../i18n';

const isOpen = ref(false);
const currentLanguage = computed(() => i18n.currentLanguage.value);
const availableLanguages = i18n.availableLanguages;

const currentLanguageDisplay = computed(() => {
  return availableLanguages[currentLanguage.value];
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (lang) => {
  i18n.setLanguage(lang);
  isOpen.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.language-switcher')) {
    isOpen.value = false;
  }
};

// Add event listener when component is mounted
window.addEventListener('click', handleClickOutside);
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  margin-left: 1rem;
}

.selected-language {
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 0.8rem;
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: #1a1a1a;
  border-radius: 4px;
  overflow: hidden;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.language-option {
  padding: 0.5rem 1rem;
  white-space: nowrap;
  transition: background 0.2s;
  color: #fff;
  font-size: 0.8rem;
}

.language-option:hover {
  background: rgba(255, 255, 255, 0.1);
}

.language-option.active {
  background: rgba(255, 255, 255, 0.2);
}
</style>