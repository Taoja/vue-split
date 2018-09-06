<template>
  <t-page ref="page">
    <t-header slot="top">演示</t-header>
    <div>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('flex')">Flex</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('header')">Header</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('cell')">Group&Cell</t-flex>
      </t-flex>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('actionSheet')">actionSheet</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('toast')">toast</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('dialog')">dialog</t-flex>
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
