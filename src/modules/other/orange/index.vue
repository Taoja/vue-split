<template>
  <t-page ref="page">
    <t-header slot="top"><div @click="titleClick">orange</div></t-header>
    <div>
      
    </div>
  </t-page>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    titleClick () {
      this.$router.push('black')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
