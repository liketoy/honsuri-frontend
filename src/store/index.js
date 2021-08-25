import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isRemember: false,
		allGuestBookList: [],
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
		// 방명록 불러오기
		guestBookLoaded(state, payload) {
			state.allGuestBookList = payload; //payload로 넘어온 객체가 allGuestBookList에 저장됨 (배열형태)
			// 잘 불러와졌나 확인
			console.log(state.allGuestBookList);
			console.log("참 잘해써요");
		},
	},
	actions: {
		rememberCheck({ commit }) {
			commit("rememberChecked");
		},
		// guest book post GET 불러오기
		getGuestBookList({ commit }) {
			axios
				.get("http://photoshoot-backend.herokuapp.com/api/v1/feeds/")
				.then(res => {
					let loadedDatas = res.data.results;
					commit("guestBookLoaded", loadedDatas);
				})
				.catch(err => {
					console.log(err);
				});
		},

		// guest book post POST 등록하기
		uploadGuestBook({}, obj) {
			console.log(obj);
			const formData = new FormData();
			formData.append("caption", obj.caption);
			formData.append("photos", obj.photos);

			axios
				.post("http://photoshoot-backend.herokuapp.com/api/v1/feeds/", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then(res => {
					console.log("성공");
					console.log(res);
					this.dispatch("getGuestBookList");
				})
				.catch(err => {
					console.log("실패");
					console.log(err);
				});
		},
	},
	modules: {},
});
