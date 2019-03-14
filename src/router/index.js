import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      // 首页
      path: '/',
      name: 'launch',
      component: resolve => require(['@/view/launch/launch'], resolve)
    },
    {
      // 登录
      path: '/login',
      name: 'login',
      component: resolve => require(['@/view/login/login'], resolve)
    },
    {
      // 忘记密码
      path: '/password',
      name: 'password',
      component: resolve => require(['@/view/password/password'], resolve)
    },
    {
      // 主页面
      path: '/main',
      name: 'main',
      redirect: '/main/index',
      component: resolve => require(['@/view/main/index'], resolve),
      children: [
        //首页
        {
          path: 'index',
          name: 'index',
          component: resolve => require(['@/view/main/index/index'], resolve),
        },
        //城市
        {
          path: 'city',
          name: 'city',
          component: resolve => require(['@/view/main/city/city'], resolve),
        },
        //VR
        {
          path: 'VR',
          name: 'VR',
          component: resolve => require(['@/view/main/VR/VR'], resolve),
        },
        //即购
        {
          path: 'buy',
          name: 'buy',
          component: resolve => require(['@/view/main/buy/buy'], resolve),
        },
        //我的
        {
          path: 'member',
          name: 'member',
          component: resolve => require(['@/view/main/member/member'], resolve),
        }
      ]
    },
  ]
});
