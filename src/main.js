// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(Vuex)
fastclick.attach(document.body)
Vue.prototype.$http = axios;
Vue.use(VueLazyload, {

  loading: require('@/common/image/default.png')
})

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
