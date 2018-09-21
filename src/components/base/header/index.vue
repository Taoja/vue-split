<template>
  <div class="header">
    <div class="left">
      <slot name="left">
        <i class="iconfont" @click="leftClick(index)" v-for="(item, index) in leftOptions" :key="index" :class="[item.icon]">{{item.icon ? '' : item.text}}</i>
      </slot>
    </div>
    <div class="middle">
      <slot>
        <div>{{title}}</div>
      </slot>
    </div>
    <div class="right">
      <slot name="right">
        <i class="iconfont" @click="rightClick(index)" v-for="(item, index) in rightOptions" :key="index" :class="[item.icon]">{{item.icon ? '' : item.text}}</i>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    leftOptions: {
      type: Array,
      default () {
        return [{
          icon: 'icon-icon_back'
        }]
      }
    },
    rightOptions: Array,
    title: String
  },
  methods: {
    leftClick (e) {
      if (this.$listeners.leftClick) {
        this.$emit('leftClick', e)
      } else {
        this.$router.go(-1)
      }
    },
    rightClick (e) {
      if (this.$listeners.rightClick) {
        this.$emit('rightClick', e)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@s/mixin';
.header{
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: #222;
  font-size: 0.34rem;
  z-index: 1;
  @include headShadow;
  >*{
    height: 100%;
  }
  i{
    height: 0.88rem;
    width: 0.88rem;
    text-align: center;
    line-height: 0.88rem;
    display: inline-block;
  }
  >*:nth-child(2) {
    flex: 1;
  }
  >.right{
    min-width: 0.88rem;
  }
  >.middle{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
