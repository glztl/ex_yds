<template>
  <div class="Banner">
    <div class="NavBar">
      <router-link to="/part" class="NavItem">· Part I</router-link>
      <router-link to="/gradio" class="NavItem">· Part II</router-link>
      <router-link to="/statistics" class="NavItem">· Part III</router-link>
      <router-link to="/settings" class="NavItem">· Part IV</router-link>
    </div>
  </div>
</template>
  
<script>
export default {
  
};
</script>
  
<style scoped>
.Banner {
  background-color: #F6F8FA;
  color: #232D36;
  width: 150px; /* 设置宽度为150px */
  height: 100%; /* 设置高度为100% */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  border-right: #232D36 solid 2px; /* 添加右边框 */
}

.NavBar {
  margin-top: 20px; /* 调整导航栏的顶部边距 */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center;
}

.NavItem {
  cursor: pointer;
  text-decoration: none;
  color: #232D36;
  margin-bottom: 40px; /* 设置菜单项之间的垂直间距 */
}

.NavItem:active {
  color: inherit; /* 继承默认文本颜色 */
}

.NavItem:hover {
  text-decoration: none;
  color: #EA580C;
}
</style>
