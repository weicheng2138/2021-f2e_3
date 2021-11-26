import { createStore } from "vuex";
import auth from "./auth";
import tdxApi from "./tdxApi";

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: { auth, tdxApi },
});
