<template>
  <div class="page__shop">
    <div class="page__shop_title">
      <div class="page__shop_title--principal">
        {{$t('pages.shop.title')}}
      </div>
      <div class="page__shop_title--secondary shop__list">
        <div class="shop__list_item" v-for="(p, pi, pk) in products" :key="pk">
          <i18n-n v-if="p.promo" class="shop__list_item--promo" :value="parseFloat(p.promo)" format="percent" />
          <div class="shop__list_item--top">
            <div class="shop__list_item--top-title">
              {{p.name}}
            </div>
            <i18n-n class="shop__list_item--top-price" :value="parseFloat(p.price)" format="currency" tag="label">
            </i18n-n>
          </div>
          <div class="shop__list_item--bottom">
            <div class="shop__list_item--bottom-img">
              <img :src="p.image" alt="">
            </div>
            <div class="shop__list_item--bottom-description">
              {{p.description}}
            </div>
            <div class="shop__list_item--bottom-buy">
              <Icons icon="CartAdd" class="icon" />
              <router-link :to="`/product/${p.id}`" class="icon">
                <Icons icon="Eye" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Dummy data for visualization
const dataProducts = require('@/0.assets/scripts/productsDummy.json')
export default {

  name: 'WebShop',

  data () {
    return {
      products: dataProducts.data.products
    }
  }
}

</script>
