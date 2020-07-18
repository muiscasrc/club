<template>
  <div class="page__product">
    <div class="page__product_title">
      <div class="page__product_title--principal">
        <div class="page__product_title--principal-label">
          {{product.name}}
        </div>
        <div class="page__product_title--principal-price">
          <i18n-n
            :class="['price', product.promo ? 'promo' : '']"
            :value="product.price" format="currency" />
          <i18n-n
            class="price"
            v-if="product.promo"
            :value="product.price * ( 1 - (product.promo / 100))"
            format="currency" />
        </div>
      </div>
      <div class="page__product_title--secondary">
        <div class="page__product_title--secondary-image">
          <img :src="product.image" alt="">
          <div class="promo" v-if="product.promo">-{{product.promo}}<div class="percent">%</div>
          </div>
        </div>
        <ul class="page__product_title--secondary-description">
          <li class="detail" v-for="(detail, index, key) in product.details" :key="key">
            {{detail}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

// Dummy data for visualization
const dataProducts = require('@/0.assets/scripts/productsDummy.json')

export default {

  name: 'product',

  data () {
    return {
      productID: undefined,
      product: undefined
    }
  },
  created () {
    if (this.$route.params.id === undefined) {
      this.$router.push('/shop')
    } else {
      this.productID = this.$route.params.id
      var products = dataProducts.data.products

      this.product = products.filter(p => this.productID === p.id.toString())[0]
    }
  }
}
</script>
