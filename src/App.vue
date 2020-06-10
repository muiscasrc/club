<template>
  <div id="app" class="app">
    <!--     <div class="app__group">
      <div class="app__group_img">
        <img class="header" :src="require('@/assets/header.png')" alt="muiscas rugby club" />
        <span class="header title">news</span>
      </div>
    </div>

    <div class="app__group" v-if="deadLine.time > new Date()">
      <countdown
        :end="deadLine.time"
        :title="getTitleDeadLine"
      />
    </div> -->
    <!-- <div class="app__group" v-else> -->
    <navigatePartial class="app__navigate"/>
    <div class="app__main">
      <headerPartial class="app__main_header" />
      <mainPartial class="app__main_content"/>
      <footerPartial class="app__main_footer" />
    </div>
    <!--       <div class="app__group">
        <infotraining
        :title="infoTraining.title"
        :infoDays="infoTraining.days"
        :infoTime="infoTraining.time"
        :infoLocale="infoTraining.localization" />
        <countdown :end="initTraining" />
      </div>
      <div class="app__group">
        <network
        :title="'Buscanos en las redes como @muiscasRC'"
        newPage
        :sizeIcon="30"
        :facebook="'muiscasrc'"
        :twitter="'muiscasrc'"
        :instagram="'muiscasrc'"
        />
      </div> -->
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  data () {
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
    getTitleDeadLine () {
      return `${this.deadLine.title}${this.msg}`
    }
  },
  created () {
    setInterval(() => {
      const index = Math.floor(Math.random() * (this.messages.length + 1 - 1) + 1)
      this.msg = this.messages[index - 1]
    }, 1000)
  }
}

</script>
