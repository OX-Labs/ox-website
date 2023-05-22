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
          component: '@/pages/Trade'
        },
        {
          path: '/exchange/markets',
          title: 'OX EXCHANGE',
          component: '@/pages/Markets'
        },
        {
          path: '/exchange/trade',
          title: 'OX EXCHANGE',
          component: '@/pages/Trade'
        },
        {
          path: '/exchange/launchpad',
          title: 'Launchpad',
          component: '@/pages/LaunchPad'
        },
        {
          path: '/exchange/launchpad/project/:projectId',
          title: 'Launchpad',
          component: '@/pages/LaunchPad/LaunchpadProject'
        },
        {
          path: '/wallet/trade',
          title: 'OX EXCHANGE',
          component: '@/pages/Wallet/Trade'
        },
        {
          path: '/mm',
          title: 'Market Making',
          component: '@/pages/MM'
        },
      ],
    },
  ],
  fastRefresh: {},
});
