import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import base from '@c'
import '@j/App'
import '@s'

window.location = '/#/'

let script = document.createElement('script')
script.type = 'text/javascript'
script.onload = () => {
  store.state.loadedPages.push(routes[0].redirect.split('/')[1])
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
  document.body.removeChild(script)
}

script.src = 'js' + routes[0].redirect + '.js'
document.body.appendChild(script)
