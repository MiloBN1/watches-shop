import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },

  ]
})

export default router
