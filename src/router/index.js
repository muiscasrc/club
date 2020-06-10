import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueRouter)


const ArrayRoutes = Routes.map(route => {
  return {
    ...route,
    component: () => import(/* webpackChunkName: "[request]" */ `../views/${route.name}.vue`)
  }
})

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes: ArrayRoutes

const router = new VueRouter({
  routes: Routes
})

export default router
