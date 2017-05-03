import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Member from '@/components/pages/Member'
import Store from '@/components/pages/Store'
import Ad from '@/components/pages/Ad'
import Designer from '@/components/pages/Designer'
import Permission from '@/components/pages/Permission'
import Order from '@/components/pages/Order'
import Login from '@/components/pages/Login'
import Dashboard from '@/components/pages/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/store',
          name: 'Store',
          component: Store
        },
        {
          path: '/member',
          name: 'Member',
          component: Member
        },
        {
          path: '/ad',
          name: 'Ad',
          component: Ad
        },
        {
          path: '/designer',
          name: 'Designer',
          component: Designer
        },
        {
          path: '/permission',
          name: 'Permission',
          component: Permission
        },
        {
          path: '/order',
          name: 'Order',
          component: Order
        },
      ]
    },

  ]
})
