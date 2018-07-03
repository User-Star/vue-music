import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

Vue.config.productionTip = false


/* 去掉body中所有点击事件300毫秒延迟 */
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/logo.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
