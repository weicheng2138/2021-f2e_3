import axios from "axios";
import jsSHA from "jssha";

export const state = {
	isLoading: false,
	busInfos: [],
};
export const actions = {
	async getBusInfo({ commit }, payload) {
		commit("setIsLoading", true);
		const BASE_URL = `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/Taipei/${payload}?$format=JSON`;
		const getAuthorizationHeader = () => {
			var AppID = "5ce1ce0673f0463c9bf56da1be13a94c";
			var AppKey = "XZWZQqNvi2rjakOEN5ax0OCEehc";

			var GMTString = new Date().toGMTString();
			var ShaObj = new jsSHA("SHA-1", "TEXT");
			ShaObj.setHMACKey(AppKey, "TEXT");
			ShaObj.update("x-date: " + GMTString);
			var HMAC = ShaObj.getHMAC("B64");
			var Authorization =
				'hmac username="' +
				AppID +
				'", algorithm="hmac-sha1", headers="x-date", signature="' +
				HMAC +
				'"';
			return { Authorization: Authorization, "X-Date": GMTString };
		};

		try {
			const response = await axios.get(BASE_URL, {
				headers: getAuthorizationHeader(),
			});
			commit("setBusInfos", response.data);
			commit("setIsLoading", false);
			console.log(response.data);
		} catch (error) {
			commit("setIsLoading", false);
			throw new Error(error);
		}
	},
};

export const mutations = {
	setBusInfos(state, payload) {
		state.busInfos = payload;
	},
	setIsLoading(state, payload) {
		state.isLoading = payload;
	},
};
export const getters = {
	getBusInfos: (state) => {
		return state.busInfos;
	},
	getIsLoading: (state) => {
		return state.isLoading;
	},
};

export default {
	state,
	actions,
	mutations,
	getters,
	namespaced: true,
};
