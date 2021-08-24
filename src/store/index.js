import Vue from "vue";
import Vuex from "vuex";
import api from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		feeds: [],
	},
	mutations: {
		setFeeds(state, data) {
			state.feeds = data;
		},
	},
	actions: {
		async getFeeds({ commit }) {
			const {
				data: { results },
			} = await api.feeds();
			commit("setFeeds", results);
		},
	},
	modules: {},
});
