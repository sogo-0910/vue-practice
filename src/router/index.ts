import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FoodSelectView from '@/views/FoodSelectView.vue'
import BlogView from '@/views/BlogView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProfileView from '@/views/ProfileView.vue'
import PostsView from '@/views/profile/PostsView.vue'
import LikesView from '@/views/profile/LikesView .vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      // alias: ['/alias', '/array'], // パラメーターは付与できない
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:id',
      component: ProfileView,
      children: [
        {
          path: '',
          name: 'posts',
          component: PostsView,
        },
        {
          path: 'likes',
          name: 'likes',
          component: LikesView,
        },
      ],
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
      path: '/blog/id-:id?',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notFound',
      // redirect: { name: 'home' },
      component: NotFoundView,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return new Promise((resolve) => {
      setTimeout(() => {
        const header = document.querySelector('.header')
        const headerHeight = header ? header.clientHeight : 0

        if (savedPosition) {
          return resolve(savedPosition)
        }

        if (to.hash) {
          return resolve({
            el: to.hash,
            top: headerHeight,
            behavior: 'smooth',
          })
        }

        return resolve({
          top: 0,
          behavior: 'smooth',
        })
      }, 600)
    })
  },
})

export default router
