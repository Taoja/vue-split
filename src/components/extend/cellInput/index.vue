<template>
  <t-cell>
    <div slot="left" class="title" v-if="title">{{title}}</div>
    <t-input class="input" v-model="value" :placeholder="placeholder" :disable="disable" :maxlength="maxlength" :readonly="readonly" :type="type" :textAlign="textAlign" :keyBoardType="keyBoardType"></t-input>
    <div slot="extend">
      <slot></slot>
    </div>
  </t-cell>
</template>
<script>
import tInput from '../../base/input'
import tCell from '../../base/cell'
export default {
  components: {
    tInput,
    tCell
  },
  props: {
    value: false,
    placeholder: String,
    maxlength: String,
    readonly: Boolean,
    type: String,
    textAlign: String,
    keyBoardType: String,
    title: String,
    disable: Boolean,
  },
  watch: {
    value (e) {
      this.$emit('input', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.title{
  width: 1.68rem;
}
.input{
  width: 100%;
  height: 100%;
  min-height: 1.04rem;
}
</style>
