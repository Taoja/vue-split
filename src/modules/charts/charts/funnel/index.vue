<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">漏斗图</t-header>
    <div id="container"></div>
  </t-page>
</template>
<script>
export default {
  mounted() {
   var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        },
        bottom: 10,
    },
    legend: {
        data: ['展现','点击','访问','咨询','订单']
    },
    series: [
        {
            name: '预期',
            type: 'funnel',
            left: '2%',
            width: '70%',
            label: {
                normal: {
                    formatter: '{b}预期'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}预期: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
            ]
        },
        {
            name: '实际',
            type: 'funnel',
            left: '2%',
            width: '70%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}实际: {c}%'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: [
                {value: 30, name: '访问'},
                {value: 10, name: '咨询'},
                {value: 5, name: '订单'},
                {value: 50, name: '点击'},
                {value: 80, name: '展现'}
            ]
        }
    ]
};
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
