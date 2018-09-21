<template>
  <transition
    enter-active-class="animated fadeIn faster"
    leave-active-class="animated fadeOut faster"
    @after-enter="entry"
    @after-leave="close"
    >
    <div class="toast-bg" v-show="toastSwitch">
      <div class="toast-body">
        <div class="toast-icon" v-if="icon"><i class="iconfont" :class="icon" :style="'color:' + iconColor"></i></div>
        <div class="toast-image" v-if="!icon && image"><img :src="image"></div>
        <div class="toast-msg" v-if="msg">{{msg}}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      toastSwitch: false
    }
  },
  props: {
    msg: String,
    icon: String,
    iconColor: {
      type: String,
      default: 'white'
    },
    image: String,
    value: false,
    duration: Number
  },
  watch: {
    value: {
      handler (e) {
        setTimeout(() => {
          this.toastSwitch = e
        },10)
      },
      immediate: true
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
      this.$emit('close')
    },
    entry () {
      if (this.duration) {
        setTimeout(() => {
          this.close()
        },this.duration)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.toast-bg{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  >.toast-body{
    padding: .4rem;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    >.toast-icon,>.toast-image{
      line-height: initial;
      width: .8rem;
      height: .8rem;
      >img{
        width: 100%;
        height: 100%;
        display: block;
      }
      >i{
        font-size: .8rem;
      }
      text-align: center;
      margin: auto;
    }
    >.toast-icon + .toast-msg{
      margin-top: .24rem;
    }
    >.toast-image + .toast-msg{
      margin-top: .24rem;
    }
    >.toast-msg{
      text-align: center;
      font-size: .32rem;
      color: white;
    }
  }
}
</style>
