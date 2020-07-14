<template>
  <svg width="102.58" height="128" version="1.1" viewBox="0 0 102.58 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="component__icon">
    <defs>
      <linearGradient id="linearGradient1798" x1="260.68" x2="131.82" y1="187" y2="67.05" gradientTransform="matrix(.28188 0 0 .28188 -12.095 8.8088)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#00419b" offset="0" />
        <stop stop-color="#2c8626" offset="1" />
      </linearGradient>
    </defs>
    <g transform="translate(0 -263.13)">
      <g transform="matrix(.93863 0 0 .93863 11.353 254.87)" :fill="fill">
        <path d="m85.998 8.8088a79.188 123.18 60 0 0-14.111 2.1016 36.071 85 0 0 1 6.7324 49.268 36.071 85 0 0 1-36.072 85 54.643 85 0 0 0 54.645-85 54.643 85 0 0 0-11.193-51.369zm-43.451 136.37a36.071 85 0 0 1-36.07-85 36.071 85 0 0 1 1.3008-22.26 79.188 123.18 60 0 0-19.639 14.998 54.643 85 0 0 0-0.23438 7.2617 54.643 85 0 0 0 54.643 85z" />
        <path d="m58.469 14.211a79.188 123.18 60 0 0-33.406 13.498 18.929 85 0 0 0-1.4434 32.469 18.929 85 0 0 0 18.928 85 18.929 85 0 0 0 18.93-85 18.929 85 0 0 0-3.0078-45.967z" />
      </g>
    </g>
  </svg>
</template>
<script>
export default {

  name: 'IconWorldRugby',

  props: {
    colorFull: Boolean,
    colorBlack: Boolean,
    colorWhite: Boolean
  },
  data () {
    return {
      fill: 'url(#linearGradient1798)'
    }
  },
  created () {
    if (this.colorBlack) {
      this.fill = '#000000'
    } else if (this.colorWhite) {
      this.fill = '#ffffff'
    }
  }
}

</script>
<style lang="css" scoped>
</style>
