<template>
  <div id="app" class="app">
    <navigatePartial class="app__navigate" />
    <div class="app__main">
      <headerPartial class="app__main_header" />
      <mainPartial class="app__main_content" />
      <footerPartial class="app__main_footer" />
    </div>
  </div>
</template>
<script data-ad-client="ca-pub-9678204557815632" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
export default {
  data() {
    return {
      initTraining: new Date('2020/05/01 19:30:00').getTime(),
      deadLine: {
        time: new Date('2020/04/14 00:00:00').getTime(),
        title: 'SUSPENSIÓN\nSARS-COV-2\n'
      },
      messages: [
        'lavate las manos',
        'cuida a tu familia',
        'quedate en casa',
        'protegete al salir'
      ],
      msg: '',
      infoTraining: {
        title: 'Proximo Entrenamiento',
        // days: [1, 3, 5],
        localization: 'Suspension por SARS-COV-2',
        time: 'Por definir'
      }
    }
  },
  computed: {
    getTitleDeadLine() {
      return `${this.deadLine.title}${this.msg}`
    }
  },
  created() {
    setInterval(() => {
      const index = Math.floor(Math.random() * (this.messages.length + 1 - 1) + 1)
      this.msg = this.messages[index - 1]
    }, 1000)
  }
}

</script>
