import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import base from '@c/base'
import '@j/App'
import '@s'

let script = document.createElement('script')
script.type = 'text/javascript'
script.onload = () => {
  Vue.use(VueRouter)
  Vue.use(base)
  const router=new VueRouter({
    routes
  })

  window._vm = new Vue({
    el: '#entry',
    router,
    template: '<App />',
    store,
    components: {App}
  })
}

script.src = 'js' + routes[0].redirect + '.js'
document.body.appendChild(script)
