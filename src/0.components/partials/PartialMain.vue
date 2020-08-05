<template>
  <main class="partial__main">
    <transition name="fade" mode="out-in">
      <router-view class="partial__main_view" />
    </transition>
  </main>
</template>
<script>
export default {
  name: 'PartialMain'
}
</script>

<style scope>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
</style>
