import axios from "axios";
import jsSHA from "jssha";

export const state = {
    isLoading: false,
    busInfos: [],
    busInfoStops: [],
    busInfoStatus: [],
    searchTerm: null,
};
export const actions = {
    async getBusInfo({ commit }, payload) {
        commit("setIsLoading", true);
        commit("setSearchTerm", payload);
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
            // console.log(response.data);
        } catch (error) {
            commit("setIsLoading", false);
            throw new Error(error);
        }
    },
    async getBusInfoDetail({ commit }, payload) {
        commit("setIsLoading", true);
        const STOPS_URL = `https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/Taipei/${payload}?$top=1&$format=JSON`;
        const STATUS_URL = `https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeNearStop/City/Taipei/${payload}?$format=JSON`;
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
            const stopsResponse = await axios.get(STOPS_URL, {
                headers: getAuthorizationHeader(),
            });
            commit("setBusInfoStops", stopsResponse.data[0].Stops);
            // console.log(stopsResponse.data[0].Stops);

            const statusResponse = await axios.get(STATUS_URL, {
                headers: getAuthorizationHeader(),
            });
            commit("setBusInfoStatus", statusResponse.data);

            commit("setIsLoading", false);
            // console.log(statusResponse.data);
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
    setBusInfoStops(state, payload) {
        state.busInfoStops = payload;
    },
    setBusInfoStatus(state, payload) {
        state.busInfoStatus = payload;
    },
    setIsLoading(state, payload) {
        state.isLoading = payload;
    },
    setSearchTerm(state, payload) {
        state.searchTerm = payload;
    },
};
export const getters = {
    getBusInfos: (state) => {
        return state.busInfos;
    },
    getIsLoading: (state) => {
        return state.isLoading;
    },
    getSearchTerm: (state) => {
        return state.searchTerm;
    },
    getStopsAndStatus: (state) => {
        if (
            state.busInfoStops.length &&
            state.busInfoStatus.length &&
            !state.isLoading
        ) {
            let direction0 = state.busInfoStops.map((stop) => {
                let containsSequenceId = state.busInfoStatus.some((status) => {
                    return (
                        stop.StopSequence == status.StopSequence &&
                        status.Direction == 0
                    );
                });
                return {
                    StopName: stop.StopName,
                    containsSequenceId: containsSequenceId,
                };
            });
            let direction1 = state.busInfoStops.map((stop) => {
                let containsSequenceId = state.busInfoStatus.some((status) => {
                    return (
                        stop.StopSequence == status.StopSequence &&
                        status.Direction == 1
                    );
                });
                return {
                    StopName: stop.StopName,
                    containsSequenceId: containsSequenceId,
                };
            });
            console.log([direction0, direction1]);
            return [direction0, direction1];
        }

        return [[], []];
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
};
