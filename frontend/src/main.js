import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import axios from "axios";

axios.interceptors.request.use((config) => {
    console.log(config);
    return config;
})

createApp(App).use(router).mount('#app');
import "bootstrap/dist/js/bootstrap.js";
