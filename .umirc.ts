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
          component: '@/pages/Exchange/Trade'
        },
        {
          path: '/exchange/markets',
          title: 'OX EXCHANGE',
          component: '@/pages/Exchange/Markets'
        },
        {
          path: '/exchange/trade',
          title: 'OX EXCHANGE',
          component: '@/pages/Exchange/Trade'
        },
        {
          path: '/exchange/launchpad',
          title: 'Launchpad',
          component: '@/pages/Exchange/LaunchPad'
        },
        {
          path: '/exchange/launchpad/project/:projectId',
          title: 'Launchpad',
          component: '@/pages/Exchange/LaunchPad/LaunchpadProject'
        },
        {
          path: '/exchange/launchpad/createpresale',
          title: 'Launchpad',
          component: '@/pages/Exchange/LaunchPad/CreatePresale'
        },
        {
          path: '/exchange/mm',
          title: 'Market Making',
          component: '@/pages/Exchange/MM'
        },
        {
          path: '/wallet/swap',
          title: 'OX EXCHANGE',
          component: '@/pages/Wallet/Swap'
        },
        {
          path: '/wallet/account',
          title: 'OX EXCHANGE',
          component: '@/pages/Wallet/Assets'
        },
        {
          path: '/investment',
          title: 'OX EXCHANGE',
          component: '@/pages/Investment'
        },
      ],
    },
  ],
  fastRefresh: {},
});
