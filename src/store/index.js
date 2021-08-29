import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
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
	mutations: {},
	actions: {},
	modules: {},
});
