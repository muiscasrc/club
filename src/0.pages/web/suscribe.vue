<template>
  <div class="page__suscribe">
    <div class="page__suscribe_title">
      <div class="page__suscribe_title--primary">
        {{$t('pages.suscribe.title')}}
      </div>
      <div class="page__suscribe_title--secondary">
        <div v-for="(o, oi, ok) in options" :key="ok">
          <label for="options">{{o.label}}</label>
          <input type="checkbox" name="options" :value="o.value" v-model="selected">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  name: 'suscribe',
  data () {
    return {
      options: undefined,
      selected: []
    }
  },
  mounted () {
    this.options = this.$t('pages.suscribe.options')
  }
}

</script>
<style lang="css" scoped>
</style>
