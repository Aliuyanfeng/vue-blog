import Vue from 'vue'

import Moment from 'moment'

Vue.filter('dateFormat', function (date) {
  return Moment(date).format('YYYY-MM-DD HH:mm:ss')
})
