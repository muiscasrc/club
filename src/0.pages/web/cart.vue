<template>
  <div class="page__cart">
    <div class="page__cart_invoice">
      <div class="page__cart_invoice--header" @input="updateInvoiceData">
        <div class="page__cart_invoice--header-input">
          <input type="text" name="fitsr" v-model="invoice.data.name.first" />
          <label for="fitsr">{{$t('pages.cart.name.first')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="text" name="last" v-model="invoice.data.name.last" />
          <label for="last">{{$t('pages.cart.name.last')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="number" name="document" v-model="invoice.data.document" />
          <label for="document">{{$t('pages.cart.document')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="tel" name="phone" v-model="invoice.data.phone" />
          <label for="phone">{{$t('pages.cart.phone')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="email" name="email" v-model="invoice.data.email" />
          <label for="email">{{$t('pages.cart.email')}}</label>
        </div>
        <div class="page__cart_invoice--header-input">
          <input type="text" name="address" v-model="invoice.data.address" />
          <label for="address">{{$t('pages.cart.address')}}</label>
        </div>
        <div class="page__cart_invoice--header-input observations">
          <textarea type="text" name="observations" v-model="invoice.data.observations" />
          <label for="observations">{{$t('pages.cart.observations')}}</label>
        </div>
      </div>
      <div class="page__cart_invoice--products">
        <div
          class="product"
          v-for="(product, value, index, key) in invoice.products"
          :key="key"
        >
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
        <router-link class="actions__action" to="/shop">{{$t('navigate.return')}}</router-link>
        <div class="actions__action" :title="$t('general.print')" @click="printInvoice">
          <Icons icon="Print" :title="$t('general.print')" class="icon" />
        </div>
        <div class="actions__action" :title="$t('general.request')" @click="requestProducts">
          <Icons icon="Email" :title="$t('general.request')" class="icon" />
        </div>
        <!-- <div class="actions__action" :title="$t('pages.shop.request')">
          <Icons icon="Cash" :title="$t('pages.shop.request')" class="icon" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LStorage from '@/0.assets/scripts/Storage'

import Email from '@/0.assets/scripts/smtp.js'
const lstorage = new LStorage()

export default {
  name: 'Cart',
  data () {
    return {
      invoice: {},
      products: [],
      total: 0
    }
  },
  async created () {
    if (
      lstorage.read('invoice') === undefined ||
      lstorage.read('invoice') === null
    ) {
      this.$router.push('/shop')
    }
  },
  async mounted () {
    await this.getProducts()
    this.invoice = lstorage.read('invoice')
    this.parseProducts()
    this.getMinimalProducts()
  },
  methods: {
    async getProducts () {
      await axios
        .get(process.env.VUE_APP_CDN_SHOP)
        .then((data) => (this.products = data.data))
    },
    parseProducts () {
      this.invoice.products = this.invoice.products.map((product) => {
        this.products.filter(productFiltered => {
          if (productFiltered.id === product.id) {
            product.image = productFiltered.image || require('@/0.assets/images/general/icon.png')
            product.promo = productFiltered.promo || 0
          }
        })
        return {
          ...product
        }
      })
    },
    getMinimalProducts () {
      var productsMinimal = this.invoice.products.filter(
        (product, index, array) =>
          array.findIndex((t) => t.id === product.id) === index
      )
      productsMinimal.forEach((el, index) => {
        el.cant = this.invoice.products
          .filter((product) => {
            return el.id === product.id
          })
          .reduce((collect, curent) => {
            return collect + curent.cant
          }, 0)
      })
      this.invoice.products = productsMinimal
      lstorage.save('invoice', this.invoice)
    },
    updateInvoiceData () {
      if (this.invoice.data !== lstorage.readContext('invoice', 'data')) {
        lstorage.save('invoice', this.invoice)
      }
    },
    printInvoice () {
      window.print()
    },
    requestProducts () {
      Email.send({
        SecureToken: 'cf628a96-c6fe-4072-ab28-c2e671c24192',
        To: this.invoice.data.email,
        From: 'muiscasrc@gmail.com',
        Subject: 'Mensaje de prueba',
        Body: 'Factura de compra'
      }).then(
        message => alert(message)
      )
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
