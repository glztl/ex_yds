<template>
    <div class="echart_2" id="mychart_2" :style="myChartStyle"></div>
  </template>
  
  <script>
  import * as echarts from "echarts";
  
  export default {
    data() {
      return {
        mychart_2: {},
        sortData: [], //动态排序数据
        myChartStyle: { float: "left", width: "100%", height: "400px" }, //图表样式
        dynamicSortZZTOption: {
          xAxis: {
            max: "dataMax"
          },
          yAxis: {
            type: "category",
            data: ["跑", "跳", "走", "左跑", "右跑"],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 4 // only the largest 3 bars will be displayed
          },
          series: [
            {
              realtimeSort: true,
              name: "动作统计",
              type: "bar",
              data: [100, 200, 150, 250, 300],
              label: {
                show: true,
                position: "right",
                valueAnimation: true
              },
              itemStyle: {
                color: "#0077ED",
                barBorderRadius: 5,
                borderType: "solid",
                borderColor: "#0077ED",
                shadowColor: "#0077ED",
                shadowBlur: 3
              }
            }
          ],
          legend: {
            show: true
          },
          animationDuration: 3000,
          animationDurationUpdate: 3000,
          animationEasing: "linear",
          animationEasingUpdate: "linear"
        }
      };
    },
    mounted() {
      // 图表初始化
      this.mychart_2 = echarts.init(document.getElementById("mychart_2"));
      // 数据初始化
      for (let i = 0; i < 5; ++i) {
        this.sortData.push(Math.round(Math.random() * 200));
      }
      this.mychart_2.setOption(this.dynamicSortZZTOption);
      window.addEventListener("resize", () => {
        this.mychart_2.resize();
      });
    }
  };
  </script>
  
  <style>
  /* Add any necessary styles here */
  </style>
  