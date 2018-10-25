<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">cellInput</t-header>
    <div>
      <t-group title="基础用法">
        <t-cell-input v-model="input1" placeholder="基本用法" title="系统输入框"></t-cell-input>
        <t-cell-input v-model="input1" keyBoardType="native" placeholder="基本用法" title="原生输入框"></t-cell-input>
      </t-group>
      <t-group title="title超长">
        <t-cell-input v-model="input1" placeholder="基本用法" title="系统输入框系统输入框系统输入框"></t-cell-input>
        <t-cell-input v-model="input1" keyBoardType="native" placeholder="基本用法" title="原生输入框原生输入框原生输入框"></t-cell-input>
      </t-group>
      <t-group title="无标题输入框">
        <t-cell-input v-model="input1" placeholder="基本用法" ></t-cell-input>
        <t-cell-input v-model="input1" keyBoardType="native" placeholder="基本用法"></t-cell-input>
      </t-group>
      <t-group title="不可编辑&禁用">
        <t-cell-input title="系统输入框不可编辑" readonly v-model="input2" placeholder="基本用法" ></t-cell-input>
        <t-cell-input title="原生输入框不可编辑" readonly v-model="input2" keyBoardType="native" placeholder="基本用法"></t-cell-input>
        <t-cell-input title="系统输入框禁用" disable v-model="input2" placeholder="基本用法" ></t-cell-input>
        <t-cell-input title="原生输入框禁用" disable v-model="input2" keyBoardType="native" placeholder="基本用法"></t-cell-input>
      </t-group>
      <t-group title="右侧扩展">
        <t-cell-input v-model="input1" placeholder="基本用法" title="系统输入框">
          <i class="iconfont icon-daozhang"></i>
        </t-cell-input>
        <t-cell-input v-model="input1" keyBoardType="native" placeholder="基本用法" title="原生输入框">
          <i class="iconfont icon-daozhang"></i>
        </t-cell-input>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import {tCellInput} from 'components'
export default {
  data () {
    return {
      input1: '',
      input2: '123'
    }
  },
  components: {
    tCellInput
  }
}
</script>

<style lang="scss" scoped>
</style>
