<template>
  <div class="T_carousel swiper-container" :class="`T_carousel_${options.type} T_carousel${paginationClass}`">
    <div class="T_carousel_wrapper swiper-wrapper">
      <div class="T_carousel_item swiper-slide" v-for="(item, index) in data" :key="index" @click="click(item)">
        <img :src="item.pic">
      </div>
    </div>
    <div v-if="options.navigation" class="swiper-button-prev"></div><!--左箭头-->
    <div v-if="options.navigation" class="swiper-button-next"></div><!--右箭头-->
    <div class="T_carousel_pagination swiper-pagination" :class="`T_carousel_pagination${paginationClass}`"></div>
  </div>
</template>
<script>
import Swiper from '../../plugins/swiper-4.4.1.min.js'
export default {
  data () {
    return {
      paginationClass: (new Date()).getTime(),
      swiper: '',
      config: {
        type: 'normal',
        loop: true,
        initialSlide: 0,
        speed: 300,
        autoplay: {
          delay: 2000,
        },
        navigation: false,
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    options: {
      type: Object,
      default: {}
    }
  },
  mounted () {
    this.config.pagination = {
      el: `.T_carousel_pagination${this.paginationClass}`,
      clickable: true
    }
    let options = Object.assign(this.config, this.options)
    console.log(options)
    this.swiper = new Swiper(`.T_carousel${this.paginationClass}`, options)
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style>
@import '../../plugins/swiper-4.4.1.min.css';
.T_carousel_item>img{
  display: block;
  width: 100%;
}
.T_carousel_scale .T_carousel_item {
  transform: scale(0.9);
}
.T_carousel_scale .swiper-slide-prev{
  transform: scale(0.85) translateX(12%);
}
.T_carousel_scale .swiper-slide-next{
  transform: scale(0.85) translateX(-12%);
}
</style>
