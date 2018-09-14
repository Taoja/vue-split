import tButton from './base/button'
import tCell from './base/cell'
import tDialog from './base/dialog/index.vue'
import tFlex from './base/flex'
import tGroup from './base/group'
import tHeader from './base/header'
import tInput from './base/input'
import tPage from './base/page'
import tPopup from './base/popup'
import sLogo from './base/symbolLogo'
import tToast from './base/toast/index.vue'
import tActionSheet from './extend/actionSheet'
import tCellInput from './extend/cellInput'
import tFilter from './extend/filter'
import tSelect from './extend/select'
import tSwitch from './extend/switch'
import tTabs from './extend/tabSelect'

const base = () => {
  require('./base/toast/index.js')
  require('./base/dialog/index.js')
  return {
    install (Vue){
      Vue.component('tPage', tPage)
      Vue.component('tHeader', tHeader)
      Vue.component('tFlex', tFlex)
      Vue.component('tGroup', tGroup)
      Vue.component('tCell', tCell)
      Vue.component('sLogo', sLogo)
      Vue.component('tPopup', tPopup)
      Vue.component('tInput', tInput)
      Vue.component('tButton', tButton)
    }
  }
}

export default base()

export {
  tButton,
  tCell,
  tDialog,
  tFlex,
  tGroup,
  tHeader,
  tInput,
  tPage,
  tPopup,
  sLogo,
  tToast,
  tActionSheet,
  tCellInput,
  tFilter,
  tSelect,
  tSwitch,
  tTabs
}