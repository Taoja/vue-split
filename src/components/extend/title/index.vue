<template>
  <div class="T_title t_vars">
    <div class="T_title_title">{{options.title}}</div>
    <div class="T_title_btn" @click="click" :style="`color: ${options.color}`">
      <div v-if="options.text">{{options.text}}</div>
      <div v-else><i class="iconfont" :class="options.icon"></i></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      default: {}
    }
  },
  methods: {
    click () {
      this.$emit('click', this.options)
    }
  }
}
</script>
<style>
.T_title{
  height: .88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px .3rem;
  background-color: white;
}
.T_title_title{
  font-size: var(--font-h2);
  color: var(--font-color-t1);
  font-weight: bold;
}
</style>
