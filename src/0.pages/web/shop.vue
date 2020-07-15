<template>
  <div class="page__shop">
    <div class="page__shop_title">
      <div class="page__shop_title--principal">
        {{$t('pages.shop.title')}}
      </div>
      <div class="page__shop_title--secondary shop__list">
        <div class="shop__list_item" v-for="(i, ii, ik) in 11" :key="ik">
          <div class="shop__list_item--top">
            <div class="shop__list_item--top-icon" v-if="Math.random() < .5">
              <Icons icon="HappyHour" class="happyhour"/>
            </div>
            <div class="shop__list_item--top-title">
              Protector Bucal
            </div>
            <div class="shop__list_item--top-price">
              $ 10.000,00
            </div>
          </div>
          <div class="shop__list_item--bottom">
            <div class="shop__list_item--bottom-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHtFxq0QLPvEc3SgNXYXuMMtxISjWaond5CQ&usqp=CAU" alt="">
            </div>
            <div class="shop__list_item--bottom-description">
              Protección de dientes y lengua en combate.
              Composición: Silicón termoformable.
            </div>
            <div class="shop__list_item--bottom-buy">
              <Icons icon="Buy" class="icon"/>
              <router-link to="/product/123" class="icon">
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
export default {

  name: 'WebShop',

  data () {
    return {

    }
  }
}
</script>
