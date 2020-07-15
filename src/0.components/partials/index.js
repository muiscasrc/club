import Vue from 'vue'

const requirePartial = require.context(
  '/', true, /\w+\.vue$/
)

requirePartial.keys().forEach(file => {
  const configPartial = requirePartial(file)
  const namePartial = configPartial.default.name

  Vue.component(
    namePartial,
    configPartial.default || configPartial
  )
})
