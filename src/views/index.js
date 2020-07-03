import Vue from 'vue'

const requireComponent = require.context('./', false, /\w+\.vue$/)

requireComponent.keys().forEach(file => {
  const componentConfig = requireComponent(file)
  const componentName = componentConfig.default.name

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
