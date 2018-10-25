<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">基础</t-header>
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
        //   name: '颜色',
        //   msg: 'Color',
        //   url: '/base/color'
        // },{
        //   name: '图标',
        //   msg: 'Icon',
        //   url: '/base/icon'
        // },{
        //   name: '字体',
        //   msg: 'Font',
        //   url: '/base/font'
        // },{
          name: '按钮',
          msg: 'Button',
          url: '/demo/button'
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
