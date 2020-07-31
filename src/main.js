import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import store from './0.store'
import router from './0.router'
import i18n from './0.i18n'
import * as firebase from 'firebase/app'
import firebaseConfig from '@/assets/scripts/firebase.config'

import './registerServiceWorker'

// Automatic import
import './0.components/icons'
import './0.components/images'
import './0.components/partials'
import './0.components/plugins'
import './0.pages'

// Import scss styles
import './0.assets/styles/app.scss'

// Use i18n for traslations
Vue.use(VueI18n)

Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

firebase.initializeApp(firebaseConfig)
