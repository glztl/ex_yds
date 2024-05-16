<template>
    <div class="Banner">
      <div class="Title">
        <router-link to="/" class="Title">SNN</router-link>
      </div>
      <div class="NavBar">
        <!-- <router-link to="/introduction" class="NavItem">📕模型介绍</router-link> -->
        <router-link to="/gradio" class="NavItem">🚀使用</router-link>
        <router-link to="/realtime" class="NavItem">🦉实时监测</router-link>
        <router-link to="/statistics" class="NavItem">📊数据统计</router-link>
        <router-link to="/heart" class="NavItem">💕心率分析</router-link>
        <router-link to="/statistics" class="NavItem">🏃‍健康状况</router-link>
        <router-link to="/settings" class="NavItem">⚙设置</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // 组件选项
  };
  </script>
  
<style scoped>
  .Banner {
  background-color:#F5F5F7;
  color: #232D36;
  height: 80px; /* Adjusted height to accommodate the navigation bar */
  width: 100%;
  display: flex;
  align-items: center;
  /* border-bottom: #232D36 solid 2px; */
}
.Title {
    margin-left: 45px;
    text-decoration: none;
    font-size: 20px;
    color: #232D36;
}

.NavBar {
  display: flex;
  justify-content: space-around;
  width: 50%; /* Adjusted width */
  margin-left: 220px;
}

.NavItem {
  cursor: pointer;
  text-decoration: none;
  color: #232D36;
}

/* 去除导航栏按钮点击后的颜色变化 */
.NavItem:active {
    color: inherit; /* 继承默认文本颜色 */
}

.NavItem:hover {
  text-decoration: none;
  color: #EA580C;
}

</style>
  