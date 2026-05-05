import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/wpl",
      name: "wpl",
      component: () => import('@/views/WerkplekLeren.vue')
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import('@/views/ContactView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    const headerOffset = 80

    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: headerOffset,
      }
    }

    return { top: 0 }
  }
})

export default router
