<template>
  <div id="network" class="network">
    <div class="network__title">{{title}}</div>
    <div class="network__links">
      <a v-for="(v, k, i) in links" :key="i"
      :class="['network__links_item', 'fab fa-2x', v.icon]" :href="v.url"
      :target="[newPage ? '_blank' : '']"
      />
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss">
@import url("./style.scss");
</style>
