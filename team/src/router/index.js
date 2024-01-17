import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front',
      component: () => import('../views/front/FrontLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/front/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/front/AboutView.vue'),
        },
        {
          path: '/foodmap',
          name: 'foodmap',
          component: () => import('../views/front/FoodMapView.vue'),
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('../views/front/ProductsView.vue'),
        },
        {
          path: '/faq',
          name: 'faq',
          component: () => import('../views/front/FaqView.vue'),
        },
        {
          path: '/bmi',
          name: 'bmi',
          component: () => import('../views/front/BmiView.vue'),
        },
        {
          path: '/bmr',
          name: 'bmr',
          component: () => import('../views/front/BmrView.vue'),
        },
        {
          path: '/cal',
          name: 'cal',
          component: () => import('../views/front/CalView.vue'),
        },
        {
          path: '/gi',
          name: 'gi',
          component: () => import('../views/front/GiView.vue'),
        },
        {
          path: '/article',
          name: 'article',
          component: () => import('../views/front/ArticleView.vue'),
        },
        {
          path: '/cookbook',
          name: 'cookbook',
          component: () => import('../views/front/CookbookView.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/front/ContactView.vue'),
        },
        {
          path: '/member',
          name: 'member',
          component: () => import('../views/front/MemberView.vue'),
        },
        {
          path: '/game',
          name: 'game',
          component: () => import('../views/front/GameView.vue'),
        },
        {
          path: '/car',
          name: 'car',
          component: () => import('../views/front/CarView.vue'),
        },
        {
          path: '/productinfo',
          name: 'productinfo',
          component: () => import('../views/front/ProductInfo.vue'),
        },
        {
          path: '/articleinfo',
          name: 'articleinfo',
          component: () => import('../views/front/ArticleInfo.vue'),
        },
        {
          path: '/cookbookinfo',
          name: 'cookbookinfo',
          component: () => import('../views/front/CookbookInfo.vue'),
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLogIn.vue')
    },
  ]
})

export default router
