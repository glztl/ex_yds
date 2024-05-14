<template>
  <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'GaugeChart',
  setup() {
    const chart = ref(null);
    let myChart;
    let pointerValue = 50; // 初始指针值

    onMounted(() => {
      myChart = echarts.init(chart.value);

      const option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}' },
            data: [{ value: pointerValue, name: '心率' }],
            axisLine: { // 设置表盘的轴线颜色为红色
              lineStyle: {
                color: [[0.5, '#13E697'], [0.8, 'green'], [1, 'red']],
                width: 10
              }
            }
          }
        ]
      };

      myChart.setOption(option);

      // 每秒更新表盘指针
      setInterval(() => {
        // 生成一个 0 到 100 之间的随机数，用作指针的新位置
        pointerValue = Math.floor(Math.random() * 101);
        updatePointer(pointerValue);
      }, 1000);
    });

    // 更新表盘指针位置
    const updatePointer = (value) => {
      if (myChart) {
        myChart.setOption({
          series: [{
            data: [{ value }]
          }]
        });
      }
    };

    return {
      chart,
      updatePointer
    };
  }
};
</script>

<style>
/* 可以添加一些样式来自定义表盘的外观 */
</style>
