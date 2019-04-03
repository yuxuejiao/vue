import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  // 在根实例中注册store选项，该store实例会注入到根组件下的所有子组件。子组件能通过this.$store访问。
  store, 
  render: h => h(App)
}).$mount("#app");
