const routerLoader = function () {
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
        document.body.removeChild(script)
      }
      script.src = 'js/' + to.name + '.js'
      document.body.appendChild(script)
    }
  })
}

export {
  routerLoader
}
