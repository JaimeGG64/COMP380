import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Student from './views/Student.vue'

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
