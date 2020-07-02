<template>
  <div class="home__view">
    <countdown :end="deadLine.time" :title="deadLine.title" />
  </div>
</template>
<script>
export default {

  name: 'Home',

  data () {
    return {
      deadLine: {
        time: new Date('2020/03/25   00:00:00').getTime(),
        title: '<b>👉SUSPENSIÓN👈</b>\nEMERGENCIA SANITARIA\nPRONTO MAS NOTICIAS'
      }
    }
  },
  computed: {
    getTitleDeadLine () {
      return `${this.deadLine.title}${this.msg}`
    }
  }
}

</script>
