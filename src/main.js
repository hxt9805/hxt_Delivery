import "lib-flexible/flexible" //引入第三方库, 作用: flexible会自动根据设备情况动态设置rem的值的大小


import Vue from 'vue'
import router from "./router"; // 引入路由器
import App from './App.vue'
 

//关闭生产模式的vue提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router // 配置路由器, 所有组件都能读到$router和$route
}).$mount('#app')

// new Vue({
//   components:{App},
//   template:`<App />`
// }).$mount('#app')
