import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../components/NotFound.vue'

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
    path: '/outreach/:outreachYearId/:outreachId',
    name: 'outreach_event',
    component: () => import('../views/OutreachView.vue'),
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
    path: '/slides/:slideId/:yearId',
    name: 'news_year',
    component: () => import('../views/NewsView.vue'),
  },
  {
    path: '/slides/:slideId',
    redirect: '/news',
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: PageNotFound,
    hidden: true,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    hidden: true,
  },
]

const components = ['members', 'outreach', 'resources', 'news', 'contact', 'sponsors']
const specialComponents = ['welcome', 'home', 'NotFound']
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.name === 'outreach_event') {
      return {
        el: `#${to.params.outreachYearId}-${to.params.outreachId}`,
        top: 150,
        behavior: 'smooth',
      }
    } else if (to.name === 'news_year') {
      return {
        el: `#${to.params.slideId}-${to.params.yearId}`,
        top: 100,
        behavior: 'smooth',
      }
    }
  },
})

export default router
export { components, specialComponents, router }
