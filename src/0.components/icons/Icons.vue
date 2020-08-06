<template>
  <keep-alive>
    <component
      :is="icon"
      :title="title"
      :decorative="decorative"
      :fillColor="fillColor"
      :size="size"
    />
  </keep-alive>
</template>

<script>

const IconsComponents = {
  // Navigate
  Menu: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Menu'),
  Close: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Close'),
  // Arrows
  Plus: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Plus'),
  Minus: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Minus'),
  ArrowLeft: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/ArrowLeft'),
  ArrowRight: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/ArrowRight'),
  // Shop
  Print: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Printer'),
  Cash: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Cash'),
  CartAdd: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/CartArrowDown'),
  CartVoid: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/CartOutline'),
  CartFull: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Cart'),
  Eye: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Eye'),
  Star: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Star'),
  HappyHour: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/TagFaces'),
  // Icons Network
  Locale: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/MapMarker'),
  Globe: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Web'),
  Email: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Email'),
  Facebook: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Facebook'),
  Twitter: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Twitter'),
  Instagram: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Instagram'),
  Youtube: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Youtube'),
  Linkedin: () => import(/* webpackChunkName: "Icons" */ 'vue-material-design-icons/Linkedin')
}

export default {

  name: 'Icons',
  components: IconsComponents,
  props: {
    icon: {
      type: String,
      default: 'Home'
    },
    title: {
      type: String,
      default: 'Arrow Top Left Bold Outline icon'
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: 'currentColor'
    },
    size: {
      type: Number,
      default: 24
    }
  }
}
</script>
