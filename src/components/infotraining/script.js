import './style.scss'

export default {
  name: 'infotraining',
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
