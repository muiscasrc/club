<template>
  <div class="partial__navigate_about">
    <router-link class="partial__navigate_about--item"
      v-for="(l, li, lk) in links"
      :to="`/about/${l.route}`"
      :key="lk">
      {{ $t(`navigate.${l.label}`)}}
    </router-link>
  </div>
</template>

<script>
export default {

  name: 'PartialNavigateAbout',

  data () {
    return {
      links: [
        {
          label: 'find',
          route: 'findus'
        },
        {
          label: 'object',
          route: 'object'
        },
        {
          label: 'history',
          route: 'history'
        }
      ]
    }
  }
}
</script>
