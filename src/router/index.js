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
        component: () => import(/* webpackChunkName: "[`${child.name}`]" */ `../views/${child.name}.vue`)
      })
    })
  }

  return {
    ...route,
    component: () => import(/* webpackChunkName: "[${route.name}]" */ `../views/${route.name}.vue`),
    children: childs
  }
})

const router = new VueRouter({
  mode: 'hash',
  base: process.env.NOD_ENV === 'production' ? '/club/' : '/',
  linkExactActiveClass: 'active',
  routes: ArrayRoutes

const router = new VueRouter({
  routes: Routes
})

console.log(router)

export default router
