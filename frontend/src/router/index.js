import { createRouter, createWebHistory } from 'vue-router';
import Introduction from '../components/IntroductionPage.vue';
import Usage from '../components/UsagePage.vue';
import Heart from '../components/HeartPage.vue';
import Rate from '../components/HeartRate.vue';
import Circle from '../components/HeartCircle.vue';
import Statistics from '../components/StatisticsPage.vue';
import Settings from '../components/SettingsPage.vue';
import Gradio from '../components/GradioPage.vue';
import Index from '../components/IndexPage.vue';
import Part from '../components/PartPage.vue';

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
