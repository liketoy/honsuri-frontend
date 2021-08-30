import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import api from "../api";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		audio: [],
		audioTwo: [],
		audioPlayed: [],
		audioPlayedTwo: [],
		musicIsPlaying: [],
		musicIsPlayingTwo: [],
		musics: [],
		recipe: [],
		recipes: [],
		sojuList: [],
		liquorList: [],
		beerList: [],
		wineList: [],
		fruitList: [],
		bookmark: null,
		feeds: [],
		comments: [],
		account: null,
		isLiked: false,
		token: null,
		isLoggedIn: false,
		userInfo: null,
		myPosts: [],
		favs: [],
		email: null,
		// 각 컴포넌트에서 get해서 저장할 question과 answer
		question: "",
		answer: [],
		// question id count
		qna_count: 1,
		// answer에 대한 value 저장
		dictMBTI: {
			E: 0,
			I: 0,
			S: 0,
			N: 0,
			T: 0,
			F: 0,
			P: 0,
			J: 0,
		},
		// user의 mbti 정보
		mbti_result: "",
		// true인 경우 추천 칵테일을 보여줌
		recommend: false,
		// recommend cocktail 에 대한 정보
		recommend_comment: "",
		recommend_cock_id: 999,
		recommend_cock: "",
		recommend_cock_photo: "",
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
		setMusicPlayingTwo(state) {
			for (var i = 0; i < 4; i++) {
				state.musicIsPlayingTwo[i] = false;
			}
		},
		setBookmark(state, data) {
			console.log(data.data);
			state.bookmark = data.data.bookmark;
		},
		//feeds를 가져온다.
		SET_FEEDS(state, feeds) {
			state.feeds = feeds;
		},
		SET_COMMENTS(state, comments) {
			state.comments = comments;
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
			// commit("setBookmark", data);
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
		async getRecipeOne({ state, commit }, id) {
			const data = await api.recipe(id, state.token);
			commit("setRecipeOne", data);
		},
		async getMusicPlaying({ commit }) {
			commit("setMusicPlaying");
		},
		async getMusicPlayingTwo({ commit }) {
			commit("setMusicPlayingTwo");
		},
		// async POST_SIGNUP(_, obj)
		async CREAT_BOOKMARK({ state }, obj) {
			// console.log(obj.message);

			// console.log(obj.message);
			// console.log(state.token);
			// console.log(obj.message);

			// const formData = new FormData();
			// formData.append("message", obj.message);
			// console.log(id);

			const res = await api.bookmark(obj.id, state.token);
			// console.log("북마크 등록 성공");
			// console.log(res);

			if (res.status === 200) {
				// console.log("북마크 등록 성공");
			} else {
				// console.log("북마크 등록 실패");
			}
		},
		async GET_FEEDS({ commit, state }) {
			const response = await api.feeds(state.token);
			commit("SET_FEEDS", response.data);
		},
		async POST_FEED({ state, dispatch }, obj) {
			const formData = new FormData();
			formData.append("content", obj.content);
			formData.append("image", obj.image);
			console.log(obj.image);
			if (state.token === null) {
				alert("로그인해야합니다.");
			} else {
				const res = await api.createFeed(formData, state.token);
				if (res.status === 201) {
					dispatch("GET_FEEDS");
				}
			}
		},
		async GET_COMMENTS({ commit }, id) {
			axios.get("https://honsuri-backend.herokuapp.com/post/" + id + "/comment").then(response => {
				console.log("https://honsuri-backend.herokuapp.com/post/" + id + "/comment");
				commit("SET_COMMENTS", response.data);
			});
		},
		async POST_COMMENT({ state, dispatch }, obj) {
			const formData = new FormData();
			formData.append("commentContent", obj.commentContent);
			console.log("포스트의id:" + obj.id);
			const res = await api.createComments(formData, state.token, obj.post);
			if (res.status === 201) {
				dispatch("GET_COMMENTS", obj.post);
			}
		},
		async POST_LOGIN({ dispatch }, obj) {
			try {
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
		async POST_FINDID({ state }, obj) {
			const { status, data } = await api.userFindId(obj);
			if (status === 401) {
				alert("일치하는 EMAIL이 없습니다.");
			} else if (status === 200) {
				state.email = data[0];
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
		async POST_LIKE({ state }, id) {
			try {
				await api.createLike(id, state.token);
			} catch (e) {
				console.warn(e);
			}
		},
	},
	modules: {},
});
