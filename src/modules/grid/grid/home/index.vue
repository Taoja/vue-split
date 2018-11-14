<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">视图</t-header>
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
          name: '头部',
          msg: 'Header',
          url: '/demo/demo/header'
        },{
          name: '布局',
          msg: 'Flex',
          url: '/demo/demo/flex'
        },{
          name: '块',
          msg: 'Cell',
          url: '/demo/demo/cell'
        },{
          name: '公告',
          msg: 'Notice',
          url: '/grid/grid/notice'
        },{
          name: '卡片',
          msg: 'Card',
          url: '/grid/grid/card'
        },{
          name: '行',
          msg: 'row',
          url: '/grid/grid/row'
        },{
          name: '轮播图',
          msg: 'Carousel',
          url: '/grid/grid/carousel'
        },{
          name: '栏位',
          msg: 'Grid',
          url: '/grid/grid/grid'
        },{
          name: '模板页',
          msg: '',
          url: '/grid/grid/all'
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
.left{
  font-size: .32rem;
  >span{
    color: #999;
    margin-left: p2r(10);
  }
}
</style>
