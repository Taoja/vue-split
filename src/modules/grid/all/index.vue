<template>
  <t-page ref="page">
    <t-header slot="top">演示</t-header>
    <t-all :data="data" @click="click"></t-all>
  </t-page>
</template>
<script>
import tAll from './components'
export default {
  components: {
    tAll
  },
  data () {
    return {
      data: [
        {
          type: 'carousel',
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
          ],
          options: {
            type: 'scale',
            pagination: false
          }
        },
        {
          type: 'grid',
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
          ]
        },
        {
          type: 'grid',
          data: [
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
        },
        {
          type: 'notice',
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
          ],
          options: {
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
          }
        },
        {
          type: 'title',
          options: {
            title: '热门活动',
            text: '立即前往',
            color: '#cc162c',
            linkType: 1,
            link: 'demo_flex'
          }
        },
        {
          type: 'grid',
          data: [
            {
              pic: require('@a/image/grid/1.jpg'),
              linkType: 1,
              link: 'demo_flex'
            }
          ]
        },
        {
          type: 'title',
          options: {
            title: '优惠活动',
            icon: 'icon-inform',
            color: '#cc162c',
            linkType: 1,
            link: 'demo_flex'
          }
        },
        {
          type: 'row',
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
        },
        {
          type: 'card',
          options: {
            pic: require('@a/image/card/1.png'),
            title: '【赛马娘/误解向MAD】白色马厩 Pretty Day',
            msg: '9528次观看·315弹幕',
            icons: [
              {
                icon: 'icon-Qa_linear_blue',
                color: '#cc162c'
              }
            ],
            linkType: 0,
            link: 'http://www.baidu.com'
          }
        },
        {
          type: 'card',
          options: {
            pic: require('@a/image/card/1.png'),
            title: '【赛马娘/误解向MAD】白色马厩 Pretty Day',
            msg: '9528次观看·315弹幕',
            icons: [
              {
                icon: 'icon-Qa_linear_blue',
                color: '#cc162c'
              }
            ],
            linkType: 0,
            link: 'http://www.baidu.com'
          }
        },
        {
          type: 'card',
          options: {
            pic: require('@a/image/card/1.png'),
            title: '【赛马娘/误解向MAD】白色马厩 Pretty Day',
            msg: '9528次观看·315弹幕',
            icons: [
              {
                icon: 'icon-Qa_linear_blue',
                color: '#cc162c'
              }
            ],
            linkType: 0,
            link: 'http://www.baidu.com'
          }
        }
      ]
    }
  },
  methods: {
    click (e) {
      this.$toast({
        msg: `跳转类型 ${e.linkType}, 跳转地址 ${e.link}`
      })
    }
  }
}
</script>

