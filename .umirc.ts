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
          path: '/test',
          title: 'OX EXCHANGE',
          component: '@/pages/test',
        },
        {
          path: '/',
          title: 'OX EXCHANGE',
          component: '@/pages/Trade'
        },
        {
          path: '/trade',
          title: 'OX EXCHANGE',
          component: '@/pages/Trade'
        },
        {
          path: '/mm',
          title: 'Market Making',
          component: '@/pages/MM'
        },
        {
          path: '/launchpad',
          title: 'Launchpad',
          component: '@/pages/LaunchPad'
        },
        {
          path: '/launchpad/project/:projectId',
          title: 'Launchpad',
          component: '@/pages/LaunchPad/LaunchpadProject'
        }
      ],
    },
  ],
  fastRefresh: {},
});
