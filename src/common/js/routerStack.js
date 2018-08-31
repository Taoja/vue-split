const routerLoader = function () {
  resetRouterGo.call(this)
  this.$router.beforeEach((to, from, next) => {
    if (to.path === '/') return
    if (this.loadedPages.includes(to.name)) {
      next()
    } else {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.onload = () => {
        this.addLoaded(to.name)
        next()
      }
      script.src = 'js/' + to.name + '.js'
      document.body.appendChild(script)
    }
  })
}

const resetRouterGo = function () {
  this.$router.go = (index = -1) => {
    return new Promise((resolve, reject) => {
      let position = this.__pageStack.length + index -1 //计算返回在栈中位置
      let path = this.__pageStack[position] //获取去向名
      if (path) {
        resolve(path)
        this.$router.push(path) //跳转至去向页面
      } else {
        reject && reject()
      }
    })
  }
}

export {
  routerLoader,
  resetRouterGo
}
