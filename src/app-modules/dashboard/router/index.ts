import type { RouteRecordRaw } from 'vue-router'

export const DashboardRoutes: RouteRecordRaw[] = [
  {
    name: 'dashbord-index',
    path: '/',
    meta: {
      layout: 'sidebar'
    },
    component: () => import('../pages/index.vue')
  }
]
