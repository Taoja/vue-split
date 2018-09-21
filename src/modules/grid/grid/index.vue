<template>
  <t-page ref="page">
    <t-header slot="top">grid</t-header>
    <div>
      <t-group title="基础用法">
        <t-grid
        :data="data"
        ></t-grid>
      </t-group>
      <t-group title="单张图片">
        <t-grid
        :data="data2"
        ></t-grid>
      </t-group>
      <t-group title="2张图片">
        <t-grid
        :data="data3"
        ></t-grid>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import {tGrid} from 'components'
export default {
  data () {
    return {
      data: [
        {
          pic: require('@a/image/coupon/couponOrder6.png'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/coupon/couponOrder3.png'),
          linkType: 1,
          link: 'demo_flex'
        },
        {
          pic: require('@a/image/coupon/couponOrder4.png'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/coupon/couponOrder5.png'),
          linkType: 0,
          link: 'http://www.baidu.com'
        }
      ],
      data2: [
        {
          pic: require('@a/image/grid/1.jpg'),
          linkType: 1,
          link: 'demo_flex'
        }
      ],
      data3: [
        {
          pic: require('@a/image/grid/2.png'),
          linkType: 1,
          link: 'demo_flex'
        },{
          pic: require('@a/image/grid/3.png'),
          linkType: 1,
          link: 'demo_flex'
        }
      ]
    }
  },
  components: {
    tGrid
  }
}
</script>

<style lang="scss" scoped>
</style>
