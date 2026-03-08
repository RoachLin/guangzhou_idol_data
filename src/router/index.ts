import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/about",
      component: AboutView,
    },
    {
      path: "/raw_data_202601",
      component: () => import("../views/raw_data/2026/RawData202601.vue"),
    },
    {
      path: "/raw_data_202602",
      component: () => import("../views/raw_data/2026/RawData202602.vue"),
    },
  ],
});

export default router;
