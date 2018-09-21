<template>
  <t-page ref="page">
    <t-header slot="top">filter</t-header>
    <div>
      <t-group title="基础用法">
        <t-filter
        @click="click"
        :tabs="[{
          key: '价格',
          value: 'price'
        },{
          key: '销量',
          value: 'sold'
        }]"></t-filter>
      </t-group>
      <t-group title="初始化默认筛选">
        <t-filter
        @click="click"
        :tabs="[{
          key: '价格',
          value: 'price',
          status: 'up'
        },{
          key: '销量',
          value: 'sold',
          status: 'down'
        }]"></t-filter>
      </t-group>
      <t-group title="初始化选中">
        <t-filter
        @click="click"
        :tabs="[{
          key: '价格',
          value: 'price',
          status: 'up',
          click: true
        },{
          key: '销量',
          value: 'sold',
          status: 'down'
        }]"></t-filter>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import { tFilter } from 'components'
export default {
  components: {
    tFilter
  },
  data () {
    return {
      filter: ''
    }
  },
  methods: {
    click (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
