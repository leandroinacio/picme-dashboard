import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VeeValidate from "vee-validate";
import axios from "axios";
import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VeeValidate);
Vue.config.productionTip = false;
axios.defaults.baseURL = "http://localhost:8082/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
