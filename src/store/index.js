import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: { //data
		// SectionCocktail Vue
		cocktailRecipe: [
			{ cocktailName: "스크류키스", base: "소주", img: require("@/assets/images/스크류키스.png") },
			{ cocktailName: "에너자이저주", base: "소주", img: require("@/assets/images/에너자이저주.png") },
			{ cocktailName: "진토닉", base: "양주", img: require("@/assets/images/진토닉.png") },
			{ cocktailName: "키스헌터", base: "소주", img: require("@/assets/images/키스헌터.png") },
			{ cocktailName: "하이볼", base: "양주", img: require("@/assets/images/하이볼.png") },
			{ cocktailName: "Old Fashioned", base: "양주", img: require("@/assets/images/Old_Fashioned.png") },
			{ cocktailName: "Sherry Cobbler", base: "양주", img: require("@/assets/images/Sherry_Cobbler.png") },
			{ cocktailName: "Tweak Classic", base: "양주", img: require("@/assets/images/Tweak_Classic.png") },
		],

		// LandingIntrance Vue
		isRemember : false
		
	},
	mutations: {
		// btnDisable(state){
		// 	state.intranceBtnActive = false;
		// },
		// btnAble(state){
		// 	state.intranceBtnActive = true;
		// },
		// intranceSuccess(state){
		// 	state.intranceContainerDisable = false
		// }
	},
	actions: {
	},
	modules: {},
});
