import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"

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
            path: "/202602",
            component: () => import("../views/2026/202602.vue"),
        },
        {
            path: "/202601",
            component: () => import("../views/2026/202601.vue"),
        },
    ],
})

export default router
