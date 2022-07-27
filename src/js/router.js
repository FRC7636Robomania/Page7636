import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'), // lazy-loaded with a separate js chunk name.
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
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
