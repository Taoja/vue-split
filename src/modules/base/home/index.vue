<template>
  <t-page ref="page">
    <t-header slot="top"><div @click="goTest">演示</div></t-header>
    <div>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('/demo/flex')">Flex</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('/demo/header')">Header</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('/demo/cell')">Group&Cell</t-flex>
      </t-flex>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('/demo/actionSheet')">actionSheet</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('/demo/toast')">toast</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('/demo/dialog')">dialog</t-flex>
      </t-flex>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('/demo/input')">input</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('/demo/cellInput')">cellInput</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('/demo/button')">button</t-flex>
      </t-flex>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('/demo/switch')">switch</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('/demo/tabSelect')">tabs</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('/demo/filter')">filter</t-flex>
      </t-flex>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('/grid/grid')">grid</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('/grid/carousel')">carousel</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('/grid/notice')">notice</t-flex>
      </t-flex>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('/grid/card')">card</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('/grid/row')">row</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('/grid/all')">子栏位演示</t-flex>
      </t-flex>
    </div>
  </t-page>
</template>
<script>
export default {
  methods: {
    go (e) {
      this.$router.push(e)
    },
    goTest () {
      this.$router.push('/test/test')
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
