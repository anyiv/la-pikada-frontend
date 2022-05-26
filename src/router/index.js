import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";
import Products from "../views/Products.vue";
import Personal from "../views/Personal.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: '/products',
    name: "products",
    component: Products
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
