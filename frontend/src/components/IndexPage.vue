<template>
    <div>
        <!-- <h1>hello index</h1> -->
        <img :src="imageUrl" alt="图片描述" class="index-image">
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: require('../assets/yds003.jpeg')
        }
    }
}
</script>

<style>
.index-image {
    display: block;
    width: 80%; /* 使用百分比设置图片宽度 */
    max-width: 100%; /* 设置图片最大宽度为100% */
    height: auto; /* 使用 auto 设置图片高度，让其根据宽度自适应 */
    margin: 0 auto;
}

/* 在手机端限制图片宽度 */
@media only screen and (max-width: 600px) {
    .index-image {
        width: 100%;
    }
}
</style>
