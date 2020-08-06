<template>
  <div class="page__product">
    <div class="page__product_item">
      <div class="page__product_item--picture">
        <img class="page__product_item--picture-image" :src="product.image" :alt="product.title" />
        <div class="page__product_item--picture-title">{{product.name}}</div>
        <i18n-n
          v-if="product.promo"
          class="page__product_item--picture-promo"
          :value="parseFloat(product.promo)"
          format="percent"
        />
        <i18n-n
          :class="['page__product_item--picture-price', product.promo ? 'old__price' : '']"
          :value="parseFloat(product.price)"
          format="currency"
        />
        <i18n-n
          v-if="product.promo"
          :class="['page__product_item--picture-price', product.promo ? 'new__price' : '']"
          :value="parseFloat(product.price * ( 1 - product.promo ))"
          format="currency"
        />
      </div>
      <div class="page__product_item--description">
        <div class="page__product_item--description-options">
          <div
            :class="['description__option', description === 'description' ? 'active' : '']"
            @click="viewDescription('description')"
          >{{$t('pages.shop.description')}}</div>
          <div
            :class="['description__option', description === 'details' ? 'active' : '']"
            @click="viewDescription('details')"
          >{{$t('pages.shop.details')}}</div>
        </div>
        <div class="page__product_item--description-content">
          <div
            class="content__body"
            v-show="description === 'description'"
            v-html="product.description"
          ></div>
          <div class="content__body" v-show="description === 'details'">
            <div v-for="(d, di, dk) in product.details" :key="dk" class="content__body_item">{{d}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="page__product_actions">
      <router-link
        to="/shop"
        class="page__product_actions--action link"
        :title="$t('navigate.return')"
      >
        <div class="page__product_actions--action-icon">
          <Icons icon="ArrowLeft" class="icon" />
        </div>
        <span class="page__product_actions--action-label">{{$t('navigate.return')}}</span>
      </router-link>
      <PluginCounter
        @getValue="counterValue"
        :counter="count"
        class="page__product_actions--action counter"
      />
      <div
        class="page__product_actions--action-icon counter__add"
        :title="$t('pages.shop.choose')"
        @click="addToCart" v-show="this.count > 0"
      >
        <Icons icon="CartAdd" :title="$t('pages.shop.choose')" class="counter__add_icon" />
        <div class="counter__add_label">{{$t('pages.product.addLabel')}}</div>
      </div>
      <div
        :class="['page__product_actions--action-icon', (counter > 0 ? 'purchase' : '')]"
        :title="$t('pages.shop.choose')"
        @click="goToPurchase"
      >
        <Icons
          :icon="counter > 0 ? 'CartFull' : 'CartVoid'"
          :title="$t('pages.shop.choose')"
          class="icon"
        />
        <div v-if="counter > 0" class="badge">{{counter}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LStorage from '@/0.assets/scripts/Storage'

const lstorage = new LStorage()

export default {
  name: 'product',

  data () {
    return {
      productID: undefined,
      product: undefined,
      description: 'description',
      count: 0,
      invoice: null,
      counter: 0
    }
  },
  created () {
    var tplData = {
      data: {
        name: {
          first: null,
          last: null
        },
        document: null,
        phone: null,
        address: null,
        email: null,
        observations: null
      },
      products: []
    }

    if (lstorage.read('invoice') === null) {
      lstorage.save('invoice', tplData)
    }

    if (this.$route.params.id === undefined) {
      this.$router.push('/shop')
    } else {
      this.productID = this.$route.params.id
      axios.get(process.env.VUE_APP_CDN_SHOP)
        .then(res => (this.product = res.data.filter(p => this.productID === p.id.toString())[0]))
    }

    this.invoice = lstorage.read('invoice')
  },
  mounted () {
    this.getCountItems()
  },
  methods: {
    counterValue (value) {
      this.count = value
    },
    viewDescription (value) {
      this.description = value
    },
    goToPurchase () {
      if (this.counter !== 0) {
        this.$router.push('/cart')
      }
    },
    addToCart () {
      if (this.count !== 0) {
        var tplProduct = {
          name: this.product.name,
          id: this.product.id,
          price: this.product.price,
          cant: this.count
        }
        this.invoice.products.push(tplProduct)
        lstorage.save('invoice', this.invoice)
        this.getCountItems()
        this.counterValue(0)
      }
    },
    getCountItems () {
      if (lstorage.readContext('invoice', 'products').length !== 0) {
        this.counter = lstorage.readContext('invoice', 'products').reduce(
          (a, b) => {
            return a + b.cant
          }, 0
        )
      }
    }
  }
}
</script>
