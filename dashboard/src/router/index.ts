import { createRouter, createWebHistory } from "vue-router";
import { Auth, Dashboard } from "@/views";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
