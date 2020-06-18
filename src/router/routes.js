import HomeIcon from 'vue-material-design-icons/Home.vue'
import SchoolIcon from 'vue-material-design-icons/School.vue'
import BlogIcon from 'vue-material-design-icons/Post.vue'

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
    // children: [
    //   {
    //     path: '/rugby-xv',
    //     name: 'SchoolRugbyXV'
    //   },
    //   {
    //     path: '/rugby-7',
    //     name: 'SchoolRugby7'
    //   },
    //   {
    //     path: '/rugby-league',
    //     name: 'SchoolRugbyLeague'
    //   }
    // ]
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
    path: '/notfound',
    name: 'NotFound'
  },
  {
    path: '*',
    redirect: '/notfound'
  }

]

export default routes
