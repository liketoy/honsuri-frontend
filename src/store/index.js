import Vue from "vue";
import Vuex from "vuex";
import api from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		feeds: [],
	},
	mutations: {
		SET_FEEDS(state, data) {
			state.feeds = data;
		},
	},
	actions: {
		async GET_FEEDS({ commit }) {
			const {
				data: { results },
			} = await api.feeds();
			commit("SET_FEEDS", results);
		},
		async POST_FEED({ dispatch }, obj) {
			const formData = new FormData();
			formData.append("caption", obj.caption);
			formData.append("photos", obj.photos);
			const res = await api.createFeed(formData);
			if (res.status === 201) {
				dispatch("GET_FEEDS");
			}
		},
	},
	modules: {},
});
