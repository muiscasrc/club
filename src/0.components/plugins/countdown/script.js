export default {
  name: 'PluginCountDown',
  props: {
    end: {
      type: Number
    },
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
      last: undefined
    }
  },
  mounted () {
    setInterval(() => {
      this.setTime()
    }, 1000)
  },
  methods: {
    setTime () {
      var enjoy = this.end - new Date().getTime()
      var end = new Date(enjoy)
      this.days = Math.floor(enjoy / (1000 * 60 * 60 * 24))
      this.hours = end.getHours() < 10 ? `0${end.getHours()}` : end.getHours()
      this.minutes =
        end.getMinutes() < 10 ? `0${end.getMinutes()}` : end.getMinutes()
      this.seconds =
        end.getSeconds() < 10 ? `0${end.getSeconds()}` : end.getSeconds()
    }
  }
}
