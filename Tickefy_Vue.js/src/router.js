import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events.vue')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('./views/Pay.vue')
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: () => import('./views/Bookings.vue')
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('./views/Verify.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
})