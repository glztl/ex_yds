<template>
    <div class="echart" id="mychart" :style="myChartStyle"></div>
  </template>
  
  <script>
  import * as echarts from "echarts";
// import { setTransitionHooks } from "vue";
  
  export default {
    data() {
      return {
        xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //横坐标
        yData: [65, 70, 68, 78, 80, 73, 90], //人数数据
        myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
      };
    },
    mounted() {
      this.initEcharts();
    },
    methods: {
      initEcharts() {

        // 样式
        const option = {
            xAxis: {
                data: this.xData
            },
            // 图列
            legend: {
                show: true
            },
            yAxis: {},
            series: [
                {
                    name: "心率统计",
                    type: "bar",
                    data: this.yData,
                    itemStyle: {
                        color: "red",
                        barBorderRadius: 5,
                        width: 0.6,
                        borderType: "solid",
                        borderColor: "red",
                        shadowColor: "red",
                        shadowBlur: 3
                    },
                    label: {
                        show: true,
                        position: "top"
                    }
                }
            ]
        };

        const myChart = echarts.init(document.getElementById("mychart"));
        myChart.setOption(option);
        window.addEventListener("resize", () => {
          myChart.resize();
        });
        
      }
    },
    
  };
  </script>
  
  <style>
  
  </style>
  