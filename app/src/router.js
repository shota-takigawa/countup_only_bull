import Vue from "vue";
import Router from "vue-router";
import Countup from "./views/Countup.vue";
import MyPage from "./views/MyPage.vue";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "signin"
    },
    {
      path: "/countup",
      name: "countup",
      component: Countup,
      meta: { requiresAuth: true }
    },
    {
      path: "/mypage",
      name: "mypage",
      component: MyPage,
      meta: { requiresAuth: true }
    },
    {
      path: "/cricket",
      name: "cricket",
      // route level code-splitting
      // this generates a separate chunk (Cricket.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "Cricket" */ "./views/Cricket.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requireAuth);
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    this.$firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        next();
      } else {
        next({
          path: "/signin",
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    next(); // next() を常に呼び出すようにしてください!
  }
});

export default router;
