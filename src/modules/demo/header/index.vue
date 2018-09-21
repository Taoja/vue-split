<template>
  <t-page ref="page">
    <t-header slot="top"><div @click="titleClick">header</div></t-header>
    <div>
      <t-group title="基础用法">
        <t-header title="header"></t-header>
      </t-group>
      <t-group title="自定义title">
        <t-header>
          <t-tabs 
            v-model="tabSelectValue"
            :tabs="[{
              key: '乒乓球',
              value: 'ball1',
            },{
              key: '羽毛球',
              value: 'ball2'
            },{
              key: '哈库拉玛塔塔',
              value: 'ball3'
            },{
              key: '哈库拉玛塔塔',
              value: 'ball4'
            },{
              key: '哈库拉玛塔塔',
              value: 'ball5'
            }]">
          </t-tabs>
        </t-header>
      </t-group>
      <t-group title="自定义按钮样式">
        <t-header 
        :leftOptions="[{icon: 'icon-faceid'}, {icon: 'icon-Qa_linear_grey'}]"
        @leftClick="leftClick">
          自定义左侧按钮
        </t-header>
        <t-header 
        :rightOptions="[{icon: 'icon-faceid'}, {icon: 'icon-Qa_linear_grey'}]"
        @rightClick="leftClick">
          自定义右侧按钮
        </t-header>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import {tTabs} from 'components'
export default {
  data () {
    return {
      tabSelectValue: 'ball1',
    }
  },
  components: {
    tTabs
  },
  methods: {
    titleClick () {
      this.$router.push('orange')
    },
    leftClick (e) {
      this.$dialog({
        msg: '自定义按钮点击' + e
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
