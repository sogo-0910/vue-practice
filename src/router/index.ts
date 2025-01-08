import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FoodSelectView from '@/views/FoodSelectView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/food-select',
      name: 'foodSelect',
      component: FoodSelectView,
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogView,
    },
  ],
})

export default router
