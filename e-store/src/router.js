import { createRouter, createWebHistory } from "vue-router";

// Views
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";

// paths
const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
