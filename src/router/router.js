import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/classify.vue'
import Pigeonhole from '../components/pigeonhole.vue'
import About from '../components/about.vue'
import Home from '../components/home.vue'
import Article from '../components/admin/article.vue'
import Write from '../components/admin/write.vue'
import Edit from '../components/admin/edit.vue'
import Details from '../components/admin/details.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    components: {
      front: Home
    }
  }, {
    path: '/classify',
    components: {
      front: Classify
    }
  }, {
    path: '/pigeonhole',
    components: {
      front: Pigeonhole
    }
  }, {
    path: '/about',
    components: {
      front: About
    }
  }, {
    path: '/article',
    components: {
      admin: Article
    }
  }, {
    path: '/write',
    components: {
      admin: Write
    }
  }, {
    path: '/article/edit',
    components: {
      admin: Edit
    },
  }, {
    path: '/details',
    components: {
      front: Details
    }
  }]
})


