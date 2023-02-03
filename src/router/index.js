import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue'
import Home from '../views/Home.vue'

import UserMain from '../views/UserMain.vue'
import UserDashboard from '../views/UserDashboard.vue'
import UserEdit from '../views/UserEdit.vue'

const routes = [
  { path: '/', name: 'home', component: Home, },
  { path: '/notifications', name: 'notifications', component: () => import('../views/Notifications.vue') },
  {
    path: '/user',
    component: UserMain,
    children: [
      { path: '', name: 'user-dashboard', component: UserDashboard },
      { path: 'edit', name: 'user-edit', component: UserEdit, meta: { keepAlive: true } }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  hash: false,
  linkActiveClass: 'active',
  routes,
})

export default router
