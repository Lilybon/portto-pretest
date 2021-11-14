import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/assets/',
    name: 'AssetList',
    component: () => import('../views/AssetList.vue')
  },
  {
    path: '/assets/:contractAddress/:tokenId',
    name: 'AssetDetail',
    component: () => import('../views/AssetDetail.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
