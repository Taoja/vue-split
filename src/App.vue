<template>
  <div id="app">
    <transition
    :enter-active-class="goback ? 'faster animated slideInLeft' : 'faster animated slideInRight'"
    :leave-active-class="goback ? 'faster animated slideOutRight' : 'faster animated slideOutLeft'">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { routerLoader } from '@j/routerStack'
export default {
  computed: {
    ...mapState(['goback', '__pageStack', 'loadedPages']),
  },
  mounted() {
    routerLoader.call(this)
    this.$router.beforeEach((to, from, next) => {
      this.addStack({to: to.path, from: from.path}) //压栈
      next()
    })
    this.$router.push('/')
  },
  methods: {
    ...mapMutations(['addStack', 'addLoaded']),
  }
}
</script>

<style>
body{
  margin: 0;
  background-color: gray;
}
#app{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>