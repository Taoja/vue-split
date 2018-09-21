<template>
  <div class="t_grid">
    <div class="t_grid_item" v-for="(item, index) in data" :key="index" @click="click(item)">
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
.t_grid{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.t_grid_item>img{
  width: 100%;
  display: block;
}
.t_grid_item{
  flex: 1;
}
</style>
