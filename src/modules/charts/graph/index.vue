<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top">关系图</t-header>
    <div id="container"></div>
  </t-page>
</template>
<script>
import json from '@a/file/graph.json'
export default {
  mounted() {
   var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var option = null;
myChart.showLoading();
    myChart.hideLoading();
    myChart.setOption(option = {
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'none',
                // progressiveThreshold: 700,
                data: json.nodes.map(function (node) {
                    return {
                        x: node.x,
                        y: node.y,
                        id: node.id,
                        name: node.label,
                        symbolSize: node.size,
                        itemStyle: {
                            normal: {
                                color: node.color
                            }
                        }
                    };
                }),
                edges: json.edges.map(function (edge) {
                    return {
                        source: edge.sourceID,
                        target: edge.targetID
                    };
                }),
                label: {
                    emphasis: {
                        position: 'right',
                        show: true
                    }
                },
                roam: true,
                focusNodeAdjacency: true,
                lineStyle: {
                    normal: {
                        width: 0.5,
                        curveness: 0.3,
                        opacity: 0.7
                    }
                }
            }
        ]
    }, true);
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
