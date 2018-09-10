<template>
  <div class="button" :class="className" @click="click" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
      beclick: false
    }
  },
  props: {
    size: {
      type: String,
      default: 'normal' //normal small tiny
    },
    type: {
      type: String,
      default: 'primary' //primary
    },
    plain: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    color: {
      type: Object,
      default: {}
    }
  },
  computed: {
    className () {
      let className = [
        `button_size_${this.size}`,
        `button_type_${this.type}${this.plain ? '_plain' : ''}`,
        this.beclick ? 'beclick' : '',
        `button_${this.disable ? 'disable' : 'able'}${this.plain ? '_plain' : ''}`
      ]
      return className
    },
    style () {
      let style = {
        backgroundColor: this.plain ? this.color.plain : this.color.main,
        color: this.plain ? this.color.main : this.color.plain,
        border: `1px solid ${this.color.main}`
      }
      return style
    }
  },
  methods: {
    click (e) {
      if (!this.beclick && !this.disable) {
        this.beclick = true
        this.$emit('click', e)
        setTimeout(() => {
          this.beclick = false
        }, 200)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@s/vars.scss';
.button{
  &_size{
    &_normal{
      height: .88rem;
      width: 6.9rem;
      margin: auto;
      border-radius: .1rem;
      text-align: center;
      line-height: .88rem;
      font-size: $font-h2;
    }
    &_small{
      height: .8rem;
      padding: 0px .6rem;
      line-height: .8rem;
      text-align: center;
      display: inline-block;
      font-size: $font-h2;
      border-radius: .1rem;
    }
    &_tiny{
      height: .6rem;
      font-size: $font-h4;
      padding: 0px .3rem;
      line-height: .6rem;
      text-align: center;
      display: inline-block;
      border-radius: .04rem;
      min-width: .6rem;
    }
  }
  &_type{
    &_primary{
      color: $font-color-t5;
      background-color: $color-cm;
      border: 1px solid $color-cm;
      &_plain{
        color: $color-cm;
        background-color: $font-color-t5;
        border: 1px solid $color-cm;
      }
    }
  }
  &.button_disable{
    background-color: $font-color-t4;
    color: white;
    border: 1px solid $font-color-t4;
    &_plain{
      background-color: white;
      color: $font-color-t4;
      border: 1px solid $font-color-t4;
    }
  }
}
.beclick{
  opacity: .4;
}
</style>
