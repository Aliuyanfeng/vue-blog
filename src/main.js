
import './globalConfig.js'

import Vue from 'vue'
import App from './App.vue'
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router/router.js'
//store
import store from './store.js'


/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  render(h) {
      return h(App)
  },
  router,
  store
})