import Vue from 'vue'

const requireComponent = require.context('/', true, /\w+\.vue$/)

requireComponent.keys().forEach(file => {
  const configComponent = requireComponent(file)
  const nameComponent = configComponent.default.name

  Vue.component(
    nameComponent,
    configComponent.default || configComponent
  )
})
