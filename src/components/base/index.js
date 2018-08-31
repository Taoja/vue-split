import vPage from './page'
import vHeader from './header'

export default {
  install (Vue){
    Vue.component('vPage', vPage)
    Vue.component('vHeader', vHeader)
  }
}
