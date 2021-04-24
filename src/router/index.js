import Vue from "vue";
import VueRouter from "vue-router";

/**
 * Router links
 */
import Home from "../views/Home";
import ShareData from "../views/ShareData";
import SendMessage from "../views/SendMessage";

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
}, {
    path: "/send-message",
    name: "SendMessage",
    component: SendMessage,
}, ];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;