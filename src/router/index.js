import Vue from 'vue'
import Router from 'vue-router'

import About from '@/pages/About.vue'
import Upload from '@/pages/Upload.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'About',
      component: About
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload
    }
  ]
})
