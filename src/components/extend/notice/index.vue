<template>
  <div class="T_notice t_vars" :style="`padding: ${options.padding}`">
    <div class="T_notice_title">
      <span v-for="(item, index) in options.title" :key="index">
        <span v-if="item.text" :style="`color: ${item.color}`">{{item.text}}</span>
        <span v-if="item.icon" :style="`color: ${item.color}`" class="iconfont" :class="item.icon"></span>
        <img class="T_notice_pic" v-if="item.pic" :style="`width: ${item.width}`" :src="item.pic" />
      </span>
    </div>
    <div class="T_notice_body">
      <transition
      enter-active-class="faster animated slideInUp"
      leave-active-class="faster animated slideOutUp"
      >
        <div class="T_notice_item" v-if="index === activeIndex" v-for="(item, index) in data" :key="index" @click="click(item)">
          <span class="T_notice_txt">{{item.text}}</span>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      config: {
        delay: 3000
      },
      activeIndex: 0
    }
  },
  computed: {
    activeNotice () {
      return this.data[this.activeIndex]
    }
  },
  props: {
    options: {
      type: Object,
      default: {}
    },
    data: {
      type: Array,
      default: []
    }
  },
  mounted () {
    this.config = Object.assign(this.config, this.options)
    this.loop()
  },
  methods: {
    loop () {
      this.activeIndex = this.activeIndex === this.data.length - 1 ? 0 : this.activeIndex + 1
      setTimeout(() => {
        this.loop()
      }, this.config.delay)
    },
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style>
.T_notice_pic{
  display: inline;
}
.T_notice{
  height: .88rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0px .3rem;
  background-color: white;
}
.T_notice_title{
  margin-right: .24rem;
  font-size: var(--font-h3);
  display: flex;
  align-items: center;
}
.T_notice_title>span{
  display: flex;
  align-items: center;
}
.T_notice_body{
  flex: 1;
  overflow: hidden;
  position: relative;
}
.T_notice_item{
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
}
.T_notice_txt{
  font-size: var(--font-h4);
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

