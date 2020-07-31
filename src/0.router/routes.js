const routes = [
  {
    path: '/',
    name: 'home',
    menu: false,
    component: () =>
      import(/* webpackChunkName: "Home" */ '@/0.pages/web/home.vue')
  },
  {
    path: '/suscribe',
    name: 'suscribe',
    props: true,
    menu: false,
    component: () =>
      import(/* webpackChunkName: "Home" */ '@/0.pages/web/suscribe.vue')
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/about/findus',
    component: () =>
      import(/* webpackChunkName: "About" */ '@/0.pages/web/about.vue'),
    children: [
      {
        path: 'findus',
        component: () =>
          import(
            /* webpackChunkName: "AboutFind" */ '@/0.pages/web/aboutfindus.vue'
          )
      },
      {
        path: 'history',
        component: () =>
          import(
            /* webpackChunkName: "AboutHistory" */ '@/0.pages/web/abouthistory.vue'
          )
      },
      {
        path: 'object',
        component: () =>
          import(
            /* webpackChunkName: "AboutObject" */ '@/0.pages/web/aboutobject.vue'
          )
      }
    ]
  },
  {
    path: '/academy',
    name: 'academy',
    menu: false,
    component: () =>
      import(/* webpackChunkName: "Academy" */ '@/0.pages/web/academy.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    menu: false,
    component: () =>
      import(/* webpackChunkName: "Contact" */ '@/0.pages/web/contactus.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () =>
      import(/* webpackChunkName: "Shop" */ '@/0.pages/web/shop.vue')
  },
  {
    path: '/product/:id?',
    name: 'product',
    props: true,
    menu: false,
    component: () =>
      import(/* webpackChunkName: "Shop" */ '@/0.pages/web/product.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    menu: false,
    component: () =>
      import(/* webpackChunkName: "Cart" */ '@/0.pages/web/cart.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '@/0.pages/web/login.vue')
  }
]

export default routes
