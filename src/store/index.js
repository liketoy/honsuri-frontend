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
	},
	mutations: {},
	actions: {},
	modules: {},
});
