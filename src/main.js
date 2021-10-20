import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueWait from 'vue-wait'

// Components
Vue.use(VueWait);

// Global CSS
import 'normalize.css';
import '../src/assets/css/main.css';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  wait: new VueWait(),
  render: h => h(App)
}).$mount('#app')
