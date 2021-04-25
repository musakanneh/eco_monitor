import Vue from "vue";
import VueRouter from "vue-router";

/**
 * Router links
 */
import Home from "../views/Home";
import ShareData from "../views/ShareData";
import SendMessage from "../views/SendMessage";
import Register from "../views/Register";
import Faq from "../views/Faq";

/**
 * Router links end
 */
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home,
}, {
    path: "/shareData",
    name: "ShareData",
    component: ShareData,
}, {
    path: "/message",
    name: "SendMessage",
    component: SendMessage,
}, {
    path: "/register",
    name: "register",
    component: Register,
}, {
    path: "/faq",
    name: "faq",
    component: Faq,
}, ];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;