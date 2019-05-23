import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'
import login from './main/login.vue'
import register from './main/register.vue'

const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/register', component: register }
  ],
  linkActiveClass: 'myactive'
})

const vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})





