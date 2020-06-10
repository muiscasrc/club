<template>
  <div>
    <h1 v-for="i in 100" :key="i">Blog {{i}}</h1>
  <h1 v-for="i in 100" :key="i">Blog {{i}}</h1>
  </div>
</template>

<script lang="js">
export default {

  name: 'Blog',

  data () {
    return {

    }
  }
}
</script>
