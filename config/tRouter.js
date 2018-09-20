const tRouter = {
  install (vue, options) {
    var loadPage = (path, name) => {
      return new Promise((a) => {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.onload = () => {
          a()
          document.body.removeChild(script)
        }
        script.src = `js/${name}.js`
        document.body.appendChild(script)
      })
    }
    var router = vue.component('tRouter', {
      data () {
        return {
          nowPage: '',
          loadedPageList: []
        }
      },
      props: {
        pages: {
          type: Array,
          default: options
        },
        enter: '',
        leave: ''
      },
      computed: {
        comp () {
          return this.pages.find((a) => {
            return a.path === this.nowPage
          })
        }
      },
      template: `
        <div class="T_router">
          <transition
          :enter-active-class="enter"
          :leave-active-class="leave">
            <component v-if="nowPage === item.path" v-for="(item, index) in pages" :key="index" :is="comp.component">
            </component>
          </transition>
        </div>
      `,
      methods: {
        go (e) {
          if (this.loadedPageList.includes(e)) {
            this.nowPage = e
          } else {
            var item = this.pages.find((a) => {
              return a.path === e
            })
            loadPage(item.path, item.name).then(() => {
              this.loadedPageList.push(e)
              this.nowPage = e
            })
          }
        },
        hashChange () {
          var hash = window.location.hash.split('#')[1]
          this.go(hash)
        }
      },
      mounted() {
        var path = this.pages[0].redirect
        this.go(path)
        window.location = `#${path}`
        window.onhashchange = this.hashChange
      },
    })
    vue.prototype.$router = {
        go (e) {
          window.location = `#${e}`
        }
    }
  }
}

export default tRouter