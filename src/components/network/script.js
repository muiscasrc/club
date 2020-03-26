import './style.scss'
import iconFacebook from 'vue-material-design-icons/FacebookBox'
import iconTwitter from 'vue-material-design-icons/TwitterBox'
import iconInstagram from 'vue-material-design-icons/Instagram'
import iconYoutube from 'vue-material-design-icons/Youtube'
import iconLinkedin from 'vue-material-design-icons/Linkedin'

export default {
  name: 'network',
  components: {
    iconFacebook,
    iconTwitter,
    iconInstagram,
    iconYoutube,
    iconLinkedin
  },
  props: {
    title: {
      type: String,
      default: 'Our Social Network'
    },
    newPage: Boolean,
    sizeIcon: {
      type: Number,
      default: 32
    },
    facebook: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    },
    instagram: {
      type: String,
      default: ''
    },
    youtube: {
      type: String,
      default: ''
    },
    linkedin: {
      type: String,
      default: ''
    }
  }
}
