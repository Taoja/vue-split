<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">图表</t-header>
    <div>
      <t-group>
        <t-cell isLink v-for="(item, index) in list" :key="index" @click="go(item.url)">
          <div slot="left" class="left">{{item.name}}<span>{{item.msg}}</span></div>
        </t-cell>
      </t-group>
    </div>
  </t-page>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: '折、柱图',
          msg: 'Line & Bar',
          url: '/charts/charts/linebar'
        },{
          name: '饼图',
          msg: 'Pie',
          url: '/charts/charts/pie'
        },{
          name: '漏斗图',
          msg: 'Funnel',
          url: '/charts/charts/funnel'
        },{
          name: 'K线图',
          msg: 'K',
          url: '/charts/charts/k'
        },{
          name: '雷达图',
          msg: 'Radar',
          url: '/charts/charts/radar'
        },{
          name: '树图',
          msg: 'Tree',
          url: '/charts/charts/tree'
        },{
          name: '散点图',
          msg: 'Scatter',
          url: '/charts/charts/scatter'
        },{
          name: '仪表图',
          msg: 'Gauge',
          url: '/charts/charts/gauge'
        },{
          name: '关系图',
          msg: 'Graph',
          url: '/charts/charts/graph'
        },
      ]
    }
  },
  methods: {
    go (e) {
      this.$router.push(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@s/functions.scss';
.icon-explain_lump_blue{
  color: #1296db;
  margin-right: 0.24rem;
}
.left{
  font-size: .32rem;
  >span{
    color: #999;
    margin-left: p2r(10);
  }
}
</style>
