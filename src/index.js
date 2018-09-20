import Vue from 'vue'
import App from './App'
import tRouter from '../config/tRouter'
import routes from 'routes'
import store from 'stores'
import base from '@c'
import '@j/App'
import '@s'

Vue.use(base)
Vue.use(tRouter, routes)
window._vm = new Vue({
  el: '#entry',
  template: '<App />',
  store,
  components: {App}
})
