import Vue from 'vue'
import admin from './Admin.vue'

import '../../globalConfig.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from '../../router/router.js'
//store
import store from '../../store.js'


new Vue({
  el: '#admin',
  render: h => h(admin),
  router
})
