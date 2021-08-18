import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isRemember: false,
	},
	mutations: {
		rememberChecked(state) {
			state.isRemember = !state.isRemember;
			if (state.isRemember == true) {
				localStorage.setItem("remember", true);
			} else {
				localStorage.removeItem("remember");
			}
		},
	},
	actions: {
		rememberCheck({ commit }) {
			commit("rememberChecked");
		},
	},
	modules: {},
});
