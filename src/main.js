import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

Vue.use(VueChartkick)

import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filter'

Vue.use(VueSpinners)

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

