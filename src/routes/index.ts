import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/dashboard/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import('@/pages/404/index.vue'),
  },
  // 匹配所有路径 vue2使用* vue3使用/:pathMatch(.*)或/:catchAll(.*)
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
];

// 路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
