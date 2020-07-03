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
        component: () => import(
          /* webpackChunkName: "[request]" */
          `@/views/${child.name}.vue`
        )
      })
    })
  }

  return {
    ...route,
    component: () => import(
      /* webpackChunkName: "[request]" */
      `@/views/${route.name}.vue`
    ),
    children: childs
  }
})

var router = new VueRouter({
  mode: 'hash',
  linkExactActiveClass: 'active',
  routes: ArrayRoutes
})

export default router
