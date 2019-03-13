import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      name: 'launch',
      component: resolve => require(['@/view/launch/launch'], resolve)
    },
    {
      // 首页
      path: '/login',
      name: 'login',
      component: resolve => require(['@/view/login/login'], resolve)
    }
  ]
});
