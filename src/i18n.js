import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'

export const SUPPORT_LOCALES = ['en', 'fr']

export function setupI18n(options = { locale: 'en' }) {
  const i18n = createI18n(options);
  loadLocaleMessages(i18n.global, options.locale);
  setI18nLanguage(i18n.global, options.locale);
  return i18n;
}

export function setI18nLanguage(i18n, locale) {
  i18n.locale.value = locale
  document.querySelector('html').setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
  )

  // set locale and locale message
  i18n.setLocaleMessage(locale, messages.default)

  return nextTick()
}