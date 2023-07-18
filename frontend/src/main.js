import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import httpInterceptor from "./interceptor.js";
import store from './store'

httpInterceptor();

createApp(App).use(router).use(store).mount('#app');
import "bootstrap/dist/js/bootstrap.js";
