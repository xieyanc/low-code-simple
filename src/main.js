
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import GlobalData from './utils/global'

Vue.use(Element);

import draggable from "vuedraggable"
Vue.component("draggable", draggable)

const globalData = new GlobalData({
  request: axios,
  ui: Element
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
