<template>
  <div :class="className" :style="style" @click="click">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'row'
    },
    align: {
      type: String,
      default: 'stretch'
    },
    justify: {
      type: String,
      default: 'start'
    },
    inline: {
      type: Boolean,
      default: false
    },
    flex: {
      type: String,
      default: ''
    }
  },
  computed: {
    className () {
      var direction = 'flex-flow_' + this.direction
      var align = 'align_' + this.align
      var justify = 'justify_' + this.justify
      var inline = this.inline ? 'inlineflex' : 'flex'
      return [direction, align, justify, inline]
    },
    style () {
      return 'flex: ' + this.flex
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>


<style lang="scss" scoped>
.inlineflex{
  display: inline-flex;
}
.flex{
  display: flex;
}
.flex-flow{
  &_row{
    flex-flow: row;
  }
  &_column{
    flex-flow: column
  }
}
.align{
  &_start{
    align-items: flex-start;
  }
  &_center{
    align-items: center;
  }
  &_end{
    align-items: flex-end;
  }
  &_stretch{
    align-items: stretch;
  }
  &_baseline{
    align-items: baseline;
  }
}
.justify{
  &_start{
    justify-content: flex-start;
  }
  &_center{
    justify-content: center;
  }
  &_end{
    justify-content: flex-end;
  }
  &_between{
    justify-content: space-between;
  }
  &_around{
    justify-content: space-around;
  }
}
.child{
  &_1{
    
  }
}
</style>
