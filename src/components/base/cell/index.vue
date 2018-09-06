<template>
  <div class="cell" @click="click" :class="{'beclick' : beclick}">
    <div class="cellBody">
      <div class="left">
        <slot name="left">
          <div class="icon">
            <slot name="icon"></slot>
          </div>
          <div class="title">
            <div class="h1">{{title}}</div>
            <div class="h2" v-if="tips">{{tips}}</div>
          </div>
        </slot>
      </div>
      <div class="right">
        <div class="value">
          <slot></slot>
        </div>
        <div v-if="isLink !== undefined" class="icon">
          <i class="iconfont icon-list_icon_path-"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      beclick: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    tips: {
      type: String,
      default: ''
    },
    isLink: ''
  },
  methods: {
    click (e) {
      if (this.isLink !== undefined && !this.beclick) {
        this.beclick = true
        setTimeout(() => {
          this.$emit('click', e)
          this.beclick = false
        }, 100)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@s/mixin.scss';
.cell{
  height: 1.04rem;
  background-color: white;
  >.cellBody{
    margin-left: .3rem;
    display: flex;
    justify-content: space-between;
    height: 100%;
    @include border;
    >.left{
      flex: 0 1 auto;
      height: 100%;
      margin-right: .32rem;
      display: flex;
      align-items: center;
      .title{
        display: flex;
        flex-flow: column;
        align-items: stretch;
        justify-content: space-around;
        height: 100%;
      }
    }
    >.right{
      flex: 1 0 1px;
      display: flex;
      align-items: stretch;
      justify-content: flex-end;
      line-height: 1.04rem;
      margin-right: .3rem;
      @include ellipsis;
      >.value{
        color: #8f8f8f;
        font-size: .32rem;
      }
      >.icon{
        color: #ccc;
        margin-left: .24rem;
      }
    }
  }
}
.h1{
  font-size: .32rem;
  color: #222;
}
.h2{
  font-size: .28rem;
  color: #8f8f8f;
}
.iconfont{
  display: block;
}
.beclick {
  background-color: #e6e6e6;
}
</style>

