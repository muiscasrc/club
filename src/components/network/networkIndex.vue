<template>
  <div id="network" class="network">
    <a v-for="(v, k, i) in links" :key="i"
    :class="['network__item', 'fab fa-4x', v.icon]" :href="v.url"
    :target="[newPage ? '_blank' : '']"
    />
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss">
@import url("./style.scss");
</style>
