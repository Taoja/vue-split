<template>
  <div v-show="bodyShow" class="popupBody" :style="`align-items: ${popup.position}`">
    <transition
    enter-active-class="animated fadeIn faster"
    leave-active-class="animated fadeOut faster"
    @after-leave="afterLeave"
    >
      <div class="v-mask" v-if="value && mask.showMask" @click="maskClick" :style="'background-color:' + (multi ? 'transparent' : mask.bgColor)"></div>
    </transition>
    <transition
    :enter-active-class="popup.enter"
    :leave-active-class="popup.leave"
    >
      <div class="popup" v-if="value" :style="'background-color:' + popup.bgColor">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
// window._popupEvent || (window._popupEvent = new Event('popupHide'))
// window._popupList || (window._popupList = [])
export default {
  data () {
    return {
      multi: false,
      bodyShow: false
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
          bgColor: 'white',
          enter: 'animated slideInUp faster',
          leave: 'animated slideOutDown faster',
          position: 'flex-end'
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
    afterLeave () {
      this.bodyShow = false
      this.$emit('afterLeave')
    },
    maskClick () {
      if (this.mask.clickHide) {
        this.hide()
      }
    },
    hide () {
      this.value = false
      this.$emit('onHide')
      // App.off('popupHide', this.hide)
    },
    show () {
      // if (_popupList.includes(this)) {
      //   _popupList.pop()
      // } else {
      //   _popupList.length > 0 && _popupList[_popupList.length - 1].$emit('input', false)
      //   _popupList.push(this)
      // }
      // App.on('popupHide', this.hide)
      this.bodyShow = true
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
.popupBody{
  // position: absolute;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
.popup{
  position: relative;
  width: 100%;
  transition-duration: 0.1s !important;
  z-index: 3;
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
  z-index: 2;
}
</style>
