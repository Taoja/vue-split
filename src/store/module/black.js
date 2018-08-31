
export default {
  namespaced: true,
  state: {
    count: 1
  },
  getters: {
    getCount (state) {
      return state.count
    },
  },
  mutations: {
    setCount (state) {
      state.count++
    }
  }
}

