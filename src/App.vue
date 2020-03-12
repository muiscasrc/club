<template>
  <div id='app'>
    <img class="header" :src="require('@/assets/header.png')" alt="">
    <countdown :end="deadLine"/>
    <network :links="network" newPage/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deadLine: new Date('2020/05/01 15:00:00').getTime(),
      network: [
        { name: 'facebook', url: 'https://facebook.com/muiscasrc', icon: 'fa-facebook-square' },
        { name: 'messenger', url: 'https://m.me/muiscasrc', icon: 'fa-facebook-messenger' },
        { name: 'twitter', url: 'https://twitter.com/muiscasrc', icon: 'fa-twitter-square' },
        { name: 'instagram', url: 'https://instagram.com/muiscasrc', icon: 'fa-instagram-square' }
      ]
    }
  }
}
</script>

<style lang='scss'>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  &:after,
  &:before {
    @extend *;
  }
}
html,
body, #app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background: #1a1a1a;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  flex-direction: column;
  .header {
    height: 10rem;
  }
}
</style>
