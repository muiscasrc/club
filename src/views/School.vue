<template>
  <div class="school__view">
    <router-link v-for="(c, ci, ck) in masterClass" :key="ck" class="card" :to="c.id">
      <h2 class="card__title">{{c.title}}</h2>
      <img class="card__img" :src="require('@/assets/images/' + c.id + '.jpg')">
    </router-link>
  </div>
</template>

<style lang="scss">
  .school__view {
    flex:1;
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
  }
  .card{
    width: 25%;
    height: 24rem;
    overflow: hidden;
    position: relative;
    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items:center;
    text-align: center;

    &:after{
      position:absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      content:"";
      background: rgba(#1a1a1a ,.75);
      transition: all .2s ease-in-out;
    }

    &__title{
      font-size: 1rem;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      color: #e6e6e6;
      z-index: 1;
      transition: all .2s ease-in-out;
    }

    &__img{
      height: 100%;
      width: auto;
      margin: auto;
      transition: all .2s ease-in-out;
    }

    &:hover{
      &:after{
        background: rgba(#d50000,.75);
        transition: all .2s ease-in-out;
      }
      .card__img{
        height: 200%;
        transform: rotateZ(10deg) translateY(-5%);
        transition: all .2s ease-in-out;
      }

      .card__title{
        font-size: 3rem;
        font-weight: 900;
        bottom: 50%;
        right: 50%;
        transform: translate(50%, 50%);
        transition: all .2s ease-in-out;
      }
    }
  }
</style>
<script>
export default {

  name: 'School',

  data () {
    return {
      masterClass: [{
        title: 'Rugby XV',
        id: 'schoolrugbyxv'
      },
      {
        title: 'Rugby 7\'s',
        id: 'schoolrugby7'
      },
      {
        title: 'Rugby League',
        id: 'schoolrugbyleague'
      }
      ]
    }
  }
}

</script>
