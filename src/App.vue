<template>
  <div id='app' class="app">

    <div class="app__group">
      <img
        class="header"
        :src="require('@/assets/header.png')"
        alt="muiscas rugby club" />
    </div>

    <div
      class="app__group"
      v-if="deadLine.time > new Date()">
      <countdown
        :end="deadLine.time"
        :title="deadLine.title"/>
    </div>

    <div class="app__group" v-else>
      <infotraining
        :info="infoTraining"
        :title="infoTraining.title"/>
      <countdown :end="initTraining"/>
    </div>
    <div class="app__group">
      <network
        :links="network"
        newPage/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      initTraining: new Date('2020/04/13 19:30:00').getTime(),
      deadLine: {
        time: new Date('2020/04/09 12:00:00').getTime(),
        title: 'Pronto...'
      },
      network: [
        { name: 'facebook', url: 'https://facebook.com/muiscasrc', icon: 'fa-facebook-square' },
        { name: 'messenger', url: 'https://m.me/muiscasrc', icon: 'fa-facebook-messenger' },
        { name: 'twitter', url: 'https://twitter.com/muiscasrc', icon: 'fa-twitter-square' },
        { name: 'instagram', url: 'https://instagram.com/muiscasrc', icon: 'fa-instagram-square' }
      ],
      infoTraining: {
        title: 'Proximo Evento',
        days: [1, 3, 5],
        localization: 'Parque el ensueño',
        time: new Date('17:00:00')
      }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  background: #e6e6e6;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.app {
  display:flex;
  flex-direction: column;
  &__group {
    display:flex;
    flex-direction: column;
    width:100%;
    justify-content: center;
    align-items:center;
    img {
      height: 10rem;
      width: auto;
    }
    width: 100%;
    margin-bottom: 2rem;
  }
}
</style>
