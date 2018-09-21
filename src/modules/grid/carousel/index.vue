<template>
  <t-page ref="page">
    <t-header slot="top">carousel</t-header>
    <div>
      <t-group title="基础用法">
        <t-carousel
        :data="data"
        >
        </t-carousel>
      </t-group>
      <t-group title="scale用法">
        <t-carousel
        :data="data"
        :options="{
          type: 'scale'  
        }"
        >
        </t-carousel>
      </t-group>
      <t-group title="关闭分页">
        <t-carousel
        :data="data"
        :options="{
          pagination: false 
        }"
        >
        </t-carousel>
      </t-group>
      <t-group title="关闭自动播放">
        <t-carousel
        :data="data"
        :options="{
          pagination: false,
          autoplay: false
        }"
        >
        </t-carousel>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import {tCarousel} from 'components'
export default {
  data () {
    return {
      data: [
        {
          pic: require('@a/image/carousel/1.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/carousel/2.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/carousel/3.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/carousel/4.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          pic: require('@a/image/carousel/5.jpg'),
          linkType: 0,
          link: 'http://www.baidu.com'
        }
      ]
    }
  },
  components: {
    tCarousel
  },
  methods: {
    titleClick () {
      this.$router.push('orange')
    },
    leftClick (e) {
      alert('自定义按钮点击' + e)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
