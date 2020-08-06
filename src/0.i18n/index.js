import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { langs, locales } from './setup/locales'
import { dateTimeFormats, numberFormats } from './setup/format'

Vue.use(VueI18n)

const i18n = new VueI18n({
  silentTranslationWarn: true,
  dateTimeFormats,
  numberFormats,
  locale: 'es',
  fallbackLocale: 'en',
  messages: locales
})

if (module.hot) {
  module.hot.accept(
    langs, () => {
      i18n.setLocaleMessage('en', locales.en)
      i18n.setLocaleMessage('es', locales.es)
    })
}

export default i18n
