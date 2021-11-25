import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Novel from '../views/Novel.vue'
import NFT from '../views/NFT.vue'
import DAO from '../views/DAO.vue'
import FAQ from '../views/Faq.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/novel',
    name: 'Novel',
    component: Novel,
    props: true
  }
  ,
  {
    path: '/NFT',
    name: 'NFT',
    component: NFT,
    props: true
  }
  ,
  {
    path: '/DAO',
    name: 'DAO',
    component: DAO,
    props: true
  }
  ,
  {
    path: '/FAQ',
    name: 'Faq',
    component: FAQ,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
