import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
const BASE_URL = import.meta.env.BASE_URL;

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
	{ path: BASE_URL + "/", component: Home, meta: { title: "Home" } },
	{
		path: BASE_URL + "/about",
		meta: { title: "About" },
		component: About,
		// example of route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import('./views/About.vue')
	},
	{ path: BASE_URL + "/:path(.*)", component: NotFound },
];
