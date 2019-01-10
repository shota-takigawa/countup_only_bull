import Vue from "vue";
import Router from "vue-router";
import Countup from "./views/Countup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "countup",
      component: Countup
    },
    {
      path: "/ricket",
      name: "cricket",
      // route level code-splitting
      // this generates a separate chunk (Cricket.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "Cricket" */ "./views/Cricket.vue")
    }
  ]
});
