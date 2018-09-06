import Vue from 'vue'
import toast from './index.vue'

Vue.component('t-toast', toast)

const ToastExtend = Vue.extend({
  template: '<t-toast :msg="options.msg" :icon="options.icon" :image="options.image" :iconColor="options.iconColor" v-model="options.value" @close="hide"></t-toast>',
  data () {
    return {
      options: {}
    }
  },
  methods: {
    hide () {
    }
  }
})
ToastExtend.prototype.close = function () {
  this.$el.parentNode.removeChild(this.$el)
}
const Toast = (options) => {
  var instance = new ToastExtend().$mount(document.createElement('div'))
  instance.options = Object.assign({
    msg: '',
    icon: '',
    image: '',
    value: true,
    duration: 2000,
    iconColor: 'white'
  },options)
  if (instance.options.duration) {
    setTimeout(() => {
      instance.options.value = false
    }, instance.options.duration)
    var back = new Promise((a)=>{
      instance.hide = () => {
        instance.close()
        a()
      }
    })
  } else {
    instance.hide = () => {
      instance.close()
    }
    var back = instance
  }
  document.body.appendChild(instance.$el)
  return back
}

Vue.$toast = Vue.prototype.$toast = Toast

export default Toast
