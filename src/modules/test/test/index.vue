<template>
  <t-page ref="page">
    <t-header slot="top"><div @click="goTest">test</div></t-header>
    <div>123</div>
  </t-page>
</template>
<script>
export default {
  methods: {
    goTest () {
      this.$router.push('/test2/test')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
