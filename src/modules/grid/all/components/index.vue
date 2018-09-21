<template>
  <div>
    <div v-for="(item, index) in data" :key="index">
      <t-carousel
      v-if="item.type === 'carousel'"
      :data="item.data"
      :options="item.options"
      @click="click"
      ></t-carousel>
      <t-grid
      v-if="item.type === 'grid'"
      :data="item.data"
      @click="click"
      ></t-grid>
      <t-notice
      v-if="item.type === 'notice'"
      :data="item.data"
      :options="item.options"
      @click="click"
      ></t-notice>
      <t-row
      v-if="item.type === 'row'"
      :data="item.data"
      @click="click"
      ></t-row>
      <t-card
      v-if="item.type === 'card'"
      :options="item.options"
      @click="click"
      ></t-card>
      <t-title
      v-if="item.type === 'title'"
      :options="item.options"
      @click="click"
      ></t-title>
    </div>
  </div>
</template>
<script>
import {tCard, tCarousel, tGrid, tNotice, tRow, tTitle} from 'components'
export default {
  components: {
    tCard,
    tCarousel,
    tGrid,
    tNotice,
    tRow,
    tTitle
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>
