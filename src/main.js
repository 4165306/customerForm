import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 使用ANTD
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 使用右键菜单
import VContextMenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
Vue.use(Antd)
Vue.use(VContextMenu)

Vue.config.productionTip = false

require('@/mock/mock')

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
