import Vue from 'vue'
import App from './App'
import tRouter from 'vue-splitter/tRouter'
import routes from 'routes'
import store from 'stores'
import {
  tPage,
  tHeader,
  tFlex,
  tGroup,
  tCell,
  sLogo,
  tPopup,
  tInput,
  tButton
} from 'components'
import '@j/App'
import '@s'

Vue.component('tPage', tPage)
Vue.component('tHeader', tHeader)
Vue.component('tFlex', tFlex)
Vue.component('tGroup', tGroup)
Vue.component('tCell', tCell)
Vue.component('sLogo', sLogo)
Vue.component('tPopup', tPopup)
Vue.component('tInput', tInput)
Vue.component('tButton', tButton)

Vue.use(tRouter, routes)
window._vm = new Vue({
  el: '#entry',
  template: '<App />',
  store,
  components: {App}
})
