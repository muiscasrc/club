<template>
  <div class="blog__view">
    <code>
      <pre>
        {{d}}
      </pre>
    </code>
    {{p}}
  </div>
</template>

<script>

export default {

  name: 'Blog',

  data () {
    return {
      d: undefined,
      p: undefined
    }
  },
  mounted () {
    this.d = this.$router.options
    this.p = process.env
  }
}
</script>
