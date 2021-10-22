import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Global CSS
import "normalize.css";
import "../src/assets/css/main.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { options } from "./plugins/vue-toastification/config";

Vue.use(Toast, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
