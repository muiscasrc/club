<template>
  <div id="network" class="network">
    <div class="network__title" v-if="title !== ''">{{title}}</div>
    <div class="network__links">
      <a class="network__links_item"
        v-if="facebook !== undefined"
        :href="[`https://facebook.com/${facebook}`]"
        :target="[newPage ? '_blank' : '']"><iconFacebook
        :size="sizeIcon"
        :strokeWidth="1"/></a>
      <a class="network__links_item"
        v-if="twitter !== undefined"
        :href="[`https://twitter.com/${twitter}`]"
        :target="[newPage ? '_blank' : '']"><iconTwitter
        :size="sizeIcon"
        :strokeWidth="1"/></a>
      <a class="network__links_item"
        v-if="instagram !== undefined"
        :href="[`https://instagram.com/${instagram}`]"
        :target="[newPage ? '_blank' : '']"><iconInstagram
        :size="sizeIcon"
        :strokeWidth="1"/></a>
      <a class="network__links_item"
        v-if="youtube !== undefined"
        :href="[`https://youtube.com/${youtube}`]"
        :target="[newPage ? '_blank' : '']"><iconYoutube
        :size="sizeIcon"
        :strokeWidth="1"/></a>
      <a class="network__links_item"
        v-if="linkedin !== undefined"
        :href="[`https://linkedin.com/${linkedin}`]"
        :target="[newPage ? '_blank' : '']"><iconLinkedin
        :size="sizeIcon"
        :strokeWidth="1"/></a>
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss">
@import url("./style.scss");
</style>
