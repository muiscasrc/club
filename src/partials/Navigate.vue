<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <nav class="nav">
    <router-link to="/" class="nav__image" title="Muiscas Rugby Club">
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
        :title="r.name"
      >
        <component :is="r.icon" :title="r.name" class="nav__links_link--icon"/>
        <span class="nav__links_link--label">{{r.name}}</span>
      </router-link>
      <div class="nav__links_link nav__info">
        <a v-for="(n, ni, nk) in network" :key="nk" :href="n.url">
          <component :is="n.label" :title="n.url" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
/* eslint-disable no-unused-vars */
import facebook from 'vue-material-design-icons/Facebook.vue'
import twitter from 'vue-material-design-icons/Twitter.vue'
import instagram from 'vue-material-design-icons/Instagram.vue'
import routes from '@/router/routes.js'

export default {

  name: 'NavigatePartial',

  components: {
    facebook,
    twitter,
    instagram
  },
  data () {
    return {
      r: routes,
      colorScheme: {
        corn: '#e6e6e6',
        m: '#d50000',
        uiscas: '#e6e6e6'
      },
      network: [
        {
          url: 'https://facebook.com/muiscasrc',
          label: 'facebook'
        }, {
          url: 'https://twitter.com/muiscasrc',
          label: 'twitter'
        }, {
          url: 'https://instagram.com/muiscasrc',
          label: 'instagram'
        }
      ]
    }
  }
}
</script>
