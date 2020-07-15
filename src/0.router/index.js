import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)

// const ArrayRoutes = routes.map(route => {
//   const childs = []
//   if (route.children !== undefined) {
//     route.children.map(child => {
//       childs.push({
//         ...child,
//         component: {
//           default: () => import(
//             /* webpackChunkName: "[request]" */
//             `@/0.pages/${child.context}/${child.name}.vue`
//           )
//         }
//       })
//     })
//   }

//   var finalRoute = {
//     ...route,
//     component: () => import(
//       /* webpackChunkName: "[request]" */
//       `@/0.pages/${route.context}/${route.name}.vue`
//     )
//     // children: childs
//   }
//   if (route.children !== undefined) {
//     finalRoute.children = childs
//   }
//   return finalRoute
// })

var router = new VueRouter({
  mode: 'hash',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: routes
})

export default router
