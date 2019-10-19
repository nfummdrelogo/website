import Vue from 'vue'
import Router from 'vue-router'

import About from '@/pages/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    }
  ]
})
