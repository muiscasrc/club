<template>
  <header class="header">
    <!-- <div class="header__img"> -->
      <!-- <MuiscasLogo label :letters="colorScheme.uiscas" :letter="colorScheme.m" :corn="colorScheme.corn" /> -->
    <!-- </div> -->
  </header>
</template>
<script>
export default {

  name: 'HeaderPartial',

  data () {
    return {
      colorScheme: {
        corn: '#e6e6e6',
        m: '#1a1a1a',
        uiscas: '#e6e6e6'
      }
    }
  }
}

</script>
