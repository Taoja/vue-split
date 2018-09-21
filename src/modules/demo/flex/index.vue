<template>
  <t-page ref="page">
    <t-header slot="top"><div @click="titleClick">flex</div></t-header>
    <div>
      <t-group title="横向排列">
        <t-flex>
          <t-flex flex="1" class="a1">1</t-flex>
          <t-flex flex="1" class="a2">2</t-flex>
          <t-flex flex="1" class="a3">3</t-flex>
        </t-flex>
      </t-group>
      <t-group title="分割长度">
        <t-flex>
          <t-flex flex="1" class="a1">1</t-flex>
          <t-flex flex="3" class="a2">2</t-flex>
          <t-flex flex="1" class="a3">3</t-flex>
        </t-flex>
      </t-group>
      <t-group title="固定宽度与自适应宽度">
        <t-flex>
          <t-flex class="a1">被内容撑开</t-flex>
          <t-flex flex="1" class="a2">自适应剩余宽度</t-flex>
          <t-flex class="a1">被内容撑开</t-flex>
        </t-flex>
      </t-group>
      <t-group title="垂直对齐方式">
        <t-flex align="start" class="margin">
          <t-flex flex="1" class="a1">顶端对齐</t-flex>
          <t-flex flex="10" class="a2">1</t-flex>
        </t-flex>
        <t-flex align="center" class="margin">
          <t-flex flex="1" class="a1">居中对齐</t-flex>
          <t-flex flex="10" class="a2">1</t-flex>
        </t-flex>
        <t-flex align="end" class="margin">
          <t-flex flex="1" class="a1">底端对齐</t-flex>
          <t-flex flex="10" class="a2">1</t-flex>
        </t-flex>
        <t-flex class="margin">
          <t-flex flex="1" class="a1">默认对齐方式stretch</t-flex>
          <t-flex flex="10" class="a2">1</t-flex>
        </t-flex>
      </t-group>
      <t-group title="水平对齐方式">
        <t-flex class="margin">
          <t-flex class="a1">默认顶端对齐</t-flex>
          <t-flex class="a2">1</t-flex>
        </t-flex>
        <t-flex justify="center" class="margin">
          <t-flex class="a1">居中对齐</t-flex>
          <t-flex class="a2">1</t-flex>
        </t-flex>
        <t-flex justify="end" class="margin">
          <t-flex class="a1">底端对齐</t-flex>
          <t-flex class="a2">1</t-flex>
        </t-flex>
        <t-flex justify="between" class="margin">
          <t-flex class="a1">两端对齐</t-flex>
          <t-flex class="a2">1</t-flex>
        </t-flex>
        <t-flex justify="around" class="margin">
          <t-flex class="a1">环绕对齐</t-flex>
          <t-flex class="a2">1</t-flex>
        </t-flex>
      </t-group>
      <t-group title="纵向排列">
        <t-flex direction="column" align="stretch">
          <t-flex class="a1">1</t-flex>
          <t-flex class="a2">2</t-flex>
          <t-flex class="a3">3</t-flex>
        </t-flex>
      </t-group>
      <t-group title="分割高度">
        <t-flex direction="column" align="stretch" class="height">
          <t-flex flex="1" class="a1">1</t-flex>
          <t-flex flex="3" class="a2">2</t-flex>
          <t-flex flex="1" class="a3">3</t-flex>
        </t-flex>
      </t-group>
      <t-group title="固定高度与自适应高度">
        <t-flex direction="column" align="stretch" class="height">
          <t-flex class="a1">1</t-flex>
          <t-flex flex="1" class="a2">2</t-flex>
          <t-flex class="a3">3</t-flex>
        </t-flex>
      </t-group>
    </div>
  </t-page>
</template>
<script>
export default {
  methods: {
    titleClick () {
      this.$router.push('orange')
    }
  }
}
</script>

<style lang="scss" scoped>
.a1{
  background-color: #e6e6e6;
}
.a2{
  background-color: white;
}
.a3{
  background-color: #e6e6e6;
}
.margin{
  margin: .2rem 0px;
}
.height{
  height: 100px;
}
</style>
