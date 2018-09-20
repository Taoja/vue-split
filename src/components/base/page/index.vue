<template>
  <div class="main">
    <div class="page">
      <slot class="top" name="top"></slot>
      <div class="middle" ref="middle">
        <slot></slot>
      </div>
      <slot class="bottom" name="bottom"></slot>
    </div>
    <div class="extend" :style="'height:' + options.extendHeight"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scroll: ''
    }
  },
  props: {
    options: {
      type: Object,
      default () {
        return {
          extendHeight: '0px',
          nativeScroll: true
        }
      }
    }
  },
  watch: {
    options () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  methods: {
    scrollTo () {
      var arg = arguments
      this.$nextTick(() => {
        this.scroll.refresh()
        this.scroll.scrollToElement(...arg)
      })
    }
  },
  mounted () {
    if (!this.options.nativeScroll) {
      this.scroll = new BScroll(this.$refs.middle,{
        scrollY: true,
        click: true,
        // bounce: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  flex-flow: column;
  align-items: stretch;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: inherit;
  >.page{
    flex: 1 0 1px;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    >.top{
      flex: 0 1 auto;
    }
    >.middle{
      flex: 1 0 1px;
      overflow: auto;
    }
    >.bottom{
      flex: 0 1 auto;
    }
  }
  >.extend{
    flex: 0 1 auto;
    // background-color: white;
    // transition: all .2s;
  }
}
</style>
