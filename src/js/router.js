import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/members',
    name: 'members',
    component: () => import(/* webpackChunkName: "members" */ '../views/MembersView.vue'),
  },
  {
    path: '/outreach',
    name: 'outreach',
    component: () => import(/* webpackChunkName: "outreach" */ '../views/OutreachView.vue'),
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: () => import(/* webpackChunkName: "sponsors" */ '../views/SponsorsView.vue'),
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import(/* webpackChunkName: "resources" */ '../views/ResourcesView.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/NewsView.vue'),
  },
  {
    path: '/news/2022',
    name: 'news_2022',
    component: () => import(/* webpackChunkName: "news_2022" */ '../views/NewsView.vue'),
  },
  {
    path: '/news/2021',
    name: 'news_2021',
    component: () => import(/* webpackChunkName: "news_2021" */ '../views/NewsView.vue'),
  },
  {
    path: '/news/2020',
    name: 'news_2020',
    component: () => import(/* webpackChunkName: "news_2020" */ '../views/NewsView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
  },
]

const components = ['welcome', 'home', 'members', 'outreach', 'resources', 'news', 'contact', 'sponsors']
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (components.includes(to.name)) return
    if (savedPosition) {
      return savedPosition
    } else if (to.name) {
      console.log(to.name)
      if (to.matched.some(m => m.meta.scrollToBottom)) {
        return {
          top: 1000000,
          behavior: 'smooth',
        }
      }
      return {
        el: `#${to.name}`,
        top: 100,
        behavior: 'smooth',
      }
    }
  },
})

export default router
