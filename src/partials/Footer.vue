<template>
  <footer class="footer">
    <div class="footer__org">
      <a title="Liga de Rugby de Bogotá" class="footer__org_link" target="_blank" href="https://ligarugbybogota.com">
        <LigaRugbyBogota :color="colorLogos" class="footer__org_link--icon" />
      </a>
      <a title="Sudamerica Rugby" class="footer__org_link" target="_blank" href="https://sudamerica.rugby">
        <SudamericaFull :color="colorLogos" class="footer__org_link--icon" />
      </a>
      <a title="World Rugby" class="footer__org_link" target="_black" href="https://world.rugby">
        <WorldRugbyFull :color="colorLogos" class="footer__org_link--icon" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPartial',
  data () {
    return {
      colorLogos: '#e6e6e6'
    }
  }
}

</script>
