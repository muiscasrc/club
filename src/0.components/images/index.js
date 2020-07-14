import Vue from 'vue'

const requireImage = require.context(
  '/', true, /\w+\.vue$/
)

requireImage.keys().forEach(file => {
  const configImage = requireImage(file)
  const nameImage = configImage.default.name

  Vue.component(
    nameImage,
    configImage.default || configImage
  )
})
