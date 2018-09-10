<template>
  <t-page ref="page">
    <t-header slot="top">input</t-header>
    <div>
      <t-group title="input基础用法">
        <div class="inputBody">
          <t-input v-model="input1" class="input" placeholder="使用系统键盘输入框"></t-input>
          <t-input v-model="input1" keyBoardType="native" class="input" placeholder="使用扩展键盘输入框"></t-input>
        </div>
      </t-group>
      <t-group title="密码键盘">
        <div class="inputBody">
          <t-input v-model="input1" type="password" class="input" placeholder="使用系统键盘输入框"></t-input>
          <t-input v-model="input1" type="password" keyBoardType="native" class="input" placeholder="使用扩展键盘输入框"></t-input>
        </div>
      </t-group>
      <t-group title="数字类型">
        <div class="inputBody">
          <t-input v-model="input2" type="number" class="input" placeholder="使用系统键盘输入框"></t-input>
          <t-input v-model="input2" type="number" keyBoardType="native" class="input" placeholder="使用扩展键盘输入框"></t-input>
        </div>
      </t-group>
      <t-group title="身份证输入框">
        <div class="inputBody">
          <t-input v-model="input3" type="IDCard" maxlength="18" class="input" placeholder="使用系统键盘输入框"></t-input>
          <t-input v-model="input3" type="IDCard" maxlength="18" keyBoardType="native" class="input" placeholder="使用扩展键盘输入框"></t-input>
        </div>
      </t-group>
      <t-group title="靠右对齐">
        <div class="inputBody">
          <t-input v-model="input1" textAlign="right" class="input" placeholder="使用系统键盘输入框"></t-input>
          <t-input v-model="input1" textAlign="right" keyBoardType="native" class="input" placeholder="使用扩展键盘输入框"></t-input>
        </div>
      </t-group>
    </div>
  </t-page>
</template>
<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: ''
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
<style lang="scss" scoped>
.inputBody{
  background-color: white;
}
.input{
  height: 1.04rem;
  margin: 0px .3rem;
}
</style>
