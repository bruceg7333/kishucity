import { ref, computed } from 'vue';
import en from './locales/en.js';
import ja from './locales/ja.js';
import zh from './locales/zh.js';

// Create a reactive reference to store the current language
const currentLanguage = ref(localStorage.getItem('language') || 'zh');

// Available languages
const availableLanguages = {
  en: 'English',
  ja: '日本語',
  zh: '中文'
};

// Translation messages
const messages = {
  en,
  ja,
  zh
};

// Function to change language
const setLanguage = (lang) => {
  if (Object.keys(messages).includes(lang)) {
    currentLanguage.value = lang;
    localStorage.setItem('language', lang);
    document.querySelector('html').setAttribute('lang', lang);
  }
};

// Translation function
const t = (key) => {
  const keys = key.split('.');
  let result = messages[currentLanguage.value];
  
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      // Fallback to Chinese if translation is missing in the current language
      const chineseTranslation = getNestedValue(messages.zh, keys);
      return chineseTranslation !== undefined ? chineseTranslation : key;
    }
  }
  
  return result !== undefined ? result : key;
};

// Helper function to get nested value
const getNestedValue = (obj, keys) => {
  return keys.reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
};

// Export the i18n functionality
export default {
  currentLanguage: computed(() => currentLanguage.value),
  availableLanguages,
  setLanguage,
  t
};