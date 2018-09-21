import Vue from 'vue'
import dialog from './index.vue'

Vue.component('t-dialog', dialog)

const DialogExtends = Vue.extend({
  template: '<t-dialog :value="value" :options="options" :extend="extend" @click="click" @hide="hide"></t-dialog>',
  data () {
    return {
      value: false,
      options: {
        title: '',
        msg: '',
        img: '',
        okButton: '确认',
        cancelButton: ''
      },
      extend: []
    }
  },
  methods: {
    click (e) {
      console.log(e)
    },
    hide () {
      console.log()
    }
  }
})
DialogExtends.prototype.close = function () {
  this.$el.parentNode.removeChild(this.$el)
}
export const Dialog = (options) => {
  var instance = new DialogExtends().$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  instance.options = Object.assign({
    title: '',
    msg: '',
    okButton: '确认',
    img: '',
    cancelButton: ''},options)
  instance.extend = options.extendBtns
  instance.value = true
  let back = new Promise((a)=>{
    instance.click = (e) => {
      if (e.target.className === 'submit') {
        a({
          click: true
        })
      } else if (e.target.className === 'cancel') {
        a({
          click: false
        })
      } else {
        a({
          click: e.target.dataset.back
        })
      }
    }
    instance.hide = () => {
      instance.close()
    }
  })
  return back
}

Vue.$dialog = Vue.prototype.$dialog = Dialog
