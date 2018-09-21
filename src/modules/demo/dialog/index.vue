<template>
  <t-page ref="page">
    <t-header slot="top">dialog</t-header>
    <div>
      <t-group title="dialog基本用法">
        <t-cell title="标题+文字" isLink @click="base({title: '标题', msg: '内容文字'})"></t-cell>
        <t-cell title="纯标题" isLink @click="base({title: '标题'})"></t-cell>
        <t-cell title="纯文字" isLink @click="base({msg: '内容文字'})"></t-cell>
        <t-cell title="自定义按钮" isLink @click="base({title: '标题', msg: '内容文字',okButton: '确认', cancelButton: '取消', extendBtns: [{key: '自定义1', value: '1', color: 'blue'},{key: '自定义2', value: '2', color: 'yellow'}]})"></t-cell>
      </t-group>
      <t-group title="包含图片">
        <t-cell title="标题+文字+图片" isLink @click="base({title: '标题', msg: '内容文字', img: require('@a/image/index/ali.png')})"></t-cell>
        <t-cell title="纯标题+图片" isLink @click="base({title: '标题', img: require('@a/image/index/ali.png')})"></t-cell>
        <t-cell title="纯文字+图片" isLink @click="base({msg: '内容文字', img: require('@a/image/index/ali.png')})"></t-cell>
      </t-group>
      <t-group title="监听按钮回调">
        <t-cell title="自定义按钮" isLink @click="base2({title: '跳转', msg: '跳转至actionSheet',okButton: '确认', cancelButton: '取消', extendBtns: [{key: '自定义1', value: '1', color: 'blue'},{key: '自定义2', value: '2', color: 'yellow'}]})"></t-cell>
      </t-group>
      <t-group title="引入用法">
        <t-cell title="引入用法" isLink @click="dialogSwitch = true"></t-cell>
      </t-group>
      <t-dialog 
      v-model="dialogSwitch"
      :options="{
        title: '引入用法',
        msg: '引入用法',
        okButton: '确认', 
        cancelButton: '取消'
      }"
      :extend="[{key: '自定义1', value: '1', color: 'blue'},{key: '自定义2', value: '2', color: 'yellow'}]"
      @click="$toast">
      </t-dialog>
    </div>
  </t-page>
</template>
<script>
export default {
  data () {
    return {
      dialogSwitch: false
    }
  },
  methods: {
    base (e) {
      this.$dialog(e)
    },
    base2 (e) {
      this.$dialog(e).then((a) => {
        if (a.click) {
          this.$router.push('demo_actionSheet')
        } else {
          this.$toast({
            msg: a
          })
        }
      })
    }
  }
}
</script>
