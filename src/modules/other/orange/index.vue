<template>
  <v-page ref="page">
    <v-header slot="top"><div @click="titleClick">orange</div></v-header>
    <div>
      
    </div>
  </v-page>
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
