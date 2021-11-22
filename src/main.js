import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory("/2021-f2e_2/"),
    routes,
});

app.use(router);
app.mount("#app");
