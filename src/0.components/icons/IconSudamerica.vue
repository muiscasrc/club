<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 59.6 66.1" class="component__icon">
    <g id="sudamericaLogo">
      <g id="right">
        <path :fill="redL" d="M55.6,24.7c-0.4,6.7-4.4,10.8-9.5,12.4c-1.8,0.6-6,0.9-9.9,0.9h-4.7c-0.3-1.9-0.7-3.9-1.3-5.9
    c-0.4-1.3-0.8-2.6-1-3.9h17.1c6.3,0,8.5-2.8,9.2-4.2c0.1-0.2,0.2-0.2,0.2,0C55.6,24.2,55.6,24.4,55.6,24.7z" />
        <path :fill="yellowL" d="M39.9,49.3c-2.1,0.5-4.9,0.8-8.4,0.8h-1c1.1-2.9,1.5-6.3,1.3-9.8h4.4c9.4,0,12.5-1.4,14.7-2.6
    c0.3-0.2,0.4,0.1,0.3,0.3c-1.3,2.5-2.9,4.9-4.7,7.3c-0.3,0.4-0.7,0.9-1.2,1.4C43.8,47.9,41.8,48.9,39.9,49.3z" />
        <path :fill="greenL" d="M19.6,61.8c-2.5,0.1-4.9-0.2-7-1.1c8.4,0.4,13.9-3,16.8-8.3H33c4.3,0,6.3-0.8,8-1.5c0.2-0.1,0.3,0,0.1,0.2
    c-4.3,4.1-9.1,7.2-13.7,8.9C24.8,61,22.1,61.6,19.6,61.8z" />
        <path :fill="blueL" d="M29,16.1h19.9c4,0,4.5-3.7,4.6-5c0.3,0.5,0.6,1,0.8,1.5c3.1,8.4-2.2,13.2-9.3,13.2l-16.2,0
    C28.3,22.5,28.4,19.1,29,16.1z" />
        <path :fill="cianL" d="M47.9,13.8H29.6c1.8-5.3,6-9.2,13.5-9.3c1.9,0.2,3.7,0.7,5.3,1.6C49.7,6.8,50.7,8,51,9.1
    C51.5,11.2,50.9,13.8,47.9,13.8z" />
      </g>
      <g id="left">
        <path :fill="cianD" d="M40.1,4.4c1-0.1,2,0,3,0.1c-7.5,0.1-11.7,4-13.5,9.3h-3c-4.3,0-6.3,0.8-8,1.5c-0.2,0.1-0.3,0-0.1-0.2
    c4.3-4.1,9.1-7.2,13.7-8.9C34.9,5.2,37.6,4.5,40.1,4.4z" />
        <path :fill="blueD" d="M29,16.1c-0.7,3.1-0.7,6.4-0.2,9.8h-5.3c-9.4,0-12.5,1.4-14.7,2.6c-0.3,0.2-0.4-0.1-0.3-0.3
    c1.3-2.5,2.9-4.9,4.7-7.3c0.3-0.4,0.7-0.9,1.2-1.4c1.4-1.3,3.4-2.3,5.3-2.7c2.1-0.5,4.9-0.8,8.4-0.8H29z" />
        <path :fill="redD" d="M31.6,38H16C7.3,38,4.7,41.1,4,42.5c0,0.1-0.1,0-0.1,0c0.2-1.4,0.4-2.9,0.8-4.3c0.8-3.1,3.4-6.9,6.5-8.2
    c2.3-1,5.3-1.7,9.2-1.7h8.8c0.3,1.3,0.6,2.7,1,3.9C30.9,34.1,31.3,36.1,31.6,38z" />
        <path :fill="yellowD" d="M30.4,50.1H10.7c-4,0-4.5,3.7-4.6,4.9c0,0,0,0-0.1,0c-0.3-0.5-0.5-1-0.8-1.5c-3.1-8.4,2.2-13.2,9.3-13.2
    l17.2,0C32,43.8,31.5,47.2,30.4,50.1z" />
        <path :fill="greenD" d="M29.4,52.4c-2.9,5.3-8.4,8.7-16.8,8.3c-0.4-0.2-0.9-0.4-1.3-0.6C9.9,59.4,9,58.2,8.7,57
    c-0.5-2.1,0.1-4.6,3.1-4.6H29.4z" />
      </g>
    </g>
  </svg>
</template>
<script>
export default {

  name: 'IconSudamerica',
  props: {
    colorBlack: {
      type: Boolean,
      default: false
    },
    colorWhite: {
      type: Boolean,
      default: false
    },
    colorGrey: {
      type: Boolean,
      default: false
    },
    colorSilver: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      cianL: '#00A2E5',
      cianD: '#0080D7',
      blueL: '#0062AA',
      blueD: '#004086',
      redL: '#FF030F',
      redD: '#C40C0F',
      yellowL: '#FFDE00',
      yellowD: '#FFB100',
      greenL: '#008D1C',
      greenD: '#006721'
    }
  },
  created () {
    if (this.colorWhite && this.color === '') {
      this.cianL = this.cianD = this.blueL = this.blueD = this.redL = this.redD = this.yellowL = this.yellowD = this.greenL = this.greenD = '#ffffff'
    } else if (this.colorBlack && this.color === '') {
      this.cianL = this.cianD = this.blueL = this.blueD = this.redL = this.redD = this.yellowL = this.yellowD = this.greenL = this.greenD = '#000000'
    } else if (this.colorGrey && this.color === '') {
      this.cianL = this.blueL = this.redL = this.yellowL = this.greenL = '#3a3a3a'
      this.cianD = this.blueD = this.redD = this.yellowD = this.greenD = '#1a1a1a'
    } else if (this.colorSilver && this.color === '') {
      this.cianL = this.blueL = this.redL = this.yellowL = this.greenL = '#eeeeee'
      this.cianD = this.blueD = this.redD = this.yellowD = this.greenD = '#dddddd'
    } else if (this.color !== '') {
      this.cianL = this.cianD = this.blueL = this.blueD = this.redL = this.redD = this.yellowL = this.yellowD = this.greenL = this.greenD = this.color
    }
  }
}

</script>
