import Vue from 'vue'

const requirePlugin = require.context('/', true, /\w+\.vue$/)

requirePlugin.keys().forEach(file => {
  const configPlugin = requirePlugin(file)
  const namePlugin = configPlugin.default.name

  Vue.component(
    namePlugin,
    configPlugin.default || configPlugin
  )
})
