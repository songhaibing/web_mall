import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { // 登录
      path: '/',
      name: 'login',
      component: resolve => require(['@/view/login/login'], resolve),
    },
    { // 首页
      path: '/index',
      name: 'index',
      component: resolve => require(['@/view/index/index'], resolve),
    },
  ]
})
