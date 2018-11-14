<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">toast</t-header>
    <div>
      <t-group title="toast基础用法">
        <t-cell title="文字形式" isLink @click="base({msg: '文字形式'})"></t-cell>
        <t-cell title="纯图标" isLink @click="base({icon: 'icon-daozhang'})"></t-cell>
        <t-cell title="纯图片" isLink @click="base({image: require('@a/image/index/ali.png')})"></t-cell>
      </t-group>
      <t-group title="组合用法">
        <t-cell title="文字+图标形式" isLink @click="base({msg: '文字+图标形式', icon: 'icon-daozhang'})"></t-cell>
        <t-cell title="文字+图片形式" isLink @click="base({msg: '文字+图片形式', image: require('@a/image/index/ali.png')})"></t-cell>
      </t-group>
      <t-group title="设置持续时长">
        <t-cell title="默认2秒" isLink @click="base({msg: '文字+图标形式', icon: 'icon-daozhang'})"></t-cell>
        <t-cell title="1秒时长" isLink @click="base({duration: 1000, msg: '文字+图片形式', image: require('@a/image/index/ali.png')})"></t-cell>
      </t-group>
      <t-group title="设置图标颜色">
        <t-cell title="红色" isLink @click="base({icon: 'icon-daozhang', iconColor: 'red'})"></t-cell>
        <t-cell title="绿色" isLink @click="base({msg: '文字+图标形式', icon: 'icon-daozhang', iconColor: 'green'})"></t-cell>
      </t-group>
      <t-group title="loading">
        <t-cell title="打开loading" isLink @click="open">loading将会在3秒后关闭</t-cell>
      </t-group>
      <t-group title="引入用法">
        <t-cell title="引入用法" isLink @click="toastSwitch = true"></t-cell>
      </t-group>
      <t-toast
      v-model="toastSwitch"
      msg="引入用法"
      icon="icon-daozhang"
      :duration="2000">
      </t-toast>
    </div>
  </t-page>
</template>
<script>
export default {
  data () {
    return {
      toastSwitch: false
    }
  },
  methods: {
    base (e) {
      this.$toast(e)
    },
    open () {
      App.showLoading()
      setTimeout(() => {
        App.hideLoading()
      }, 3000)
    }
  }
}
</script>
