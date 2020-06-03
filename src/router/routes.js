const routeOptions = [
  { path: '/', name: 'Home' },
  { path: '/blog', name: 'Blog' }
]

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(/* webpackChunkName: "[request]" */ `../views/${route.name}.vue`)
  }
})

export default routes
