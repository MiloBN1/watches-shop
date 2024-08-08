import { createRouter, createWebHistory } from 'vue-router'
import CartView from '@/components/pages/CartView.vue';
import HomeView from "@/components/pages/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
  ]
})

export default router
