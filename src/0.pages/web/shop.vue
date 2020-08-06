<template>
  <div class="page__shop">
    <!-- View cart -->
    <div
      v-show="counterProducts > 0"
      :class="['page__shop_cart']"
      :title="$t('pages.shop.choose')"
      @click="goToPurchase"
    >
      <Icons :icon="counterProducts > 0 ? 'CartFull' : 'CartVoid'" :title="$t('pages.shop.choose')" class="page__shop_cart--icon"/>
      <div v-if="counterProducts > 0" class="page__shop_cart--badge">{{counterProducts}}</div>
    </div>
    <!-- End view cart -->
    <div class="page__shop_title">
      <div class="page__shop_title--principal">
        {{$t('pages.shop.title')}}
      </div>
      <div class="page__shop_title--secondary shop__list">
        <router-link class="shop__list_item" v-for="(p, pi, pk) in products" :key="pk" :to="`/product/${p.id}`" :data-view="$t('pages.shop.view')">
          <i18n-n v-if="p.promo" class="shop__list_item--promo" :value="parseFloat(p.promo)" format="percent" />
          <div class="shop__list_item--top">
            <div class="shop__list_item--top-title" v-html="p.name"></div>
            <i18n-n class="shop__list_item--top-price" :value="parseFloat(p.price)" format="currency" tag="label">
            </i18n-n>
          </div>
          <div class="shop__list_item--bottom">
            <div class="shop__list_item--bottom-img">
              <img :src="p.image" alt="">
            </div>
            <div class="shop__list_item--bottom-description" v-html="p.description"></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import LStorage from '@/0.assets/scripts/Storage'

const lstorage = new LStorage()

export default {

  name: 'WebShop',

  data () {
    return {
      products: [],
      counterProducts: 0
    }
  },
  mounted () {
    if (lstorage.read('invoice') !== null) {
      this.counterProducts = lstorage.read('invoice').products.reduce((acc, product) => acc + product.cant, 0)
    }
    axios.get(process.env.VUE_APP_CDN_SHOP)
      .then(data => (this.products = data.data))
  },
  methods: {
    goToPurchase () {
      if (this.counter !== 0) {
        this.$router.push('/cart')
      }
    }
  }
}

</script>
