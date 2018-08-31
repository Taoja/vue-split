<template>
  <v-page ref="page" :options="{nativeScroll: false}">
    <v-header slot="top"><div @click="titleClick">black</div></v-header>
    <div>
      123
    </div>
  </v-page>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    titleClick () {
      this.$router.push('white')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
