import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../components/dashboard.vue';
import NotFoundPage from '../components/error/404.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DashboardPage
  },
  {
    path: '/about',
    name: 'About',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
