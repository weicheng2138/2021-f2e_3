import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
const BASE_URL = import.meta.env.BASE_URL;

const app = createApp(App);

const router = createRouter({
	history: createWebHistory(BASE_URL),
	routes,
});

app.use(router);
app.mount("#app");
