import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueRouter)

const ArrayRoutes = Routes.map(route => {
  const childs = []
  if (route.children !== undefined) {
    route.children.map(child => {
      childs.push({
        ...child,
        component: () => import(/* webpackChunkName: "[request]", webpackPrefetch: true */ `@/views/${child.name}.vue`)
      })
    })
  }

  return {
    ...route,
    component: () => import(/* webpackChunkName: "[request]", webpackPrefetch: true */ `@/views/${route.name}.vue`),
    children: childs
  }
})

const router = new VueRouter({
  mode: 'hash',
  linkExactActiveClass: 'active',
  routes: ArrayRoutes
})

export default router

// const router = new VueRouter({
//   mode: 'history',
//   linkExactActiveClass: 'active',
//   routes: [
//     {
//       path: '/',
//       component: () => import(/* webpackChunkName: "ViewHome" */ '@/views/Home.vue')
//     },
//     {
//       path: '/learn',
//       component: () => import(/* webpackChunkName: "ViewLearn" */ '@/views/School.vue'),
//       children: [
//         {
//           path: '/rugby_xv',
//           component: () => import(/* webpackChunkName: "ViewRugbyXV" */ '@/views/SchoolRugbyXV.vue')
//         },
//         {
//           path: '/rugby_7',
//           component: () => import(/* webpackChunkName: "ViewRugby7" */ '@/views/SchoolRugby7.vue')
//         },
//         {
//           path: '/rugby_league',
//           component: () => import(/* webpackChunkName: "ViewRugbyLeague" */ '@/views/SchoolRugbyLeague.vue')
//         }
//       ]
//     },
//     {
//       path: '/Blog',
//       component: () => import(/* webpackChunkName: "Blog" */ '@/views/Blog.vue')
//     }
//   ]
// })

// export default router
