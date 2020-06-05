<template>
  <header class="header">
    <div class="header__img">
      <!-- <img :src="require('@/assets/header.png')" alt="muiscas rugby club" /> -->
      <MuiscasLogo label :letters="'#e6e6e6'" :letter="'#d50000'" :corn="'#e6e6e6'"/>
    </div>
  </header>
</template>

<script>
export default {

  name: 'HeaderPartial',

  data () {
    return {

    }
  }
}
</script>
