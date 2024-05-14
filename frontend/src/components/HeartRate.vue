<template>
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    data() {
      return {
        // 折线图数据
        chartData: {
          xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          yData: [120, 200, 150, 80, 70, 110, 130]
        }
      };
    },
    mounted() {
      // 在组件挂载后初始化图表
      this.initChart();
    },
    methods: {
      initChart() {
        // 获取图表容器
        const chartContainer = this.$refs.chart;
        // 初始化 echarts 实例
        const myChart = echarts.init(chartContainer);
        // 配置图表
        const option = {
          title: {
            text: '心率记录'
          },
          xAxis: {
            type: 'category',
            data: this.chartData.xData
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: this.chartData.yData,
            type: 'line',
            lineStyle: {
              color: 'red' // 设置折线颜色为红色
            }
          }]
        };
        // 使用配置项初始化图表
        myChart.setOption(option);
      }
    }
  };
  </script>
  
  <style>
  .chart-container {
    display: flex;
    justify-content: center;
  }
  
  .chart {
    width: 600px;
    height: 400px;
  }
  </style>
  