import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Student from './views/Student.vue'
import Wishlist from './views/Wishlist.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: Wishlist
    },
    {
      path: "/course/:courseName",
      name: 'course',
      component: () => import(/* webpackChunkName: "student" */ './views/Course.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/*webpackChunkName: "about." */ './views/Admin.vue')
    },
    {
      path: '/instructor',
      name: 'instructor',
      component: () => import('./views/Instructor.vue')
    },
  ]
})
