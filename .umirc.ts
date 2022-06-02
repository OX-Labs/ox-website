import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    // "primary-color": "#010101",
  },
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          title: 'Crypto J',
          component: '@/pages/index',
        },
      ],
    },
  ],
  fastRefresh: {},
});
