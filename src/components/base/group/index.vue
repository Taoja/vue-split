<template>
  <div class="group">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@s/vars.scss';
@import '@s/mixin.scss';
.title{
  color: $color-font-third;
  font-size: $font-h4;
  padding: $group-padding;
}
</style>

