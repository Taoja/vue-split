<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">switch</t-header>
    <div>
      <t-group title="switch基础用法">
        <div class="ml">
          <t-switch v-model="theSwitch"></t-switch>
        </div>
      </t-group>
      <t-group title="与cell组合使用">
        <t-cell title="标题文字">
          <t-switch v-model="theSwitch"></t-switch>
        </t-cell>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import {tSwitch} from 'components'
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
.ml{
  margin-left: .3rem;
}
</style>
