<!-- dialog -->
<!-- @author 黄武韬-->
<!-- @prop title [string] 标题，为空不展示 -->
<!-- @prop msg [string] 介绍信息，为空不展示 -->
<!-- @prop img [string] 展示的图片地址，需先require -->
<!-- @prop okButton [string] 确认按钮文案，默认'确认' -->
<!-- @prop cancelButton [string] 取消按钮文案,为空不展示 -->
<!-- @prop extendBtns [Array] 扩展按钮文案及点击返回值，为空不展示 -->
<!-- @return [Promise] 确认按钮返回true，取消按钮返回false -->
<template>
  <t-popup
    :value="value"
    @afterLeave="hide"
    :popup="{
      enter: 'animated fadeIn faster',
      leave: 'animated fadeOut faster',
      position: 'center'
    }"
  >
    <div class="box">
      <div class="pad">
        <div class="title" v-if="options.title">{{options.title}}</div>
        <div class="msg" v-if="options.msg">{{options.msg}}</div>
        <div class="msg" :style="options.msgHtml.color && ('color:' + options.msgHtml.color)" v-if="options.msgHtml" v-html="options.msgHtml.msg" @click="options.msgHtml.click"></div>
        <div class="img" v-if="options.img"><img :src="options.img"></div>
      </div>
      <div class="btns" @click="click">
        <div class="cancel" v-if="options.cancelButton">{{options.cancelButton}}</div>
        <div class="submit">{{options.okButton}}</div>
      </div>
      <div class="eb" @click="click">
        <div class="extendBtns" :style="item.color && ('color:' + item.color)" v-if="extend.length !== 0" :data-back="item.value" :key="index" v-for="(item, index) in extend">{{item.key}}</div>
      </div>
    </div>
  </t-popup>
</template>

<script>
export default {
  props: {
    value: Boolean,
    options: {
      default () {
        return {
          title: '小发提醒',
          msg: '',
          msgHtml: {},
          zIndex: null,
          img: '',
          okButton: '确认',
          cancelButton: '',
        }
      }
    },
    extend: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    click (e) {
      this.$emit('click',e)
      this.value = false
    },
    hide () {
      this.$emit('input', false)
      this.$emit('hide')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@s/functions.scss';
@import '@s/vars.scss';
  .box{
    background-color: white;
    border-radius: 5px;
    width: p2r(590);
    margin: auto;
    padding-top: p2r(40);
    .pad{
      margin: 0px p2r(30);
    }
    .img{
      margin-top: p2r(9, 1);
      img{
        width: 100%;
        display: block;
      }
    }
    .title{
      font-size: p2r(36);
      color: $font-color-t1;
      font-weight: bold;
      text-align: center;
      margin-top: p2r(24);
    }
    .msg{
      font-size: $font-h3;
      color: $font-color-t2;
      text-align: center;
      padding: 0px p2r(20);
      margin-top: p2r(24);
    }
    >.btns{
      border-top: 1px solid $line-color;
      margin-top: p2r(64);
      position: relative;
      height: p2r(96);
      line-height: p2r(96);
      display: flex;
      justify-content: space-between;
      >div{
        width: 100%;
        text-align: center;
        font-size: $font-h3;
      }
      >.cancel{
        color: $font-color-t2;
        border-right: 1px solid $line-color;
      }
      >.submit{
        color: $color-cm;
      }
    }
    .extendBtns{
      border-top: 1px solid $line-color;
      height: p2r(96);
      line-height: p2r(96);
      text-align: center;
      font-size: $font-h3;
      color: $font-color-t2;
    }
  }
</style>
