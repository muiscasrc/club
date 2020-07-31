import Vue from 'vue'

const requirePage = require.context('./', true, /\w+\.vue$/)

requirePage.keys().forEach(file => {
  const pageConfig = requirePage(file)
  const pageName = pageConfig.default.name

  Vue.component(pageName, pageConfig.default || pageConfig)
})
