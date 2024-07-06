import type { RouteRecordRaw } from 'vue-router'

export const AuthRoutes: RouteRecordRaw[] = [
  {
    name: 'auth-login',
    path: '/auth/login',
    meta: {
      layout: 'default'
    },
    component: () => import('../pages/login.vue')
  }
]
