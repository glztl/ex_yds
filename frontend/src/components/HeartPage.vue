<template>
    <div class="heart_container">
        <div class="content">
            <CirclePart />
            <RatePart />
        </div>
    </div>
</template>

<script>
import RatePart from './HeartRate.vue'
import CirclePart from './HeartCircle.vue'

export default {
    components: {
        RatePart,
        CirclePart
    }
}

</script>


<style>
.content {
  display: flex;
  justify-content: space-between; /* 使子组件在父容器中均匀分布 */
}

</style>