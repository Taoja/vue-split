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
  width: 1.2rem;
  border-radius: .6rem;
  padding: .1rem;
  box-sizing: border-box;
  transition: all 1s;
  &_close{
    background-color: #eee;
    >.TswitchBtn{
      transform: translateX(0rem);
    }
  }
  &_open{
    background-color: $color-cm;
    >.TswitchBtn{
      transform: translateX(1rem);
    }
  }
  >.TswitchBtn{
    width: .4rem;
    height: .4rem;
    border-radius: 100%;
    background-color: white;
    transition: all 1s;
  }
}
</style>
