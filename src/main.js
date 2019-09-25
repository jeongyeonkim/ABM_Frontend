import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueRouter from 'vue-router';

Vue.prototype.$http = Vue.prototype.axios = axios

Vue.use(vuetify)
Vue.use(VueRouter)
Vue.use(VueSession)
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
