<template>
  <div class="Tswitch" :class="className" @click="click">
    <div class="TswitchBtn"></div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className () {
      return this.value ? 'Tswitch_open' : 'Tswitch_close'
    }
  },
  methods: {
    click () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@s/vars.scss';
.Tswitch{
  width: 1rem;
  height: .5rem;
  border-radius: .5rem;
  transition: all 0.35s cubic-bezier(0.45, 1, 0.4, 1) 0s;
  position: relative;
  &_close{
    background-color: #eee;
    >.TswitchBtn{
      left: .05rem;
    }
  }
  &_open{
    background-color: $color-cm;
    >.TswitchBtn{
      left: calc(100% - .05rem - .4rem);
    }
  }
  >.TswitchBtn{
    width: .4rem;
    height: .4rem;
    border-radius: 100%;
    background-color: white;
    transition: all 0.35s cubic-bezier(0.45, 1, 0.4, 1) 0s;
    position: absolute;
    top: .05rem;
  }
}
</style>
