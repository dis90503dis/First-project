import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/foodmap',
      name: 'foodmap',
      component: () => import('../views/FoodMapView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqView.vue'),
    },
    {
      path: '/bmi',
      name: 'bmi',
      component: () => import('../views/BmiView.vue'),
    },
    {
      path: '/bmr',
      name: 'bmr',
      component: () => import('../views/BmrView.vue'),
    },
    {
      path: '/cal',
      name: 'cal',
      component: () => import('../views/CalView.vue'),
    },
    {
      path: '/gi',
      name: 'gi',
      component: () => import('../views/GiView.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/ArticleView.vue'),
    },
    {
      path: '/cookbook',
      name: 'cookbook',
      component: () => import('../views/CookbookView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue'),
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('../views/CarView.vue'),
    },
    {
      path: '/productinfo',
      name: 'productinfo',
      component: () => import('../views/ProductInfo.vue'),
    },
    {
      path: '/articleinfo',
      name: 'articleinfo',
      component: () => import('../views/ArticleInfo.vue'),
    },
    {
      path: '/cookbookinfo',
      name: 'cookbookinfo',
      component: () => import('../views/CookbookInfo.vue'),
    },
  ]
})

export default router
