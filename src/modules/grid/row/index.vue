<template>
  <t-page ref="page">
    <t-header slot="top">carousel</t-header>
    <div>
      <t-group title="基础用法">
        <t-row
        :data="data"
        >
        </t-row>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import {tRow} from '@c'
export default {
  data () {
    return {
      data: [
        {
          pic: require('@a/image/row/1.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/row/1.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/row/1.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/row/1.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/row/1.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        }
      ]
    }
  },
  components: {
    tRow
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
