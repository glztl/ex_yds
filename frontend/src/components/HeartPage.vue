<template>
    <div class="heart_container">
        <div class="heart_content">
            <div class="heart_chart">
                <CirclePart />
                <RatePart />
            </div>
            <HeartTable />
        </div>
    </div>
</template>

<script>
import RatePart from './HeartRate.vue'
import CirclePart from './HeartCircle.vue'
import HeartTable from './HeartTable.vue'

export default {
    components: {
        RatePart,
        CirclePart,
        HeartTable
    }
}

</script>


<style>
.heart_content {
  display: flex;
  flex-direction: column; /* 使子组件在父容器中均匀分布 */
}
.heart_chart {
    display: flex;
    justify-content: space-between;
}

</style>