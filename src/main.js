import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from '@/router/routers'
import Bmob from "hydrogen-js-sdk";
import Bgjs from '@/js/bg.js'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.use(Bgjs)
// 挂载到全局使用
Vue.prototype.Bmob = Bmob
// 自定义一个过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
// Vue.filter("sipnit",function(value){
//   return value.slice(0,100)+"...";
// })
const router = new VueRouter({
  routes:Routes,//创建路由
  mode:"hash"
})
// 初始化 SDK版本 2.0.0 以下保留之前的初始化方法
Bmob.initialize("8a16435f7cad2cb9", "093127");
// 在调试模式下面开启
Bmob.debug(true)
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
