<template>
  <div class="T_card t_vars" @click="click">
    <div class="T_card_left">
      <img :src="options.pic" alt="">
    </div>
    <div class="T_card_right">
      <div class="T_card_title">{{options.title}}</div>
      <div class="T_card_msg">{{options.msg}}</div>
      <div class="T_card_icon">
        <i class="iconfont" v-for="(item, index) in options.icons" :key="index" :class="item.icon" :style="`color: ${item.color}`"></i>
      </div>
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
.T_card_icon{
  flex: 1;
  display: flex;
  overflow: hidden;
}
.T_card_icon>i{
  font-size: var(--font-t5);
}
.T_card{
  height: 1.5rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: .15rem .3rem;
  background-color: white;
}
.T_card_left{
  flex: 1;
  max-width: 2.34rem;
  border-radius: 3px;
  margin-right: .24rem;
  overflow: hidden;
}
.T_card_left>img{
  width: 100%;
  height: 100%;
  display: block;
}
.T_card_right{
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  justify-content: space-between;
}
.T_card_title{
  font-size: var(--font-h3);
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.T_card_msg{
  font-size: var(--font-h5);
  overflow : hidden;
  text-overflow: ellipsis;
  color: var(--font-color-t3);
}
</style>
