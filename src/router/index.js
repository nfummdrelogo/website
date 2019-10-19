import Vue from 'vue'
import Router from 'vue-router'

import About from '@/pages/About.vue'
import Upload from '@/pages/Upload.vue'
import UploadGallery from '@/pages/UploadGallery.vue'
import Contact from '@/pages/Contact.vue'

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
    }, 
    {
      path: '/UploadGallery',
      name: 'UploadGallery',
      component: UploadGallery
    }, 
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
