import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global.css'; // Import global CSS
import i18n from './i18n';

// Responsive font size logic from original index.e7397e71.js
(function () {
  function setFontSize() {
    var e = document.documentElement,
      t = 100 * ((e.clientWidth || window.innerWidth) / 1920);
    (t < 50 && (t = 50), t > 150 && (t = 150), (e.style.fontSize = t + "px"));
  }
  (setFontSize(),
    window.addEventListener("resize", setFontSize),
    window.addEventListener("orientationchange", setFontSize));
})();

const app = createApp(App);
app.use(router);

// Make i18n available globally
app.config.globalProperties.$i18n = i18n;
app.provide('i18n', i18n);

app.mount('#app');
