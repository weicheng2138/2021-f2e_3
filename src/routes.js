import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
	{ path: "/2021-f2e_2/", component: Home, meta: { title: "Home" } },
	{
		path: "/2021-f2e_2/about",
		meta: { title: "About" },
		component: About,
		// example of route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import('./views/About.vue')
	},
	{ path: "/2021-f2e_2/:path(.*)", component: NotFound },
];
