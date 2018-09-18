<template>
  <t-page ref="page">
    <t-header slot="top">card</t-header>
    <div>
      <t-group title="基础用法">
        <t-card
        :options="data"
        >
        </t-card>
        <t-card
        :options="data"
        >
        </t-card>
        <t-card
        :options="data"
        >
        </t-card>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import {tCard} from '@c'
export default {
  data () {
    return {
      data: {
        pic: require('@a/image/card/1.png'),
        title: '【赛马娘/误解向MAD】白色马厩 Pretty Day',
        msg: '9528次观看·315弹幕',
        icons: [
          {
            icon: 'icon-Qa_linear_blue',
            color: '#cc162c'
          }
        ]
      }
    }
  },
  components: {
    tCard
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
</style>
