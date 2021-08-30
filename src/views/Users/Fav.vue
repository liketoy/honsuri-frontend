<template>
	<div>
		<user-layout-vue>
			<h2 class="user__title">My Favorite</h2>
			<div class="userinput__container">
				<div class="grid__container">
					<TheRecipeBoxVue v-for="fav in favs" :recipe="fav" :key="fav.id" />
				</div>
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
	.grid__container {
		display: grid;
		margin: 0 auto;
		grid-template-columns: repeat(2, 1fr);
	}
</style>

<script>
	import TheRecipeBoxVue from "../../components/recipes/TheRecipeBox.vue";
	import UserLayoutVue from "../../components/user/UserLayout.vue";

	export default {
		name: "Fav",
		components: {
			UserLayoutVue,
			TheRecipeBoxVue,
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
