import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import httpInterceptor from "./interceptor.js";
import store from './store'
import vue3GoogleLogin from  'vue3-google-login'

const CLIENT_ID = "461198306706-0goiivsfoa1770bi4e6rpip2m7d273bs.apps.googleusercontent.com"


httpInterceptor();

createApp(App).use(router).use(store).use(vue3GoogleLogin, {
    clientId: CLIENT_ID
}).mount('#app');
import "bootstrap/dist/js/bootstrap.js";
