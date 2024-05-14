// router.js

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/introduction' // 设置默认路由
    },
    {
      path: '/introduction',
      component: Introduction // 引入模型介绍页面组件
    },
    {
      path: '/usage',
      component: Usage // 引入模型使用页面组件
    },
    {
      path: '/statistics',
      component: Statistics // 引入数据统计页面组件
    },
    {
      path: '/settings',
      component: Settings // 引入设置页面组件
    }
  ]
});
