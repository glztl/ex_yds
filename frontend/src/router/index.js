import { createRouter, createWebHistory } from 'vue-router';
import Introduction from '../components/IntroductionPage.vue';
import Usage from '../components/UsagePage.vue';
import Heart from '../components/HeartPage.vue';
import Rate from '../components/HeartRate.vue';
import Circle from '../components/HeartCircle.vue';
import Htable from '../components/HeartTable.vue';
import Statistics from '../components/StatisticsPage.vue';
import Settings from '../components/SettingsPage.vue';
import Gradio from '../components/GradioPage.vue';
import Index from '../components/IndexPage.vue';
import Part from '../components/PartPage.vue';
import Schart from '../components/StatisticsChart.vue';
import Schart2 from '../components/StatisticsChart2.vue';
import Stable from '../components/StatisticsTable.vue';
import Realtime from '../components/RealTimePage.vue';

const routes = [
  {
    path: '/introduction',
    component: Introduction
  },
  {
    path: '/usage',
    component: Usage
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/heart',
    component: Heart
  },
  {
    path: '/rate',
    component: Rate
  },
  {
    path: '/circle',
    component: Circle
  },
  {
    path: '/htable',
    component: Htable
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/gradio',
    component: Gradio
  },
  {
    path: '/part',
    component: Part
  },
  {
    path: '/schart',
    component: Schart
  },
  {
    path: '/schart2',
    component: Schart2
  },
  {
    path: '/stable',
    component: Stable
  },
  {
    path: '/realtime',
    component: Realtime
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/',
    redirect: '/index' // 默认跳转到模型介绍页面
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
