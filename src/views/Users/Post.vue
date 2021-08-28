<template>
	<div>
		<user-layout-vue>
			<h2 class="user__title">내가 쓴 글</h2>
			<div class="userinput__container">
				<TheFeedCardVue v-for="feed in feeds" :key="feed.id" :feed="feed" />
			</div>
		</user-layout-vue>
	</div>
</template>

<style scoped>
	.user__title {
		font-size: 36px;
		font-weight: 600;
		padding-bottom: 30px;
		border-bottom: 1px solid #767676;
	}
	.userinput__container {
		padding: 30px 0;
	}
</style>

<script>
	import UserLayoutVue from "../../components/user/UserLayout.vue";
	import TheFeedCardVue from "../../components/Feed/TheFeedCard.vue";

	export default {
		name: "Post",
		components: {
			UserLayoutVue,
			TheFeedCardVue,
		},
		methods: {},
		computed: {
			feeds() {
				return this.$store.state.myPosts;
			},
		},
		created() {
			this.$store.dispatch("GET_MYPOST");
		},
	};
</script>
