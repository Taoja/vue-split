<template>
  <t-popup 
  :value="value"
  @onHide="hide"
  >
    <div class="selectWarp">
			<div class="header" v-if="title">{{title}}</div>
			<div class="card-warp">
        <div class="card-list">
          <div class="item" :class="{'choiced': selected === item.value}" v-for="(item, index) in data" :value="item.value" :key="index" @click="clickNormalItem(item)">
            <div>
              <span>{{item.key}}</span>
              <i v-if="selected === item.value" class="iconfont icon-list_radio"></i>
            </div>
          </div>
        </div>
        <div class="cancel" @click="nextPanel">取消</div>
        <slot></slot>
			</div>
		</div>
  </t-popup>
</template>
<script>
export default {
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
    selected: String
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
        this.$emit('input', false)
    },
  }
}
</script>
<style lang="scss" scoped>
	@import '@s/functions.scss';
	@mixin base {
    height: p2r(104);
		line-height: p2r(104);
		text-align: center;
		font-size: p2r(32);
		background-color: white;
	}
	.vux-popup-dialog{
		max-height: 75%;
		overflow: hidden;
		display: flex;
		flex-flow: column;
	}
	.header{
		@include base;
		color: #8f8f8f;
		min-height: p2r(104);
	}
	.item{
		@include base;
		color: #222;
		position: relative;
	}
	.item:first-child::before{
		border-top: none !important;
	}
	.item::before{
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		top: 0px;
		left: 0px;
		border-top: 1px solid #e6e6e6;
		transform: scaleY(0.5);
	}
	.choiced {
		color: #e53935;
	}
	.cancel{
		@include base;
		margin-top: p2r(16);
		color: #222;
	}
	.icon-list_radio{
		position: absolute;
		right: p2r(30);
		color: #d81e06;
  	font-size: p2r(40);
	}
	.selectWarp{
  display: flex;
  flex-flow: column;
  max-height: 10rem;
  overflow: auto;
  .card-warp{
    display: flex;
    flex-flow: column;
  }
}
.list-wrapper{
  position: relative !important;
  background-color: #e6e6e6;
}
</style>

