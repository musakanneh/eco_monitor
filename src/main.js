import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import firebase from "firebase/app"

/* eslint-disable */
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// import "font-awesome/css/font-awesome.min.css";

/**
 * Firebase configuration for the backend server
 */
const firebaseConfig = {
    apiKey: "AIzaSyBs2nmguHUoj63mLmPgYMo9kJgGOlwVrUc",
    authDomain: "eco-monitor-90a2f.firebaseapp.com",
    projectId: "eco-monitor-90a2f",
    storageBucket: "eco-monitor-90a2f.appspot.com",
    messagingSenderId: "117749325643",
    appId: "1:117749325643:web:6a57bdbd73cba004fc92ce"
};
/**
 * Initialize Firebase
 * 
 */
firebase.initializeApp(firebaseConfig);


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')