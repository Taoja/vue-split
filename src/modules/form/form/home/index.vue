<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">表单</t-header>
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
          name: '输入框',
          msg: 'Input',
          url: '/demo/demo/input'
        },{
          name: '块输入框',
          msg: 'CellInput',
          url: '/demo/demo/cellInput'
        }
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
