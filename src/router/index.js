import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainGuestBook from "../components/GuestBook/MainGuestBook.vue";
import WriteGuestBook from "../components/GuestBook/WriteGuestBook.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/guestbook",
		name: "read",
		component: MainGuestBook,
	},
	{
		path: "/guestbook/write",
		name: "wirte",
		component: WriteGuestBook,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
