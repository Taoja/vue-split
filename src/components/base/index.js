import tPage from './page'
import tHeader from './header'
import tFlex from './flex'
import tGroup from './group'
import tCell from './cell'
import sLogo from './symbolLogo'
import tPopup from './popup'
import './toast/index.js'
import './dialog/index.js'

export default {
  install (Vue){
    Vue.component('tPage', tPage)
    Vue.component('tHeader', tHeader)
    Vue.component('tFlex', tFlex)
    Vue.component('tGroup', tGroup)
    Vue.component('tCell', tCell)
    Vue.component('sLogo', sLogo)
    Vue.component('tPopup', tPopup)
  }
}
