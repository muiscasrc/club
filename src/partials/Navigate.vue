<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <nav class="nav">
    <router-link to="/" class="nav__image" title="Muiscas Rugby Club">
      <MuiscasLogo label :letters="colorScheme.uiscas" :letter="colorScheme.m" :corn="colorScheme.corn" class="nav__image_desktop" />
      <MuiscasLogo :letter="colorScheme.m" :corn="colorScheme.corn" class="nav__image_mobile" />
    </router-link>
    <div class="nav__links">
      <router-link v-for="(r, ri, rk) in r" v-if="r.menu" :class="['nav__links_link']" :to="r.path" :key="rk" :title="r.name">
        <component :is="r.icon" :title="r.name" class="nav__links_link--icon" />
        <span class="nav__links_link--label">{{r.name}}</span>
      </router-link>
    </div>
    <div class="nav__login" v-if="viewMenuLogin">
      <div class="nav__login_link">
        <profile class="nav__login_link--icon" />
        <div class="nav__login_link--label">Profile</div>
      </div>
      <div class="nav__login_link">
        <notices class="nav__login_link--icon" />
        <div class="nav__login_link--label">Profile</div>
      </div>
    </div>
    <div class="nav__info">
      <a v-for="(n, ni, nk) in network" class="nav__info_link" :key="nk" :href="n.url" target="_blank">
        <component :is="n.label" :title="n.url" class="nav__info_link--icon" />
      </a>
    </div>
  </nav>
</template>
<script>
/* eslint-disable no-unused-vars */

import routes from '@/router/routes.js'

export default {

  name: 'NavigatePartial',

  components: {
    facebook: () => import(/* webpackChunkName: "icons" */ 'vue-material-design-icons/Facebook.vue'),
    twitter: () => import(/* webpackChunkName: "icons" */ 'vue-material-design-icons/Twitter.vue'),
    instagram: () => import(/* webpackChunkName: "icons" */ 'vue-material-design-icons/Instagram.vue'),
    profile: () => import(/* webpackChunkName: "icons" */ 'vue-material-design-icons/Account.vue'),
    notices: () => import(/* webpackChunkName: "icons" */ 'vue-material-design-icons/NewspaperVariant.vue')
  },
  data () {
    return {
      r: routes,
      colorScheme: {
        corn: '#e6e6e6',
        m: '#d50000',
        uiscas: '#e6e6e6'
      },
      network: [{
        url: 'https://facebook.com/muiscasrc',
        label: 'facebook'
      }, {
        url: 'https://twitter.com/muiscasrc',
        label: 'twitter'
      }, {
        url: 'https://instagram.com/muiscasrc',
        label: 'instagram'
      }]
    }
  },
  computed: {
    viewMenuLogin () {
      return this.$store.getters.getLoginUser
    }
  }
}

</script>
