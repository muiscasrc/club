import HomeIcon from 'vue-material-design-icons/Home.vue'
import SchoolIcon from 'vue-material-design-icons/School.vue'
import BlogIcon from 'vue-material-design-icons/Post.vue'
import DashboardIcon from 'vue-material-design-icons/Orbit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
    menu: true
  },
  {
    path: '/learn',
    name: 'School',
    icon: SchoolIcon,
    menu: true
  },
  // Subpages from /shool
  {
    path: '/learn/rugby_7',
    name: 'SchoolRugby7',
    menu: false
  },
  {
    path: '/learn/rugby_xv',
    name: 'SchoolRugbyXV',
    menu: false
  },
  {
    path: '/learn/rugby_league',
    name: 'SchoolRugbyLeague',
    menu: false
  },
  {
    path: '/blog',
    name: 'Blog',
    icon: BlogIcon,
    menu: true
  },
  {
    path: '/login',
    name: 'Login'
    // icon: BlogIcon,
    // menu: true
  },
  {
    path: '/notfound',
    name: 'NotFound'
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      login: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    menu: false
  },
  // Access to club administration
  {
    path: '/xbXVpc2Nhc3J1Z2J5Y2x1Yg',
    name: 'xbXVpc2Nhc3J1Z2J5Y2x1Yg',
    icon: DashboardIcon,
    menu: false,
    meta: {
      login: true
    }
  }
]

export default routes
