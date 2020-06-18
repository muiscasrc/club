<template>
  <div>
    <pre>
      <code>
        {{d}}
      </code>
    </pre>
  </div>
</template>

<script>

export default {

  name: 'Blog',

  data () {
    return {
      d: undefined
    }
  },
  mounted () {
    this.d = this.$router.options
  }
}
</script>
