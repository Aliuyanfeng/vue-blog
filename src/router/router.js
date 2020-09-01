import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/classify.vue'
import Pigeonhole from '../components/pigeonhole.vue'
import About from '../components/about.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    component:About
  }, {
    path: '/classify',
    component: Classify
  }, {
    path: '/pigeonhole',
    component: Pigeonhole
  }, {
    path: '/about',
    component: About
  }]
})
