import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FoodSelectView from '@/views/FoodSelectView.vue'
import BlogView from '@/views/BlogView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
      // default: ([^/]+) /以外の文字全てという意味
      // +にすると/区切りで配列にしてくれる
      // ?にするとリアクティブな値がなくても表示される
      // *にすると+と?の２つの指定ができる
      path: '/blog/id-:id*',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notFound',
      component: NotFoundView,
    },
  ],
})

export default router
