import Vue from 'vue'
import Router from 'vue-router'

import About from '@/pages/About.vue'
import Upload from '@/pages/Upload.vue'
import UploadGallery from '@/pages/UploadGallery.vue'
import Contact from '@/pages/Contact.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  },

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
