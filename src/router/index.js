import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: () => import(/* webpackChunkName: "pokedex" */ '../views/Pokedex.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
