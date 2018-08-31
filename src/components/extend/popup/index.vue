<template>
  <div>
    <div class="v-mask" v-if="value && mask.showMask" @click="maskClick" :style="'background-color:' + (multi ? 'transparent' : mask.bgColor)"></div>
    <transition
    :enter-active-class="enter"
    :leave-active-class="leave"
    >
      <div class="popup" v-if="value" :style="'background-color:' + popup.bgColor">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
window._popupEvent || (window._popupEvent = new Event('popupHide'))
// window._popupList || (window._popupList = [])
export default {
  data () {
    return {
      enter: 'animated slideInUp faster',
      leave: 'animated slideOutDown faster',
      multi: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Object,
      default () {
        return {
          bgColor: 'rgba(0, 0, 0, 0.2)',
          showMask: true,
          clickHide: true,
          animate: {
            enter: 'animated fadeIn faster',
            leave: 'animated fadeOut faster'
          }
        }
      }
    },
    popup: {
      type: Object,
      default () {
        return {
          bgColor: 'white'
        }
      }
    }
  },
  watch: {
    value (e) {
      if (e) {
        this.show()
      }
    }
  },
  methods: {
    maskClick () {
      if (this.mask.clickHide) {
        // _popupList = []
        App.dispatch(_popupEvent)
      }
    },
    hide () {
      this.hasMask = false
      this.$emit('input', false)
      this.$emit('onHide')
      App.off('popupHide', this.hide)
    },
    show () {
      // if (_popupList.includes(this)) {
      //   _popupList.pop()
      // } else {
      //   _popupList.length > 0 && _popupList[_popupList.length - 1].$emit('input', false)
      //   _popupList.push(this)
      // }
      App.on('popupHide', this.hide)
      this.$emit('onShow')
    },
    back () {
      // if (_popupList.length > 1) {
      //   var target = _popupList[_popupList.length - 2]
      //   _popupList[_popupList.length - 2].enter = 'animated slideInLeft faster'
      //   this.leave = 'animated slideOutRight faster'
      //   this.$nextTick(() => {
      //     _popupList[_popupList.length - 2].$emit('input', true)
      //     this.$emit('input', false)
      //     this.leave = 'animated slideOutDown faster'
      //     _popupList[_popupList.length - 2].enter = 'animated slideInUp faster'
      //   })
      // } else {
      //   this.$emit('input', false)
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
.popup{
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
  transition-duration: 0.1s !important;
}
.transparent {
  background-color: transparent !important;
}
.v-mask{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
