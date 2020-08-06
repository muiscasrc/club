<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <nav class="partial__navigate">
    <div class="partial__navigate_toggle" @click="viewMenu" >
      <Icons :icon="getIconMenu" />
    </div>
    <div :class="['partial__navigate_items', getViewMenu ? 'show' : '']">
      <router-link v-for="(r, ri, rk) in routes" v-show="r.menu !== false" :key="rk" :to="r.path" :class="['partial__navigate_items--item']" @click.native="viewMenu">
        {{ $t(`navigate.${r.name}`) }}
      </router-link>

    </div>
  </nav>
</template>
<script>
import routes from '@/0.router/routes.js'

export default {

  name: 'PartialNavigate',
  data () {
    return {
      routes: routes,
      IconMenu: 'Menu'
    }
  },
  methods: {
    viewMenu () {
      this.$store.commit('setViewMenu', !this.$store.getters.getViewMenu)
    }
  },
  computed: {
    getViewMenu () {
      return this.$store.getters.getViewMenu
    },
    getIconMenu () {
      return (this.$store.getters.getViewMenu ? 'Close' : 'Menu')
    }
  }
}

</script>
