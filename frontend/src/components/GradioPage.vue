<template>
    <div class="GradioContainer">
        <!-- <h1>gradio</h1> -->
        <!-- 这里是 router-view，用于渲染匹配到的组件 -->
        <div class="GradioExample">
            <iframe :src="gradioURL" width="800" height="600"></iframe>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'GradioExample',
    data() {
        return {
            gradioURL: 'http://127.0.0.1:8081', // Update this URL accordingly
        };
    },
    methods: {
        async sendDataToSpringBoot() {
            try {
                const response = await axios.post('http://localhost:9502/test/tset1', {
                    result: this.resultFromPython
                });
                console.log(response.data); // Handle response from Spring Boot
            } catch (error) {
                console.error('Error sending data to Spring Boot:', error);
            }
        },
        navigateTo(page) {
            // Implement navigation logic here
            console.log('Navigating to:', page);
            // You can add logic here to navigate to different pages based on the 'page' parameter
        }
    }
};
</script>

<style>
.GradioContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
/* 设置容器的高度为视窗的100%，以使其在垂直方向上居中 */
    /* height: 100vh;  */
}

.GradioExample {
    width: 800px;
    height: 600px;
    border: none;
}

.GradioExample iframe {
    width: 100%; /* 使 iframe 元素占满其父元素的宽度 */
    height: 100%; /* 使 iframe 元素占满其父元素的高度 */
    border: none;
}
</style>
