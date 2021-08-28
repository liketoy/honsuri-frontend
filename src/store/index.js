import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import api from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		feeds: [],
		account: null,
		isLiked: false,
	},
	mutations: {
		//feeds를 가져온다.
		SET_FEEDS(state, feeds) {
			state.feeds = feeds;
		},
	},
	actions: {
		async GET_FEEDS({ commit }) {
			axios.get("http://ec2-18-215-16-128.compute-1.amazonaws.com:8000/post").then(response => {
				commit("SET_FEEDS", response.data);
			});
		},
		async POST_FEED({ dispatch }, obj) {
			const formData = new FormData();
			formData.append("content", obj.content);
			formData.append("photos", obj.photos);
			const res = await api.createFeed(formData);
			if (res.status === 201) {
				dispatch("GET_FEEDS");
			}
		},
	},
	modules: {},
});
