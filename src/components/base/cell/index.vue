<template>
  <div class="cell">
    <div class="left">
      <slot name="cellLeft">
        <div class="icon"></div>
        <div class="title">
          <div>{{title}}</div>
          <div></div>
        </div>
      </slot>
    </div>
    <div class="right">
      <slot>
        <div></div>
      </slot>
    </div>
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
.cell{
  height: 1.04rem;
  line-height: 1.04rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
  >.left{
    flex: 0 1 auto;
  }
  >.right{
    flex: 1 0 1px;
  }
}
</style>

