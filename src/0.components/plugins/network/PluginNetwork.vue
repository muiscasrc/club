<template>
  <div id="network" class="network">
    <div class="network__title" v-if="title !== ''">{{title}}</div>
    <div class="network__links">
      <a class="network__links_item" rel="noopener noreferrer" v-if="email !== ''" :href="[`mailto:${email}?subject= Hola, quiero que me cuentes mas&body=Hola, pase por sitio de Muiscas RC y me gustaria que me envies mas información acerca de este fabuloso club`]" :target="[newPage ? '_blank' : '']" :style="{ order: emailPosition }" :tabIndex="emailPosition">
        <Icons icon="Email" class="network__links_item--icon" :size="size"/></a>

      <a class="network__links_item" rel="noopener noreferrer" v-if="facebook !== ''" :href="[`https://facebook.com/${facebook}`]" :target="[newPage ? '_blank' : '']" :style="{ order: facebookPosition }" :tabIndex="facebookPosition">
        <Icons icon="Facebook" class="network__links_item--icon" :size="size"/></a>

      <a class="network__links_item" rel="noopener noreferrer" v-if="twitter !== ''" :href="[`https://twitter.com/${twitter}`]" :target="[newPage ? '_blank' : '']" :style="{ order: twitterPosition }" :tabIndex="twitterPosition">
        <Icons icon="Twitter" class="network__links_item--icon" :size="size"/></a>

      <a class="network__links_item" rel="noopener noreferrer" v-if="instagram !== ''" :href="[`https://instagram.com/${instagram}`]" :target="[newPage ? '_blank' : '']" :style="{ order: instagramPosition }" :tabIndex="instagramPosition">
        <Icons icon="Instagram" class="network__links_item--icon" :size="size"/></a>

      <a class="network__links_item" rel="noopener noreferrer" v-if="youtube !== ''" :href="[`https://youtube.com/${youtube}`]" :target="[newPage ? '_blank' : '']" :style="{ order: youtubePosition }" :tabIndex="youtubePosition">
        <Icons icon="Youtube" class="network__links_item--icon" :size="size"/></a>

      <a class="network__links_item" rel="noopener noreferrer" v-if="linkedin !== ''" :href="[`https://linkedin.com/${linkedin}`]" :target="[newPage ? '_blank' : '']" :style="{ order: linkendinPosition }" :tabIndex="linkedinPosition">
        <Icons icon="Linkedin" class="network__links_item--icon" :size="size"/></a>
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss">@import './style'</style>
