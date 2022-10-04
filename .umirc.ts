import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    'primary-color': '#0030D4',
    'text-color': '#ffffff', // 主文本色
    'tabs-card-head-background': '#0B1C2C',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          title: 'OX EXCHANGE',
          component: '@/pages/test',
        },
        {
          path: '/t',
          title: 'OX EXCHANGE',
          component: '@/pages/test',
        },
      ],
    },
  ],
  fastRefresh: {},
});
