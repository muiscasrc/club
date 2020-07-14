import Vue from 'vue'

const requireIcon = require.context(
  '/', true, /\w+\.vue$/
)

requireIcon.keys().forEach(file => {
  const configIcon = requireIcon(file)
  const nameIcon = configIcon.default.name

  Vue.component(
    nameIcon,
    configIcon.default || configIcon
  )
})
