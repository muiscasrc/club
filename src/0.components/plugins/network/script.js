export default {
  name: 'PluginNetwork',
  props: {
    title: {
      type: String,
      default: 'Our Social Network'
    },
    newPage: Boolean,
    size: {
      type: Number,
      default: 32
    },
    email: {
      type: String,
      default: ''
    },
    emailPosition: {
      type: Number,
      default: 10
    },
    facebook: {
      type: String,
      default: ''
    },
    facebookPosition: {
      type: Number,
      default: 10
    },
    twitter: {
      type: String,
      default: ''
    },
    twitterPosition: {
      type: Number,
      default: 10
    },
    instagram: {
      type: String,
      default: ''
    },
    instagramPosition: {
      type: Number,
      default: 10
    },
    youtube: {
      type: String,
      default: ''
    },
    youtubePosition: {
      type: Number,
      default: 10
    },
    linkedin: {
      type: String,
      default: ''
    },
    linkendinPosition: {
      type: Number,
      default: 10
    }
  }
}
