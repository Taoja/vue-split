<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">tabSelect</t-header>
    <div>
      <t-group title="tabSelect基础用法">
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
      </t-group>
      <t-group title="与header组合用法">
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
    </div>
  </t-page>
</template>
<script>
import {tTabs} from 'components'
export default {
  data () {
    return {
      tabSelectValue: 'ball1'
    }
  },
  components: {
    tTabs
  }
}
</script>
