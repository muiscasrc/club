import './style.scss'
import iconCalendar from 'vue-material-design-icons/CalendarBlank'
import iconMap from 'vue-material-design-icons/MapMarker'
import iconClock from 'vue-material-design-icons/ClockOutline'

export default {
  name: 'infotraining',
  components: {
    iconCalendar,
    iconMap,
    iconClock
  },
  props: {
    info: {
      type: Object
    },
    title: {
      type: String,
      default: 'Evento'
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
    getDate () {}
  }
}
