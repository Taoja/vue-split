<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">仪表图</t-header>
    <div id="container"></div>
  </t-page>
</template>
<script>
export default {
  mounted() {
   var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var option = null;
option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%",
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]
};

setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000);
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
  },
}
</script>

<style lang="scss" scoped>
#container{
    height: 100%;
}
</style>
