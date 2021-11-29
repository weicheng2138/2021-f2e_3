import Home from "./views/Home.vue";
import BusInfo from "./views/BusInfo.vue";
import BusInfoDetail from "./views/BusInfoDetail.vue";
import BusStop from "./views/BusStop.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
	{ path: "/", component: Home, meta: { title: "Home" } },
	{
		path: "/businfo",
		meta: { title: "公車動態" },
		component: BusInfo,
		name: "BusInfo",
		props: true,
		// example of route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import('./views/About.vue')
	},
	{
		path: "/businfo/detail",
		meta: { title: "公車動態" },
		component: BusInfoDetail,
		name: "BusInfoDetail",
		props: true,
	},
	{
		path: "/businfo",
		meta: { title: "公車動態" },
		component: BusInfo,
		name: "BusInfo",
		props: true,
	},
	{
		path: "/busstop",
		meta: { title: "站牌搜尋" },
		component: BusStop,
	},
	{ path: "/:path(.*)", component: NotFound },
];
