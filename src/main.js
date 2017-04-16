// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import Vuex from 'vuex'
/* eslint-disable no-new */
Vue.use(Vuex)
Vue.prototype.cWidth = document.body.clientWidth
Vue.prototype.cHeight = document.body.clientHeight
const store = new Vuex.Store({
  state: {
    toast: {
      success: false,
      cancel: false
    },
    selectedItems: [
      {
        name: 'Android',
        selected: false
      },
      {
        name: '前端',
        selected: true
      },
      {
        name: 'IOS',
        selected: false
      },
      {
        name: '后端',
        selected: false
      },
      {
        name: '设计',
        selected: false
      },
      {
        name: '产品',
        selected: false
      },
      {
        name: '工具资源',
        selected: false
      },
      {
        name: '阅读',
        selected: false
      }
    ]
  },
  mutations: {}
})
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App, FastClick }
}).$mount('#app')
router.push('/home')
