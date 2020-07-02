<template>
  <h1>profile</h1>
</template>
<script>
export default {

  name: 'Profile',

  data () {
    return {}
  },
  mounted () {
    if (!this.$store.getters.getLoginUser) {
      this.$router.push('/')
    }
  },
  methods: {}
}

</script>
