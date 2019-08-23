import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'signin',
      component: () => import('./views/Signin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/Main.vue')
    },
    {
      path: '/writeperson',
      name: 'writeperson',
      component: () => import('./views/WritePerson.vue')
    },
    {
<<<<<<< HEAD
      path: '/groupmain',
      name: 'groupmain',
      component: () => import('./views/GroupMain.vue')
=======
      path: '/feedperson',
      name: 'feedperson',
      component: () => import('./views/FeedPerson.vue')
>>>>>>> e7a809987d6803aac3e1630b91bd4f3f35c5d4a8
    }
  ]
})
