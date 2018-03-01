import Vue from 'vue'
import App from './App.vue'


import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import $ from 'n-zepto'
import routers from './router'
import store from './store/index.js'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';


import common from './assets/js/common.js'
import touch from './assets/js/touch.js'
import catejs from './assets/js/category.js'
import swipe_jq from './assets/js/swiper-3.4.2.jquery.min.js'
import swipe from './assets/js/swiper-3.4.2.min.js'
import indexjs from './assets/js/index.js'

// 操作cookie的封装方法接口
import { setCookie,getCookie,delCookie} from './assets/js/cookie'

// 接口api 全局变量
import global_ from "./assets/js/Global";


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(MintUI);

Vue.prototype.GLOBAL = global_

const router = new VueRouter({
  // mode: 'history',
  routes: routers,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// 这个官方名字叫导航守卫，挺形象的
router.beforeEach((to, from, next) => {
  // 如果是去登录或注册，那就先把user移除
  if (to.path === '/login' || to.path === '/regin') {
    delCookie('userid');
    delCookie('name');	
    console.log('登录')
  }
  let user = getCookie('userid')
  if (!user && (to.path === '/member' )) {
   next({ path: '/login' })
  } else {
   next()
  }
})

new Vue({
  el: '#app',
  router,
  store,  //挂载store
  template: '<app/>',
  components: { App }
})
