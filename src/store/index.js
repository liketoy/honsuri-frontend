import Vue from "vue";
import Vuex from "vuex";
import api from "../api";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: null,
		isLoggedIn: false,
		userInfo: null,
	},
	mutations: {
		LOGIN(state, payload) {
			state.isLoggedIn = true;
			state.token = payload.token;
			state.userInfo = payload.userData;
		},
		LOGOUT(state) {
			state.isLoggedIn = false;
			state.token = null;
			state.userInfo = null;
			router.push({ name: "Home" });
		},
		SET_USER(state, payload) {
			state.userInfo = payload.data;
		},
	},
	actions: {
		async POST_LOGIN({ commit }, obj) {
			try {
				const {
					data: { token },
				} = await api.login(obj);
				if (token) {
					const { data: userData } = await api.userInfo(token);
					commit("LOGIN", { token, userData });
					router.push({ name: "Home" });
				}
			} catch (e) {
				console.warn(e);
			}
		},
		async POST_SIGNUP(_, obj) {
			try {
				const { status } = await api.createAccount(obj);
				if (status === 201) {
					router.push({ name: "SignIn" });
				}
			} catch (e) {
				console.warn(e);
			}
		},
		async PATCH_USER({ state, commit }, obj) {
			try {
				const { status, data } = await api.userUpdate(obj, state.token);
				if (status === 200) {
					commit("SET_USER", { data });
				}
			} catch (e) {
				console.warn(e);
			}
		},
		async DELETE_USER({ state, commit }) {
			try {
				await api.userDelete(state.token);
				commit("LOGOUT");
			} catch (e) {
				console.warn(e);
			}
		},
	},
	modules: {},
});
