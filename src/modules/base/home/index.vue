<template>
  <t-page ref="page">
    <t-header slot="top">演示</t-header>
    <div>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('demo_flex')">Flex</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('demo_header')">Header</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('demo_cell')">Group&Cell</t-flex>
      </t-flex>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('demo_actionSheet')">actionSheet</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('demo_toast')">toast</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('demo_dialog')">dialog</t-flex>
      </t-flex>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('demo_input')">input</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('demo_cellInput')">cellInput</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('demo_button')">button</t-flex>
      </t-flex>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('demo_switch')">switch</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('demo_tabSelect')">tabs</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('demo_button')">button</t-flex>
      </t-flex>
    </div>
  </t-page>
</template>
<script>
export default {
  methods: {
    go (e) {
      this.$router.push(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  height: 2.04rem;
}
.a1{
  background-color: #e6e6e6;
}
.a2{
  background-color: white;
}
</style>
