<template>
  <div class="main" v-if="tabs.length !== 0">
    <div class="tabs">
      <div @click="click(index)" :class="{'choiced': item.value === selected}" :key="index" v-for="(item, index) in tabs">{{item.key}}<s-logo :logo="selected === item.value ? 'tabs_icon_selected_u' : 'tabs_icon_normal_dow'" class="icon"></s-logo></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    selected () {
      return this.value
    }
  },
  methods: {
    click (e) {
      if (this.selected === this.tabs[e].value) {
        this.$emit('input', '')
      } else {
        this.$emit('input', this.tabs[e].value)
      }
    }
  },
  props: {
    tabs: {
      type: Array,
      default () {
        return []
      }
    },
    value: null
  },
  mounted () {
    console.log(this.tabs)
  }
}
</script>
<style lang="scss" scoped>
@import '@s/functions.scss';
@import '@s/vars.scss';
.main{
  background-color: white;
  box-shadow: 0 1px old2new(0.08) rgba(51,51,51,0.06);
  height: old2new(1.1733);
  >.tabs{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    >div{
      flex: 1 1 1px;
      font-size: $font-h4;
      color: $font-color-t2;
      line-height: initial;
      display: flex;
      align-items: center;
      justify-content: center;
      >.icon{
        font-size: px2rem(16);
        margin-left: px2rem(16);
      }
    }
    >.choiced{
      color: #d81e06;
    }
  }
}
</style>
