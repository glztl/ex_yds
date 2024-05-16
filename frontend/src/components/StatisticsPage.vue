<template>
  <div class="sta_container">
    <div class="sta_content">
      <div class="chart_container">
        <Schart />
        <Schart2 />
      </div>
      <Stable />
    </div>
  </div>
</template>

<script>
import Schart from "./StatisticsChart.vue";
import Schart2 from "./StatisticsChart2.vue";
import Stable from "./StatisticsTable.vue";

export default {
  components: {
    Schart,
    Schart2,
    Stable
  }
}
</script>

<style>
.sta_content {
  display: flex;
  flex-direction: column;
}

.chart_container {
  display: flex;
  justify-content: space-between;
}
</style>
