import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';

const messages = {
  en,
  zh,
  ja
};

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: localStorage.getItem('language') || 'ja',
  fallbackLocale: 'ja',
  messages
});

export default i18n;