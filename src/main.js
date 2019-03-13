// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick' // 引入FastClick
import HTTP from './lib/httpRequest'
import API from "./lib/api"
Vue.config.productionTip = false
Vue.prototype.$HTTP = HTTP
Vue.prototype.$API = API
// 使用 fastclick
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
