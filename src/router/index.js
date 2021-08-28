import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
	if (store.state.token) {
		// 이미 로그인된 유저 reject
		alert("이미 로그인 하였습니다.");
		next("/");
	} else {
		next();
	}
};

const onlyAuthUser = (to, from, next) => {
	if (!store.state.token) {
		alert("로그인이 필요합니다.");
		next("/");
	} else {
		next();
	}
};

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
	},
	{
		path: "/users/signin",
		name: "SignIn",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "signin" */ "../views/Auth/SignIn.vue"),
		beforeEnter: rejectAuthUser,
	},
	{
		path: "/users/signup",
		name: "SignUp",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "signin" */ "../views/Auth/SignUp.vue"),
		beforeEnter: rejectAuthUser,
	},
	{
		path: "/recipes",
		name: "Recipes",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/Recipes.vue"),
	},
	{
		path: "/users/me",
		name: "Me",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "me" */ "../views/Users/Me.vue"),
		beforeEnter: onlyAuthUser,
	},
	{
		path: "/users/fav",
		name: "Fav",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "me" */ "../views/Users/Fav.vue"),
		beforeEnter: onlyAuthUser,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
