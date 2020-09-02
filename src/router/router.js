import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/classify.vue'
import Pigeonhole from '../components/pigeonhole.vue'
import About from '../components/about.vue'
import Home from '../components/home.vue'
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
  }]
})
