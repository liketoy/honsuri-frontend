<template>
	<div class="">
		<TheHeaderVue :color="black" />
		<GuestBookHeader />
		<GuestBookAdd />
		<GuestBookUpload />
		<GuestBookPost />
	</div>
</template>

<style>
	body {
		background-color: #ededed;
	}
</style>

<script>
	import TheHeaderVue from "../components/TheHeader.vue";
	import GuestBookHeader from "../components/guest_book/GuestBookHeader.vue";
	import GuestBookAdd from "../components/guest_book/GuestBookAdd.vue";
	import GuestBookPost from "../components/guest_book/GuestBookPost.vue";
	import GuestBookUpload from "../components/guest_book/GuestBookUpload.vue";

	export default {
		name: "GuestBook",
		components: {
			TheHeaderVue,
			GuestBookAdd,
			GuestBookPost,
			GuestBookUpload,
			GuestBookHeader,
		},
		data() {
			return {
				black: "#191919",
			};
		},
		beforeCreate() {
			this.$store.dispatch("getGuestBookList");
		},
	};
</script>
