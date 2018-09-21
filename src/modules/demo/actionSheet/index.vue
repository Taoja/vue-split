<template>
  <t-page ref="page">
    <t-header slot="top">actionSheet&select</t-header>
    <div>
      <t-group title="actionSheet&select">
        <t-cell title="actionSheet" isLink @click="base">{{asSelected.key}}</t-cell>
        <t-cell title="select" isLink @click="base2">{{asSelected.key}}</t-cell>
      </t-group>
    </div>
    <t-action-sheet 
    v-model="as1"
    title="actionSheet"
    :data="asData"
    @click="as1Click"
    :selected="asSelected.value"
    ></t-action-sheet>
    <t-select
    v-model="selectSwitch"
    title="select"
    :data="asData"
    @click="as1Click"
    :selected="asSelected.value"
    button="使用新卡支付"
    @btnClick="btnClick">
    </t-select>
  </t-page>
</template>
<script>
import { tActionSheet , tSelect} from 'components'
export default {
  components: {
    tActionSheet,
    tSelect
  },
  data () {
    return {
      selectSwitch: false,
      as1: false,
      asData: [
        {
          key: '广发银行信用卡',
          value: '1',
          iconType: 'CGB',
          other: {a:1, b:2}
        },
        {
          key: '中国银行信用卡',
          value: '2',
          iconType: 'BOC',
          other: {a:2, b:1}
        }
      ],
      asSelected: {
        key: '广发银行信用卡',
        value: '1',
        iconType: 'CGB',
        other: {a:1, b:2}
      }
    }
  },
  methods: {
    go (e) {
      App.Native.pushWindow({
        url: e
      })
    },
    base () {
      this.as1 = true
    },
    base2 () {
      this.selectSwitch = true
    },
    as1Click (item) {
      this.asSelected = item
      console.log(item)
    },
    btnClick () {
      console.log('button')
    }
  }
}
</script>
