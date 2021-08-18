import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		BoardComponent: [
			{ writer: "Allen", contents: "1", img: require("@/assets/images/Allen.png") },
			{ writer: "Joy", contents: "2", img: require("@/assets/images/Joy.png") },
			{ writer: "Linda", contents: "3", img: require("@/assets/images/Linda.png") },
			{ writer: "Yunnie", contents: "4", img: require("@/assets/images/Yunnie.png") },
			{ writer: "Elena", contents: "5", img: require("@/assets/images/Elena.png") },
			{ writer: "Jae", contents: "6", img: require("@/assets/images/Jae.png") },
			{ writer: "Jinu", contents: "7", img: require("@/assets/images/Jinu.png") },
			{ writer: "Woody", contents: "8", img: require("@/assets/images/Woody.png") },
		],

		cocktailRecipe: [
			{
				cocktailName: "스크류키스",
				base: "소주",
				img: require("@/assets/images/스크류키스.png"),
			},
			{
				cocktailName: "에너자이저주",
				base: "소주",
				img: require("@/assets/images/에너자이저주.png"),
			},
			{
				cocktailName: "진토닉",
				base: "양주",
				img: require("@/assets/images/진토닉.png"),
			},
			{
				cocktailName: "키스헌터",
				base: "소주",
				img: require("@/assets/images/키스헌터.png"),
			},
			{
				cocktailName: "하이볼",
				base: "양주",
				img: require("@/assets/images/하이볼.png"),
			},
			{
				cocktailName: "Old Fashioned",
				base: "양주",
				img: require("@/assets/images/Old_Fashioned.png"),
			},
			{
				cocktailName: "Sherry Cobbler",
				base: "양주",
				img: require("@/assets/images/Sherry_Cobbler.png"),
			},
			{
				cocktailName: "Tweak Classic",
				base: "양주",
				img: require("@/assets/images/Tweak_Classic.png"),
			},
		],

		// LandingIntrance Vue
		isRemember: false,
	},
	mutations: {},

	actions: {},
	modules: {},
});
