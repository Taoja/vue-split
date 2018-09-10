<template>
  <t-page ref="page">
    <t-header slot="top">button</t-header>
    <div class="pd">
      <t-group title="normal按钮">
        <t-button class="top">主按钮</t-button>
        <t-button class="top" plain=true>主色反按钮</t-button>
      </t-group>
      <t-group title="small按钮">
        <t-button class="top" size="small">主按钮</t-button>
        <t-button class="top" size="small" plain=true>主色反按钮</t-button>
      </t-group>
      <t-group title="tiny按钮">
        <t-button class="top" size="tiny">主按钮</t-button>
        <t-button class="top" size="tiny" plain=true>主色反按钮</t-button>
      </t-group>
      <t-group title="不可点击按钮">
        <t-button class="top" disable=true>按钮</t-button>
        <t-button class="top" plain=true disable=true>反按钮</t-button>
        <t-button class="top" size="small" disable=true>主按钮</t-button>
        <t-button class="top" size="small" disable=true plain=true>主色反按钮</t-button>
        <t-button class="top" size="tiny" disable=true>主按钮</t-button>
        <t-button class="top" size="tiny" disable=true plain=true>主色反按钮</t-button>
      </t-group>
      <t-group title="自定义颜色按钮">
        <t-button class="top" :color="{main: '#e0bf70', plain: '#fff'}">按钮</t-button>
        <t-button class="top" :color="{main: '#e0bf70', plain: '#fff'}" plain=true>反按钮</t-button>
      </t-group>
    </div>
  </t-page>
</template>
<script>
export default {
 
}
</script>

<style lang="scss" scoped>
@import '@s/vars.scss';
.top{
  margin: $cell-margin auto;
}
.pd{
  margin: 0px .3rem;
}
</style>
