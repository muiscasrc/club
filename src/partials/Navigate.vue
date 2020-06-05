<template>
  <nav class="nav">
    <router-link class="nav__link"
      v-for="(r, ri, rk) in r"
      :to="r.path"
      :key="rk"
    >
      <component :is="r.icon" class="nav__link_icon"/>
      <span class="nav__link_label">{{r.name}}</span>
    </router-link>
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
