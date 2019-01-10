import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
// import ElementUI from "/Users/s_takigawa/dev/github.com/shota-takigawa/countup_only_bull/app/element-ui";
// import "/Users/s_takigawa/dev/github.com/shota-takigawa/countup_only_bull/app/element-ui/lib/theme-chalk/index.css";
// import locale from "/Users/s_takigawa/dev/github.com/shota-takigawa/countup_only_bull/app/element-ui/lib/locale/lang/ja";

// Vue.use(ElementUI, { locale });
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import firebase from "./firebase";
import "./registerServiceWorker";

Vue.use(VueMaterial);
Vue.use(firebase);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
