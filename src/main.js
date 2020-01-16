import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
// let WordList = ['grit', 'creativity', 'impact', 'diversity', 'trust']
new Vue({
  render: h => h(App)
}).$mount("#app");

