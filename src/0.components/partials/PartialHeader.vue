<template>
  <header class="partial__header">
    <router-link to ="/" class="partial__header_logo" @click.native="hideMenu">
      <IconMuiscas label
        logoFlower="#d50000"
        logoLetter="#e6e6e6"
        logoLetters="#e6e6e6"/>
    </router-link>
    <partial-navigate class="partial__header__navigate">
    </partial-navigate>
  </header>
</template>

<script>

export default {
  name: 'PartialHeader',
  data () {
    return {
    }
  },
  methods: {
    hideMenu () {
      this.$store.commit('setViewMenu', false)
    }
  }
}
</script>
