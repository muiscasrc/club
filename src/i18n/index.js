import Vue from 'vue'
import VueI18n from 'vue-i18n'

const locales = {
  es: require('@/i18n/es.json'),
  en: require('@/i18n/en.json')
}

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: locales
})

if (module.hot) {
  module.hot.accept(['@/i18n/en.json', '@/i18n/es.json'], () => {
    i18n.setLocaleMessage('en', require('@/i18n/en.json'))
    i18n.setLocaleMessage('es', require('@/i18n/es.json'))
  })
}

export default i18n
