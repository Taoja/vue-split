<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">树形图</t-header>
    <div id="container"></div>
  </t-page>
</template>
<script>
import data from '@a/file/people.json'
export default {
  mounted() {
      var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
myChart.showLoading();

var data2 = {
    "name": "flare",
    "children": [
        {
            "name": "flex",
            "children": [
                {"name": "FlareVis", "value": 4116}
            ]
        },
        {
            "name": "scale",
            "children": [
                {"name": "IScaleMap", "value": 2105},
                {"name": "LinearScale", "value": 1316},
                {"name": "LogScale", "value": 3151},
                {"name": "OrdinalScale", "value": 3770},
                {"name": "QuantileScale", "value": 2435},
                {"name": "QuantitativeScale", "value": 4839},
                {"name": "RootScale", "value": 1756},
                {"name": "Scale", "value": 4268},
                {"name": "ScaleType", "value": 1821},
                {"name": "TimeScale", "value": 5833}
           ]
        },
        {
            "name": "display",
            "children": [
                {"name": "DirtySprite", "value": 8833}
           ]
        }
    ]
};

myChart.hideLoading();
var option
myChart.setOption(option = {

        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },

        series:[
            {
                type: 'tree',

                data: [data2],

                left: '2%',
                right: '2%',
                top: '20%',
                bottom: '8%',

                symbol: 'emptyCircle',

                orient: 'BT',

                expandAndCollapse: true,

                label: {
                        position: 'bottom',
                        rotate: 90,
                        verticalAlign: 'middle',
                        align: 'right'
                },

                leaves: {
                    label: {
                            position: 'top',
                            rotate: 90,
                            verticalAlign: 'middle',
                            align: 'left'
                    }
                },

                animationDurationUpdate: 750
            }
        ]
    });

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
