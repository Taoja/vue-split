<template>
  <t-page ref="page">
    <t-header slot="top">switch</t-header>
    <div>
      <t-group title="switch基础用法">
        <div>
          <t-switch v-model="theSwitch"></t-switch>
        </div>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import tSwitch from '@c/extend/switch'
export default {
  components: {
    tSwitch
  },
  data () {
    return {
      theSwitch: false
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
</style>
