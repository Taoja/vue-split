<template>
  <v-page ref="page">
    <v-header slot="top"><div @click="titleClick">white</div></v-header>
    <div>
      
    </div>
  </v-page>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    titleClick () {
      this.$router.push('orange')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
