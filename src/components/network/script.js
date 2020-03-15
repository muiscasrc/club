import './style.scss'

export default {
  name: 'network',
  props: {
    title: {
      type: String,
      default: 'Our Social Network'
    },
    links: {
      type: Array
    },
    newPage: {
      type: Boolean
    }
  }
}
