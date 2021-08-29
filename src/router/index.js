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
		path: "/users/signout",
		name: "SignOut",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "signin" */ "../views/Auth/SignOut.vue"),
		beforeEnter: onlyAuthUser,
	},
	{
		path: "/users/findid",
		name: "FindId",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "signin" */ "../views/Auth/FindId.vue"),
		beforeEnter: rejectAuthUser,
	},
	{
		path: "/recipes",
		name: "Recipes",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "recipes" */ "../views/Recipes.vue"),
	},
	{
		path: "/feeds",
		name: "Feeds",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "feeds" */ "../views/Feeds.vue"),
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
		path: "/users/me/password",
		name: "Password",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "me" */ "../views/Users/Password.vue"),
		beforeEnter: onlyAuthUser,
	},
	{
		path: "/users/post",
		name: "Post",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "me" */ "../views/Users/Post.vue"),
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
	{
		path: "/conversation",
		name: "Conversation",
		component: () => import(/* webpackChunkName: "conversation" */ "../views/Conversation.vue"),
	},
	{
		path: "/recipes/:id",
		name: "RecipeDetail",
		component: () => import(/* webpackChunkName: "about" */ "../components/recipes/TheRecipeDetail.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

export default router;
