import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/test',
    name: 'TestPage',
    component: () => import('@/views/TestPage')
  }
]

const router = new VueRouter({
  routes
})

export default router
