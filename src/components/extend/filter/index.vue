<!-- tab筛选项 -->
<!-- @author 黄武韬-->
<!-- @prop tabs [Array] 按钮配置数组-->
<!-- @event click 返回按钮状态对象 -->
<!-- @example 
  <tab-filter 
    :tabs="[{
      key: '价格',
      value: 'price'
    },{
      key: '销量',
      value: 'sold'
    }]"
    @tabClick="(e) => {console.log(e)}">
  </tab-filter> 
  {price: "none", sold: "up"}
  -->
<template>
  <div class="t_filter t_vars">
    <div class="t_filter_item" :key="index" v-for="(item, index) in opt" :class="[item.status, {'t_filter_click': item.click}]" @click="click(index)">{{item.key}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      opt: []
    }
  },
  computed: {
    result () {
      return this.opt.map(a => {
        return a.status
      })
    }
  },
  methods: {
    click (e) {
      this.opt.forEach(a => {
        a.click = false
      })
      this.opt[e].click = true
      this.opt[e].status = this.opt[e].status === 'up' ? 'down' : 'up'
      this.$emit('click', this.result)
    }
  },
  props: {
    tabs: Array
  },
  mounted () {
    this.opt = this.tabs.map(x => {
      return Object.assign({
        status : 'none',
        click: false
      }, x)
    })
  }
}
</script>
<style>
@import '../../css/vars.css';
.t_filter{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: var(--header-shadow);
  height: var(--header-height);
}
.t_filter_item{
  flex: 1 1 1px;
  font-size: .28rem;
  color: #666;
  line-height: initial;
  display: flex;
  align-items: center;
  justify-content: center;
}
.t_filter_item::after{
  content: "";
  background-size: 100% 100%;
  width: 0.1rem;
  height: 0.2rem;
  margin-left: .16rem;
  display: block;
  line-height: initial;
}
.t_filter_click{
  color: var(--color-cm);
}
.t_filter_item.none::after{
  background-image: url('../../image/tab_icon_normal_normal@2x.png');
}
.t_filter_item.up::after{
  background-image: url('../../image/tab_icon_up_normal@2x.png');
}
.t_filter_item.down::after{
  background-image: url('../../image/tab_icon_down_normal@2x.png');
}
</style>
