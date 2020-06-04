import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Read from "../views/Read.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:page?/:category?",
    name: "Home",
    component: Home,
    meta : {
      reuse: true
    }
    // props: (route) => ({
    //   page: route.params.page || 1,
    //   category: route.params.category || null,
    // }),
  },
  {
    path: "/read/:id",
    name: "Read",
    component: Read,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
