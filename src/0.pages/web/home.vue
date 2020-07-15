<template>
  <div class="page__home">
    <div class="page__home_title">
      <div class="page__home_title--principal">
        Muiscas<br/>Rugby Club
      </div>
      <div class="page__home_title--secondary">
        {{ $t('pages.home.slogan') }}
      </div>
    </div>
    <div class="page__home_background">
      <ImageMuiscaFace colorFill="#000" class="page__home_background--image"/>
    </div>
    <div class="page__home_suscribe">
      <div class="page__home_suscribe--input">
        <input type="text" :placeholder="$t('pages.home.suscribe.title')">
      </div>
      <div class="page__home_suscribe--button">{{$t('pages.home.suscribe.button')}}</div>
    </div>
    <div class="page__home_network">
      <PluginNetwork
        title="" newPage
        sizeIcon=36
        email="muiscasrc@gmail.com" emailPosition=1
        facebook="muiscasrc" facebookPosition=5
        instagram="muiscasrc" instagramPosition=2
        twitter="muiscasrc" twitterPosition=4
        youtube="muiscasrc" youtubePosition=3
      />
    </div>
  </div>
</template>

<script>
export default {

  name: 'WebHome',

  data () {
    return {

    }
  }
}
</script>

<style>
  .page__home {
    /* background: url("D:/pc junio 23 2020/escritorio/webmuisca/inicio.png"); */
    background-size: 100vw 100vh;
  }
</style>
