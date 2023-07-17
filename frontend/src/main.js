import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import httpInterceptor from "./interceptor.js";

httpInterceptor();

createApp(App).use(router).mount('#app');
import "bootstrap/dist/js/bootstrap.js";
