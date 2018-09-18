<template>
  <div class="T_row">
    <div class="T_row_item" v-for="(item, index) in data" :key="index" @click="click(item)">
      <img :src="item.pic" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style>
.T_row{
  display: -webkit-box;
  overflow: auto;
}
</style>
