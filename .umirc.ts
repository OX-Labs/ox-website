import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/Home' }],
  fastRefresh: {},
  title: 'HAYEK - Stablecoin & Forex Protocol',
});
