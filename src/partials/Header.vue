<template>
  <header class="header">
    <div class="header__login">
      <span class="header__login_label">Login with:</span>
      <IconGoogle class="header__login_button"/>
      <IconFacebook class="header__login_button"/>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderPartial',
  components: {
    IconGoogle: () => import(
      /* webpackChunkName: "Icons" */
      'vue-material-design-icons/Google.vue'
    ),
    IconFacebook: () => import(
      /* webpackChunkName: "Icons" */
      'vue-material-design-icons/Facebook.vue'
    )
  }
}
</script>
<style lang="scss">
  .header {
    display:flex;
    justify-content:flex-end;
    align-items:center;
    &__login {
      margin-right: 1rem;
      display:flex;
      flex-direction: row;
      align-items:center;
      height: 3rem;
      padding: 0 0rem 0 1rem;
      color: #e6e6e6;

      overflow: hidden;
      @media(min-width: 48rem){
        border:1px solid #e6e6e6;
        border-radius: .5rem;
      }
      &_label {
        font-weight: 900;
        margin-right: 1rem;
      }
      &_button {
        height: 3rem;
        width: 3rem;
        color: #e6e6e6;
        display:flex;
        justify-content:center;
        align-items:center;
        overflow: hidden;
        &:hover {
          color: #d50000;
          background: #e6e6e6;
        }
      }
    }
  }
</style>
