import { createRouter, createWebHistory } from "vue-router";

// Views
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import ProductDetails from "./views/ProductDetails.vue";

// paths
const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: "/productDetails/:prodID", component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
