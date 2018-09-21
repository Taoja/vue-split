<template>
  <t-popup 
  :value="value"
  @onHide="hide"
  >
    <div class="selectWarp">
			<t-header class="header" :leftOptions="[{icon: 'icon-icon_close'}]" v-if="title" @leftClick="hide">{{title}}</t-header>
			<div class="card-warp">
        <div class="card-list">
          <div class="group">
            <div class="cell" v-for="(item,index) in data" :title="item.key" :key="index + 'n'" @click="clickNormalItem(item)">
              <div class="left">
                <s-logo v-if="item.iconType" :logo="item.iconType" class="bankLogo" slot="icon"></s-logo>
                <div v-html="item.key"></div>
              </div>
              <div class="right">
                <i v-if="item.value === selected" class="iconfont icon-list_radio"></i>
              </div>
            </div>
            <div class="cell" @click="buttonClick" v-if="button">{{button}}</div>
          </div>
        </div>
        <slot></slot>
			</div>
		</div>
  </t-popup>
</template>
<script>
import tPopup from '../../base/popup'
import tHeader from '../../base/header'

export default {
  components: {
    tPopup,
    tHeader
  },
  data () {
    return {
      // selected: ''
    }
  },
  props: {
    value: Boolean,
    title: String,
    data: {
      type: Array,
      default () {
        return []
      }
    },
    selected: String,
    button: String
  },
  watch: {
    selected (e) {
      if (e) {
        this.$emit('change', e)
      }
    }
  },
  methods: {
    hide () {
      this.$emit('input', false)
    },
    clickNormalItem(item){
      if(item.value != this.selected){
        this.$emit('click', item)
        this.selected = item.value
      }
      this.hide()
    },
    buttonClick () {
      this.$emit('btnClick')
      this.hide()
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@s/functions.scss';
  .twoline{
  color: #222;
  >div:first-child{
    font-size: p2r(32);
  }
  >div:last-child{
    font-size: p2r(26);
  }
}
.card-list{
  background-color: #f6f6f6;
  padding-bottom: 1px;
}
.list-wrapper{
  position: relative !important;
  background-color: #f6f6f6;
}
.group{
  background-color: white;
}
.m20{
  margin: p2r(24) 0px;
}
.selectWarp{
  display: flex;
  flex-flow: column;
  min-height: 8rem;
  max-height: 10rem;
  overflow: auto;
  .card-warp{
    display: flex;
    flex-flow: column;
  }
}
.gray2{
  position: relative;
  padding-right: 0.2rem !important;
  .open{
    margin-right: p2r(14);
    font-size: p2r(32);
    color: #8f8f8f;
  }
  .left{
    color: #8f8f8f !important;
  }
}
.gray::after{
  content: "";
  background-color: rgba(255,255,255,0.6);
  width: 100%;
  height: calc(1.2rem - 2px);
  left: 0px;
  top: 1px;
  position: absolute;
}
.icon-list_icon_path-{
  color: #c8c9cc;
  font-size: p2r(32);
}
.icon-list_radio{
  color: #d81e06;
  font-size: p2r(40);
}
.bankLogo{
  font-size: p2r(48);
  margin-right: p2r(16);
}
.cell{
  line-height: initial;
  position: relative;
  height: p2r(120);
  display: flex;
  margin-left: p2r(30);
  padding-right: p2r(30);
  align-items: center;
  justify-content: space-between;
  >.left{
    display: flex;
    align-items: center;
    font-size: p2r(32);
    color: #222;
  }
  >.right{
    display: flex;
    align-items: center;
  }
}
.cell:first-child::before{
  border-top: none !important;
}
.cell::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  top: 0px;
  border-top: 1px solid #e6e6e6;
  transform: scaleY(0.5);
}
.popup-select-header{
  max-height: p2r(104);
  min-height: p2r(104);
  line-height:p2r(104);
  text-align:center;
  position:relative;
  font-size: p2r(34);
  background:#f6f6f6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #222;
  font-weight: 500;
  .onClose{
    display:block;
    width:.86rem;
    height: p2r(104);
    position:absolute;
    left:0;
    top:0;
    color: #999;
    padding: 0 0.28rem;
    box-sizing: border-box;
    font-weight: bold;
    font-size: p2r(30);
  }
  .onPrev{
    display:block;
    width:.86rem;
    height: p2r(104);
    position:absolute;
    left:0;
    top:0;
    color: #999;
    padding: 0 0.28rem;
    box-sizing: border-box;
    font-weight: bold;
    font-size: p2r(35);
  }
}
</style>

