import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import { createPinia } from "pinia";

import  './assets/scss/styles.scss';

const app=createApp(App);
const pinia=createPinia();
app.use(pinia);
app.use(router).mount('#app');

import * as bootstrap from "bootstrap";