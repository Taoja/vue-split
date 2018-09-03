<template>
  <t-page ref="page">
    <t-header slot="top">Group&Cell</t-header>
    <div>
      <t-group title="基础用法">
        <t-cell title="基础用法"></t-cell>
      </t-group>
    </div>
  </t-page>
</template>
<script>
export default {
  methods: {
    titleClick () {
      this.$router.push('orange')
    },
    leftClick (e) {
      alert('自定义按钮点击' + e)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
