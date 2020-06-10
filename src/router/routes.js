import HomeIcon from 'vue-material-design-icons/Home.vue'
import SchoolIcon from 'vue-material-design-icons/School.vue'
// import BlogIcon from 'vue-material-design-icons/Post.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
    menu: true
  },
  {
    path: '/shool',
    name: 'School',
    icon: SchoolIcon,
    menu: true
  },
  {
    path: '/schoolrugby7',
    name: 'SchoolRugby7',
    icon: SchoolIcon,
    menu: false
  },
  {
    path: '/schoolrugbyxv',
    name: 'SchoolRugbyXV',
    icon: SchoolIcon,
    menu: false
  },
  {
    path: '/schoolrugbyleague',
    name: 'SchoolRugbyLeague',
    icon: SchoolIcon,
    menu: false
  }

  // {
  //   path: '/blog',
  //   name: 'Blog',
  //   icon: BlogIcon
  // }
]

export default routes
