import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import login from './main/login.vue'
import register from './main/register.vue'

import account from './main/account.vue'
import goodslist from './main/goodslist.vue';



const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: login,
      children: [
        {
          path: 'account',
          component: account
        },
        {
          path: 'goodslist',
          component: goodslist
        }
      ]
    },
    { path: '/register', component: register }
  ],
  linkActiveClass: 'myactive'
})


export default router