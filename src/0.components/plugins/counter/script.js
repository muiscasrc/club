export default {
  name: 'PluginCounter',
  props: {
    counter: {
      type: Number,
      default: 0
    }
  },
  methods: {
    incr () {
      this.counter++
    },
    decr () {
      if (this.counter <= 0) {
        this.counter = 0
      } else {
        this.counter--
      }
    }
  },
  watch: {
    counter () {
      this.$emit('getValue', this.counter)
    }
  }
}
