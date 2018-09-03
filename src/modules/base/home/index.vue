<template>
  <t-page ref="page">
    <t-header slot="top"><div @click="titleClick">演示</div></t-header>
    <div>
      <t-flex align="stretch" class="box">
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('flex')">Flex</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a2" @click="go('header')">Header</t-flex>
        <t-flex flex="1" justify="center" align="center" class="a1" @click="go('cell')">Group&Cell</t-flex>
      </t-flex>
    </div>
  </t-page>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    titleClick () {
      this.$router.push('white')
    },
    go (e) {
      this.$router.push(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  height: 1.04rem;
}
.a1{
  background-color: #e6e6e6;
}
.a2{
  background-color: white;
}
</style>
