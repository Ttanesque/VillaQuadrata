import { createApp } from 'vue';
import { loadLocaleMessages, setI18nLanguage, setupI18n } from './i18n';
import App from './App.vue';
import router from './router';

import './style.css';

export const i18n = setupI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en'
});

// load fallback language
await loadLocaleMessages(i18n.global, "en");

// navigation guards
router.beforeEach(async (to, from, next) => {
  const paramsLocale = navigator.language

  // load locale messages
  if (!i18n.global.availableLocales.includes(paramsLocale)) {
    await loadLocaleMessages(i18n.global, paramsLocale)
  }

  // set i18n language
  setI18nLanguage(i18n.global, paramsLocale)

  return next()
})

createApp(App).use(i18n).use(router).mount('#app')
