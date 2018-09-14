<template>
  <t-page ref="page">
    <t-header slot="top">Group&Cell</t-header>
    <div>
      <t-group title="基础用法">
        <t-cell title="标题">基础用法</t-cell>
      </t-group>
      <t-group title="不带标题">
        <t-cell>不带标题</t-cell>
      </t-group>
      <t-group title="双行用法">
        <t-cell title="标题文字" tips="描述信息">双行用法</t-cell>
      </t-group>
      <t-group title="自定义icon">
        <t-cell title="标题文字" tips="描述信息">自定义icon<i slot="icon" class="iconfont icon-explain_lump_blue"></i></t-cell>
      </t-group>
      <t-group title="自定义右侧功能">
        <t-cell title="标题文字">
          <div style="width: 5rem;">
            <t-tabs 
              v-model="tabSelectValue"
              :tabs="[{
                key: '乒乓球',
                value: 'ball1',
              },{
                key: '羽毛球',
                value: 'ball2'
              },{
                key: '篮球',
                value: 'ball3'
              }]">
            </t-tabs>
          </div>
        </t-cell>
      </t-group>
      <t-group title="可点击的">
        <t-cell title="标题" isLink>基础用法</t-cell>
        <t-cell title="标题文字" tips="描述信息" isLink>双行用法</t-cell>
      </t-group>
      <t-group title="标题超长">
        <t-cell title="标题超长标题超长标题超长标题超长标题超长" isLink></t-cell>
      </t-group>
    </div>
  </t-page>
</template>
<script>
import {tTabs} from '@c'
export default {
  data () {
    return {
      tabSelectValue: 'ball1'
    }
  },
  components: {
    tTabs
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
.icon-explain_lump_blue{
  color: #1296db;
  margin-right: 0.24rem;
}
</style>
