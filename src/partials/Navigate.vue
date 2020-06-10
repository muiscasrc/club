<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <nav class="nav">
    <router-link to="/" class="nav__image">
      <MuiscasLogo label :letters="colorScheme.uiscas" :letter="colorScheme.m" :corn="colorScheme.corn" class="nav__image_desktop"/>
      <MuiscasLogo :letter="colorScheme.m" :corn="colorScheme.corn" class="nav__image_mobile" />
    </router-link>
    <div class="nav__links">
      <router-link
        v-for="(r, ri, rk) in r"
        v-if="r.menu"
        :class="['nav__links_link']"
        :to="r.path"
        :key="rk"
      >
        <component :is="r.icon" class="nav__links_link--icon"/>
        <span class="nav__links_link--label">{{r.name}}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import routes from '@/router/routes.js'

export default {

  name: 'NavigatePartial',

  data () {
    return {
      r: routes,
      colorScheme: {
        corn: '#e6e6e6',
        m: '#d50000',
        uiscas: '#e6e6e6'
      }
    }
  },
  filters: {
    getItemsMenu (array) {
      if (array.menu) return array
    }
  }
}
</script>
