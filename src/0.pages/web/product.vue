<template>
  <div class="page__product">{{productID}}</div>
</template>

<script>
export default {

  name: 'product',

  data () {
    return {
      productID: undefined
    }
  },
  created () {
    if (this.$route.params.id === undefined) {
      this.$router.push('/shop')
    } else {
      this.productID = this.$route.params.id
    }
  }
}
</script>
