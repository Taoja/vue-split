<!-- 带光标输入框 -->
<!-- @author 黄武韬-->
<!-- @props placeholder -->
<!-- @props maxlength -->
<!-- @props readonly -->
<!-- @props textAlign -->
<!-- @event click 点击输入栏-->
<!-- @event focus 出现焦点返回-->
<!-- @event blur 失去焦点返回-->
<template>
  <div class="vInputStyle" ref="vinput" :class="[textAlign, {'disAble': disAble}]" tabindex="1" @click="onclick" @focus="onfocus" @blur="onblur" v-if="keyBoardType === 'native'">
    <div v-if="!value && value !== 0" class="placeholder">{{placeholder}}<span class="startLight" v-if="value !== 0 && !value && !blur"></span></div>
    <div :class="{'focus': !blur && (value || value === 0)}" class="input" ref="vson" :style="'transform: translate(' + translate + 'px);'">{{type === 'password' ? value.replace(/[0-9]/g,'*') : value}}</div>
    <!-- <input ref="hiddenInput" class="hiddenInput" :disabled="disAble" readonly @click="onclick" @focus="onfocus" @blur="onblur"> -->
  </div>
  <div v-else class="natureInput">
    <input :type="type" v-model="value" :class="[textAlign, {'disAble': disAble}]" :placeholder="placeholder" :maxLength="maxlength" :readonly="readOnly" :disabled="disAble" @click="onclick" @focus="onfocus" @blur="onblur">
  </div>
</template>

<script>
export default {
  data () {
    return {
      blur: true,
      translate: 0
    }
  },
  filters: {
    passwordFilter (e) {
      if (this.type === 'password' && e) {
        return e.replace(/[0-9]/g,'*')
      } else {
        return e
      }
    }
  },
  watch: {
    value: {
      handler (e) {
        if (this.type === 'IDCard') {
          this.value = e.replace(/[^0-9X]/ig,"").replace('x', 'X')
        } else if (this.keyBoardType === 'native') {
          if (this.type === 'number') {
            this.value = e.replace(/[^0-9]/ig,"")
          }
        }
        this.$nextTick(() => {
          let fatherWidth = this.$refs.vinput && this.$refs.vinput.clientWidth
          let sonWidth = this.$refs.vson && this.$refs.vson.clientWidth
          this.translate = fatherWidth - sonWidth >= 0 ? 0 : fatherWidth - sonWidth - 2
        })
        if (e.length > this.maxlength) {
          this.value = e.substr(0, this.maxlength*1)
        } else {
          this.$emit('input', e)
        }
      },
      immediate: true
    }
  },
  props: [
    'value',
    'placeholder',
    'maxlength',
    'readonly',
    'disable',
    'type',
    'textAlign',
    'keyBoardType',
    'type'
  ],
  computed: {
    readOnly () {
      return this.readonly !== '' && this.readonly !== undefined && this.readonly !== false && this.readonly !== 'false'
    },
    disAble () {
      return this.disable !== '' && this.disable !== undefined && this.disable !== false && this.disable !== 'false'
    }
  },
  methods: {
    onclick (e) {
      if (!this.readOnly && !this.disAble) {
        this.$nextTick(() => {
          this.keyBoardType === 'native' && this.$refs.vinput.focus()
        })
        this.$emit('click', e)
      }
    },
    onfocus () {
      if (!this.readOnly && !this.disAble) {
        this.blur = false
        this.$emit('focus')
      }
    },
    onblur () {
      if (!this.readOnly && !this.disAble) {
        this.blur = true
        this.$emit('blur')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.disAble{
  color:#bbb !important;
}
.natureInput{
  >input{
    width: 100%;
    height: 100%;
  }
}
.right{
  justify-content: flex-end;
  text-align: right;
  >.placeholder{
    >.startLight{
      right: 0px;
      left: inherit;
    }
  }
}
.hiddenInput{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}
.vInputStyle::-webkit-scrollbar{
  display:none;
}
.vInputStyle {
  line-height: initial;
  overflow-x: auto;
  position: relative;
  display: flex;
  align-items: center;
  color: #222;
  >div{
    position: relative;
    display: inline-block;
    padding-right: 2px;
  }
  >.placeholder{
    color: #bbb;
    overflow: hidden;
    white-space: nowrap;
  }
}
.startLight{
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  width: 2px;
  background-color: #436bf1;
  height: 100%;
  display: inline-block;
  position: absolute;
  animation: shan 1s linear infinite;
  left: 0px;
  top: 0px;
}
.focus::after{
  content: "";
  width: 2px;
  background-color: #436bf1;
  height: 100%;
  display: inline-block;
  position: absolute;
  animation: shan 1s linear infinite;
}
@keyframes shan{
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
