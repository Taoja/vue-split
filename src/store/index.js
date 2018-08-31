import Vue from 'vue'
import Vuex from 'vuex'
import black from './module/black'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    __pageStack: [],
    goback: false,
    loadedPages: [],
  },
  mutations: {
    addStack (state, path) {
      let fromPath = path.from,
          toPath = path.to
      if (!state.__pageStack.includes(fromPath)) { //来向路径确保在栈中
        state.__pageStack.push(fromPath)
      }
      state.goback = state.__pageStack.includes(toPath) //判断栈内是否有去向页面来判断动画
      if (state.goback) {
        state.__pageStack = state.__pageStack.slice(0, state.__pageStack.indexOf(toPath) + 1) //返回并删除栈后的页面
      } else {
        state.__pageStack.push(toPath) //压栈
      }
      console.log(state.__pageStack)
    },
    addLoaded (state, name) {
      state.loadedPages.push(name)
    }
  },
  modules: {
    black
  }
})

export default store
