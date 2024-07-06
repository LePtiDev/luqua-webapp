import { createRouter, createWebHistory } from 'vue-router'
import { AuthRoutes } from '~/app-modules/auth/router'
import { DashboardRoutes } from '~/app-modules/dashboard/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...AuthRoutes, ...DashboardRoutes]
})

export default router
