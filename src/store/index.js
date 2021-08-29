import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import api from "../api";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		audio: [],
		audioPlayed: [],
		musicIsPlaying: [],
		musics: [],
		recipe: [],
		recipes: [],
		sojuList: [],
		liquorList: [],
		beerList: [],
		wineList: [],
		fruitList: [],

		feeds: [],
		account: null,
		isLiked: false,
		token: null,
		isLoggedIn: false,
		userInfo: null,
		myPosts: [],
		favs: [],
	},
	mutations: {
		setMusics(state, data) {
			state.musics = data.data;
		},
		setRecipeOne(state, data) {
			state.recipe = data.data[0];
		},
		setRecipes(state, data) {
			state.recipes = data.data;
		},
		setSojuRecipes(state, data) {
			state.sojuList = data;
		},
		setLiquorRecipes(state, data) {
			state.liquorList = data;
		},
		setBeerRecipes(state, data) {
			state.beerList = data;
		},
		setWineRecipes(state, data) {
			state.wineList = data;
		},
		setFruitRecipes(state, data) {
			state.fruitList = data;
		},
		setMusicPlaying(state) {
			for (var i = 0; i < 4; i++) {
				state.musicIsPlaying[i] = false;
			}
		},
		//feeds를 가져온다.
		SET_FEEDS(state, feeds) {
			state.feeds = feeds;
		},
		LOGIN(state, payload) {
			state.isLoggedIn = true;
			state.token = payload.token;
			state.userInfo = payload.userData;
		},
		LOGOUT(state) {
			state.isLoggedIn = false;
			state.token = null;
			state.userInfo = null;
			localStorage.removeItem("token");
			router.push({ name: "Home" });
		},
		SET_USER(state, payload) {
			state.userInfo = payload.data;
		},
		SET_MYPOST(state, payload) {
			state.myPosts = payload.data;
		},
		SET_FAVS(state, payload) {
			state.favs = payload.data;
		},
	},
	actions: {
		async getMusics({ commit }) {
			const data = await api.musics();
			commit("setMusics", data);
		},
		async getRecipes({ state, commit }) {
			const data = await api.recipes(state.token);
			commit("setRecipes", data);
		},
		async getRecipesForBase({ state, commit }) {
			const data = await api.recipes(state.token);
			const sojulist = [];
			const liquorList = [];
			const beerList = [];
			const wineList = [];
			const fruitList = [];
			for (var i = 0; i < data.data.length; i++) {
				if (data.data[i].base[0].name == "소주") {
					sojulist.push(data.data[i]);
				} else if (data.data[i].base[0].name == "양주") {
					liquorList.push(data.data[i]);
				} else if (data.data[i].base[0].name == "맥주") {
					beerList.push(data.data[i]);
				} else if (data.data[i].base[0].name == "와인") {
					wineList.push(data.data[i]);
				} else if (data.data[i].base[0].name == "과일소주") {
					fruitList.push(data.data[i]);
				}
			}
			commit("setSojuRecipes", sojulist);
			commit("setLiquorRecipes", liquorList);
			commit("setBeerRecipes", beerList);
			commit("setWineRecipes", wineList);
			commit("setFruitRecipes", fruitList);
		},
		async getRecipeOne({ commit }, id) {
			const data = await api.recipe(id);
			commit("setRecipeOne", data);
		},
		async getMusicPlaying({ commit }) {
			commit("setMusicPlaying");
		},
		// async POST_SIGNUP(_, obj)
		async CREAT_BOOKMARK({ state }, obj) {
			console.log(obj.id);
			// console.log(obj.message);

			// console.log(obj.message);
			// console.log(state.token);
			// console.log(obj.message);

			const formData = new FormData();
			formData.append("message", obj.message);
			// console.log(id);

			const res = await api.createFeed(obj.id, state.token);
			// console.log("북마크 등록 성공");
			console.log("엥");

			if (res.status === 201) {
				console.log("북마크 등록 성공");
			} else {
				console.log("북마크 등록 실패");
			}
		},

		async GET_FEEDS({ commit }) {
			axios.get("http://ec2-18-215-16-128.compute-1.amazonaws.com:8000/post").then(response => {
				commit("SET_FEEDS", response.data);
			});
		},
		async POST_FEED({ state, dispatch }, obj) {
			// console.log(obj.content);
			const formData = new FormData();
			formData.append("content", obj.content);
			formData.append("image", obj.image);
			if (state.token === null) {
				alert("로그인해야합니다.");
			} else {
				const res = await api.createFeed(formData, state.token);
				if (res.status === 201) {
					dispatch("GET_FEEDS");
				}
			}
		},
		async POST_LOGIN({ dispatch }, obj) {
			try {
				console.log(obj);
				const {
					data: { token },
				} = await api.login(obj);
				if (token) {
					localStorage.setItem("token", token);
					dispatch("GET_USER");
					router.push({ name: "Home" });
				}
			} catch (e) {
				alert("아이디와 비밀번호를 확인해주세요.");
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
		async GET_USER({ commit }) {
			const token = localStorage.getItem("token");
			const { data: userData } = await api.userInfo(token);
			commit("LOGIN", { token, userData });
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
		async DELETE_USER({ state, commit }, obj) {
			try {
				const res = await api.userDelete(obj, state.token);
				console.log(res);
				commit("LOGOUT");
			} catch (e) {
				console.warn(e);
			}
		},
		async GET_MYPOST({ state, commit }) {
			try {
				const { status, data } = await api.userPost(state.token);
				if (status === 200) {
					commit("SET_MYPOST", { data });
				}
			} catch (e) {
				console.warn(e);
			}
		},
		async GET_FAV({ state, commit }) {
			try {
				const { status, data } = await api.userFav(state.token);
				console.log(data);
				if (status === 200) {
					commit("SET_FAVS", { data });
				}
			} catch (e) {
				console.warn(e);
			}
		},
		async FATCH_PASSWORD({ state }, obj) {
			try {
				const { status } = await api.userPassword(obj, state.token);
				if (status === 201) {
					router.push({ name: "Me" });
				}
			} catch (e) {
				console.warn(e);
			}
		},
	},
});
