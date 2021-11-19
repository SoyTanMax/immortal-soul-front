import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nft from '../views/NFT.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nft',
    name: 'Nft',
    component: Nft
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
