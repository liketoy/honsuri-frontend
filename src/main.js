import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFullPage from "vue-fullpage.js";

Vue.config.productionTip = false;

Vue.use(VueFullPage);

new Vue({
	router,
	store,
	beforeMount() {
		if (localStorage.getItem("token")) {
			this.$store.dispatch("GET_USER");
		}
	},
	render: h => h(App),
}).$mount("#app");
