import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/student',
      name: 'student',
      component: () => import(/* webpackChunkName: "student" */ './views/Student.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/*webpackChunkName: "about." */ './views/Admin.vue')
    }
  ]
})
