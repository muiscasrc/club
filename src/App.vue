<template>
  <div id="app" class="app">
    <div class="app__group">
      <div class="app__group_img">
        <img class="header" :src="require('@/assets/header.png')" alt="muiscas rugby club" />
        <span class="header title">news</span>
      </div>
    </div>

    <div class="app__group" v-if="deadLine.time > new Date()">
      <countdown
        :end="deadLine.time"
        :iconLeft="'fa fa-newspaper'"
        :iconRight="'fa fa-hand-point-down'"
        :title="deadLine.title"
      />
    </div>

    <div class="app__group" v-else>
      <infotraining :info="infoTraining" :title="infoTraining.title" />
      <countdown :end="initTraining" />
    </div>
    <div class="app__group">
      <network :links="network" :title="'Mas de MuiscasRC en nuestras redes'" newPage />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      initTraining: new Date('2020/04/01 19:30:00').getTime(),
      deadLine: {
        time: new Date('2020/03/24 12:00:00').getTime(),
        title: ''
      },
      network: [
        {
          name: 'facebook',
          url: 'https://facebook.com/muiscasrc',
          icon: 'fa-facebook-square'
        },
        {
          name: 'messenger',
          url: 'https://m.me/muiscasrc',
          icon: 'fa-facebook-messenger'
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/muiscasrc',
          icon: 'fa-twitter-square'
        },
        {
          name: 'instagram',
          url: 'https://instagram.com/muiscasrc',
          icon: 'fa-instagram-square'
        }
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
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 14px;
  width: 100%;
  min-height: 100vh;
  background: #1a1a1a;
  font-family: Spartan, Helvetica, Arial, sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__group {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    &:last-child{
      margin-bottom:0;
    }
    &_img {
      display: flex;
      justify-content: center;
      img {
        height: auto;
        width: 80%;
        max-width: 30rem;
        & + .title {
          position: absolute;
          bottom: -0.5rem;
          width: calc(80% - 2rem);
          max-width: 22rem;
          margin: auto;
          text-align: right;
          font-size: 2rem;
          color: #d50000;
          font-family: Spartan;
          font-weight: 900;
        }
      }
    }
    width: 100%;
    margin-bottom: 2rem;
  }
}
</style>
