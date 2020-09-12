import Vue from 'vue'

//配置elementui
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Elementui)

//配置animated
import animated from 'animate.css'
Vue.use(animated)


//配置markdown 
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// 配置axios
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: '/'
})
