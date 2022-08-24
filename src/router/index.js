import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    meta:{
      keepAlive:true
  }
  },{
    path: '/publish',
    name: 'publish',
    component: () => import('@/views/publish.vue'),
    meta:{
      keepAlive:true
  }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
