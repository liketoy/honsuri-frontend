<template>
	<div>
		<user-layout-vue>
			<h2 class="user__title">My Favorite</h2>
			<div class="userinput__container">
				{{ favs }}
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

	export default {
		name: "Fav",
		components: {
			UserLayoutVue,
		},
		methods: {},
		computed: {
			favs() {
				return this.$store.state.favs;
			},
		},
		created() {
			this.$store.dispatch("GET_FAV");
		},
	};
</script>
