import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import index from './components/index.vue'

// 引入element-ui / 需要在多个文件使用的库放在这里 
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';



// 需要Vue把VueRouter use一下
Vue.use(VueRouter);
// 把elementUI也use一下
Vue.use(ElementUI);
// 规则
const routes=[
  {
    path:'/',
    component:index
  },{
    path:'/index',
    component:index
  }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 将路由挂载到Vue实例上
  router
}).$mount('#app')
