import Vue from 'vue'

const requireComponent = require.context('./', false, /\w+\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = componentConfig.default.name

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
