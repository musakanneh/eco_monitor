import Vue from "vue";
import VueRouter from "vue-router";

/**
 * Router links
 */
import Home from "../views/Home";
import ShareData from "../views/ShareData";

/**
 * Router links end
 */
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
}, {
    path: "/shareData",
    name: "ShareData",
    component: ShareData,
}, ];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;