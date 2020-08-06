<template>
  <div class="page__home">
    <div class="page__home_title">
      <div class="page__home_title--principal">
        Muiscas<br />Rugby Club
      </div>
      <div class="page__home_title--secondary">
        {{ $t('pages.home.slogan') }}
      </div>
    </div>
    <div class="page__home_background">
      <ImageMuiscaFace colorFill="#000" class="page__home_background--image" />
    </div>
    <form action="" class="page__home_suscribe">
      <div class="page__home_suscribe--input">
        <input type="text" :placeholder="$t('pages.home.suscribe.title')" v-model="mail" tabindex="0">
      </div>
      <button @click="goSuscribe" class="page__home_suscribe--button" tabindex="1">{{$t('pages.home.suscribe.button')}}</button>
    </form>
    <div class="page__home_network">
      <PluginNetwork title="" newPage
      :sizeIcon="parseInt('36')"
      email="muiscasrc@gmail.com" :emailPosition="2"
      :facebook="profile" :facebookPosition="3"
      :instagram="profile" :instagramPosition="4"
      :twitter="profile" :twitterPosition="5"
      :youtube="profile" :youtubePosition="6" />
    </div>
  </div>
</template>
<script>
export default {

  name: 'WebHome',

  data () {
    return {
      mail: undefined,
      profile: 'muiscasrc'
    }
  },
  methods: {
    goSuscribe () {
      this.$router.push({ name: 'suscribe', params: { email: this.email } })
    }
  }
}

</script>
