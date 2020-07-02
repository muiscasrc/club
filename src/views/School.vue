<template>
  <div class="school__view">
    <router-link v-for="(c, ci, ck) in masterClass" :key="ck" class="card" :to="`learn/${c.id}`" :style="getBackground(c.id)" :title="c.title">
      <h2 class="card__title">{{c.title}}</h2>
    </router-link>
  </div>
</template>
<script>
export default {

  name: 'School',

  data () {
    return {
      user: undefined,
      masterClass: [{
        title: 'Rugby XV',
        id: 'rugby_xv'
      },
      {
        title: 'Rugby 7\'s',
        id: 'rugby_7'
      },
      {
        title: 'Rugby League',
        id: 'rugby_league'
      }
      ]
    }
  },
  mounted () {
    if (!this.$store.getters.getLoginUser) {
      // this .$router.push('/')
    }
  },
  methods: {
    getBackground (img) {
      return `background: url(${require('@/assets/images/school' + img.replace('_', '') + '.jpg')})`
    }
  }
}

</script>
