import iconCalendar from 'vue-material-design-icons/CalendarBlank'
import iconMap from 'vue-material-design-icons/MapMarker'
import iconClock from 'vue-material-design-icons/ClockOutline'

export default {
  name: 'PluginInfoTraining',
  components: {
    iconCalendar,
    iconMap,
    iconClock
  },
  props: {
    title: {
      type: String,
      default: 'Evento'
    },
    infoDays: {
      type: Array,
      default: []
    },
    infoTime: {
      type: String,
      default: ''
    },
    infoLocale: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      daysWeek: [
        'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
      ],
      monthYear: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ]
    }
  },
  methods: {},
  computed: {
    getDate () {
      const date = new Date()
      const today = date.getDay()
      const month = this.monthYear[date.getMonth()]
      // const year = date.getFullYear()
      let string = ''

      this.infoDays.forEach((value, key) => {
        try {
          if (this.infoDays[key - 1] < today && today <= this.infoDays[key]) {
            const day = this.daysWeek[value - 1]
            const dt = date.getDate() - date.getDay() + value
            const days = dt - date.getDate()
            let n = ''
            let s = ''

            if (days > 1) {
              n = 'n'
              s = 's'
            }

            string = `${day}, ${dt} de ${month}: falta${n} ${days} dia${s}`
          }
        } catch (err) {
          return null
        }
      })
      return string
    },
    getTime () {
      // TODO : Add time remaining to next event
      return this.infoTime
    },
    getLocale () {
      // TODO : Click event to locale into map
      return this.infoLocale
    }
  }
}
