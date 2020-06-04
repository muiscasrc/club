<template>
  <nav class="nav">
    <router-link
      v-for="(r, ri, rk) in r"
      :to="r.path"
      :key="rk"
    > {{r.name}} </router-link>
  </nav>
</template>

<script>
import routes from '@/router/routes.js'

export default {

  name: 'NavigatePartial',

  data () {
    return {
      r: routes
    }
  }
}
</script>

<style lang="css" scoped>
</style>
