<template>
  <div class="page__cart">
    <div class="page__cart_invoice">
      <div class="page__cart_invoice--header">
        <div class="page__cart_invoice--header-input">
          <input type="text" name="name" v-model="invoice.data.name.first" />
          <label for="name">{{$t('pages.cart.name.first')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="text" name="name" v-model="invoice.data.name.last" />
          <label for="name">{{$t('pages.cart.name.last')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="text" name="document" v-model="invoice.data.document" />
          <label for="document">{{$t('pages.cart.document')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="text" name="phone" v-model="invoice.data.phone" />
          <label for="phone">{{$t('pages.cart.phone')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="text" name="phone" v-model="invoice.data.email" />
          <label for="phone">{{$t('pages.cart.email')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="text" name="phone" v-model="invoice.data.address" />
          <label for="phone">{{$t('pages.cart.address')}}</label>
        </div>
      </div>
      <div class="page__cart_invoice--products">
        <div class="product" v-for="(product, value, index, key) in invoice.products" :key="key">
          <div class="product__info">
            <img class="product__info_image" :src="product.image" />
            <div class="product__info_name">{{product.name}}</div>
          </div>
          <div class="product__value">
            <div class="product__value_price">{{$n(product.price, 'currency')}}</div>
            <div
              class="product__value_promo"
              v-show="product.promo"
            >{{$n(product.promo, 'percent')}}</div>
            <div
              class="product__value_price promo"
              v-show="product.promo"
            >{{$n(product.price * (1 - product.promo), 'currency')}}</div>
            <div class="product__value_quantity">{{$n(product.cant)}}</div>
            <div class="product__value_subtotal">
              {{ $n( product.cant * (1 - product.promo) * product.price , 'currency'
              ) }}
            </div>
          </div>
        </div>
      </div>
      <div class="page__cart_invoice--footer">
        <div class="invoice__total">
          <div class="invoice__total_label">{{$t('pages.cart.total')}}</div>
          <div class="invoice__total_price">{{$n(getTotal, 'currency')}}</div>
        </div>
      </div>
      <div class="page__cart_invoice--actions">
        <router-link class="actions__action" to="/shop">
          {{$t('navigate.return')}}
        </router-link>
        <div class="actions__action" :title="$t('general.print')">
          <Icons icon="Print" :title="$t('general.print')" class="icon"/>
        </div>
        <div class="actions__action" :title="$t('pages.shop.request')">
          <Icons icon="Cash" :title="$t('pages.shop.request')" class="icon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LStorage from '@/0.assets/scripts/Storage'
const lstorage = new LStorage()

// Dummy data for visualization
const dataProducts = require('@/0.assets/scripts/productsDummy.json').data
  .products

export default {
  name: 'Cart',
  data () {
    return {
      invoice: {},
      total: 0
    }
  },
  created () {
    if (lstorage.read('invoice') === undefined || lstorage.read('invoice') === null) {
      this.$router.push('/shop')
    }
  },
  mounted () {
    this.invoice = lstorage.read('invoice')
    this.parseProducts()
  },
  methods: {
    parseProducts () {
      this.invoice.products = this.invoice.products.map((product) => {
        product.image =
          dataProducts.filter((p) => (p.id === product.id ? p : ''))[0].image ||
          require('@/0.assets/images/general/icon.png')
        product.promo =
          dataProducts.filter((p) => (p.id === product.id ? p : ''))[0].promo ||
          0
        return {
          ...product
        }
      })
    }
  },
  computed: {
    getTotal () {
      return this.invoice.products.reduce((a, b) => {
        return a + b.price * (1 - b.promo) * b.cant
      }, 0)
    }
  }
}
</script>
