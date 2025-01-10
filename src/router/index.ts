import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const FoodSelectView = () => import('@/views/FoodSelectView.vue')
const BlogView = () => import('@/views/BlogView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')
const ProfileView = () => import('@/views/ProfileView.vue')
const PostsView = () => import('@/views/profile/PostsView.vue')
const LikesView = () => import('@/views/profile/LikesView .vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      // alias: ['/alias', '/array'], // パラメーターは付与できない
      meta: {
        title: 'homeTitle',
      },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/profile-:id',
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
      // beforeEnter(to, from) { // パラメーターが変更された時は実行されない
      //   return { name: 'home' }
      // },
      // meta: {
      //   requireAuth: true,
      // },
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

// router.beforeEach((to) => {
//   if (to.name === 'blog') {
//     return { name: 'home' }
//   }
//   if (!to.meta.requireAuth) {
//     return { name: 'home' }
//   }
//   return true
// })

// router.beforeResolve((to, from) => { // ページの移動が終わる前
//   console.log('beforeResolve', to, from)
// })

// router.afterEach((to, from) => { // ページの移動が終わった後に実行
//   console.log('afterEach', to, from)
// })

export default router
