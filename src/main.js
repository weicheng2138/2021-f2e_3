import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import store from "@/store";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
app.use(store);
app.use(router);
app.mount("#app");
