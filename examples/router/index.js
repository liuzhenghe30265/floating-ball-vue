import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: resolve => require(['@/views/Home.vue'], resolve),
  // },
  // {
  //   path: '/About',
  //   name: 'About',
  //   component: resolve => require(['@/views/About.vue'], resolve),
  // },
]

const router = new VueRouter({
  routes
})

export default router
