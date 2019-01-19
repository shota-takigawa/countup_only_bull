import Vue from "vue";
import Router from "vue-router";
import Countup from "./views/Countup.vue";
import MyPage from "./views/MyPage.vue";
import SignUp from "./views/SignUp.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      name: "signup",
      component: SignUp
    },
    {
      path: "/",
      name: "countup",
      component: Countup
    },
    {
      path: "/mypage",
      name: "mypage",
      component: MyPage
    },
    {
      path: "/cricket",
      name: "cricket",
      // route level code-splitting
      // this generates a separate chunk (Cricket.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "Cricket" */ "./views/Cricket.vue")
    }
  ]
});
