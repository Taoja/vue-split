<template>
  <t-page ref="page">
    <t-header slot="top">notice</t-header>
    <div>
      <t-group title="基础用法">
        <t-notice
        :data="data"
        :options="{
          title: [
            {
              text: '小发播报',
              color: '#cc162c'
            }
          ]
        }"
        ></t-notice>
      </t-group>
      <t-group title="文字+图标">
        <t-notice
        :data="data"
        :options="{
          title: [
            {
              text: '小发播报',
              color: '#cc162c'
            },
            {
              icon: 'icon-inform',
              color: '#cc162c'
            }
          ]
        }"
        ></t-notice>
      </t-group>
      <t-group title="文字+图标+图片">
        <t-notice
        :data="data"
        :options="{
          title: [
            {
              pic: require('@a/image/notice/result_fail.png'),
              width: '.28rem'
            },
            {
              text: '小发播报',
              color: '#cc162c'
            },
            {
              icon: 'icon-inform',
              color: '#cc162c'
            }
          ]
        }"
        ></t-notice>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import {tNotice} from '@c'
export default {
  data () {
    return {
      data: [
        {
          text: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          text: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
          linkType: 1,
          link: 'demo_flex'
        },
        {
          text: '这是 NoticeBar 通告栏',
          linkType: 0,
          link: 'http://www.baidu.com'
        },
        {
          text: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
          linkType: 0,
          link: 'http://www.baidu.com'
        }
      ]
    }
  },
  components: {
    tNotice
  }
}
</script>

<style lang="scss" scoped>
</style>
