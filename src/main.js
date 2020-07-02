import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n'

import './registerServiceWorker'

// Automatic import components

import './components'
import './icons'

import './partials'
import './components'

import './views'

// Import scss styles
import './assets/styles/app.scss'

// Use i18n for traslations
Vue.use(VueI18n)

Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
