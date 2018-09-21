<template>
  <div class="T_tabSelect">
    <div class="T_tabSelect_warp" :style="`left: ${scrollX}px`">
      <div @click="click(item)" v-for="(item, index) in tabs" :key="index" :ref="value === item.value ? 'choiced': ''" class="T_tabSelect_item" :class="{'T_tabSelect_choiced': value === item.value}">{{item.key}}</div>
      <div class="T_tabSelect_bar" :style="width + left"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      left: '',
      width: '',
      scrollX: 0
    }
  },
  props: {
    tabs: Array,
    value: String
  },
  watch: {
    value: {
      handler () {
        this.$nextTick(() => {
          let el = this.$refs.choiced[0]
          this.width = `width: ${el.clientWidth}px;`
          this.left = `left: ${el.offsetLeft}px;`
          let warpWidth = el.parentElement.clientWidth
          let windowWidth = el.parentElement.parentElement.clientWidth
          let scrollX = -(el.offsetLeft + el.clientWidth/2) + windowWidth/2
          this.scrollX = scrollX > 0 ? 0 : scrollX < -warpWidth + windowWidth ? -warpWidth + windowWidth : scrollX
        })
      },
      immediate: true
    }
  },
  methods: {
    click (e) {
      this.$emit('input', e.value)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@s/vars.scss';
.T_tabSelect{
  position: relative;
  height: .88rem;
  overflow: hidden;
  width: 100%;
  &_warp{
    height: .88rem;
    white-space: nowrap;
    display: -webkit-box;
    position: absolute;
    transition: all .5s;
    min-width: 100%;
  }
  &_item{
    margin: 0px .4rem;
    color: #999;
    font-size: .36rem;
    height: .88rem;
    line-height: .88rem;
  }
  &_choiced{
    color: #333;
  }
  &_bar{
    position: absolute;
    height: .04rem;
    background-color: $color-cm;
    bottom: 0px;
    transition: all .5s;
  }
}
</style>
