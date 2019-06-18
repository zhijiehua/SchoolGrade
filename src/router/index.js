import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Firstpages from '@/pages/firstpages/Firstpages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/firstpages',
      name: 'Firstpages',
      component: Firstpages
    }
  ]
})
