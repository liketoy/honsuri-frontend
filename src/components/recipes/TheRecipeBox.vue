<template>
	<div class="recipe_container">
		<div class="recipe_sub_container">
			<router-link :to="link" class="detailLink">
				<div class="recipe_image_container">
					<div class="recipe_image">
						<img :src="photos" :alt="photos" />
					</div>
					<div v-show="this.$store.state.token">
						<img class="bookmark" v-if="!recipe.bookmark" src="@/assets/icons/heart.png" alt="북마크" />
						<img class="bookmark" v-else src="@/assets/icons/red_heart.png" alt="북마크" />
					</div>
				</div>

				<div class="recipe_title">
					<p>{{ recipe.name }}</p>
					<div>{{ recipe.bookmark }}</div>
					<!-- <div>{{ this.$store.state.token }}</div> -->
				</div>
			</router-link>
			<div class="recipe_detail">
				<div>{{ recipe.base[0].name }}</div>
				<div>{{ recipe.flavor[0].name }}</div>
				<div v-if="recipe.alcohol_volume[0]">{{ recipe.alcohol_volume[0].name }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.recipe_container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.recipe_sub_container {
		width: 290px;
		/* overflow: hidden; */
		text-align: left;
	}
	.detailLink {
		cursor: pointer;
	}
	.recipe_image {
		object-fit: cover;
		/* z-index: 1; */
	}
	.recipe_image img {
		width: 290px;
		height: 290px;
		object-fit: cover;
	}
	.recipe_title {
		font-size: 20px;
		font-weight: 500;
		text-align: left;
		margin-top: 16px;
	}

	.recipe_detail {
		display: flex;
		height: 22px;
		gap: 10px;
		margin-top: 10px;
		width: 1000px;
	}
	.recipe_detail div {
		background: #dbdbdb;
		border-radius: 8px 8px 8px 8px;
		display: flex;
		align-items: center;
		text-align: center;
		padding: 0px 8px 2px 8px;
		color: #ffffff;
		font-size: 14px;
	}
	.recipe_sub_container .detailLink img {
		cursor: pointer;
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		-ms-transform: scale(1);
		-o-transform: scale(1);
		transform: scale(1);
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-ms-transition: 0.3s;
		-o-transition: 0.3s;
		transition: 0.3s;
	}
	.recipe_sub_container .detailLink:hover img {
		-webkit-transform: scale(1.05);
		-moz-transform: scale(1.05);
		-ms-transform: scale(1.05);
		-o-transform: scale(1.05);
		transform: scale(1.05);
	}
	.recipe_image_container {
		position: relative;
	}
	.bookmark {
		position: absolute;
		top: 10px;
		left: 250px;
		/* box-shadow: 1px 1px 10px 2px gray; */
		filter: brightness(80%);

		/* z-index: 2; */
		width: 30px;
		height: 30px;
	}
</style>

<script>
	// import { VueperSlides, VueperSlide } from "vueperslides";
	// import TheRecipeDetailVue from "./TheRecipeDetail.vue";

	import "vueperslides/dist/vueperslides.css";
	export default {
		name: "TheRecipeBox",
		props: ["recipe"],
		components: {
			// TheRecipeDetailVue,
			// VueperSlides,
			// VueperSlide,
		},
		data() {
			return {
				link: "/recipes/" + this.recipe.id,
				photos: require("@/assets/recipeImg/" + this.recipe.photo),
			};
		},
		methods: {
			// createBookmark: function () {
			// 	console.log("클릭");
			// 	this.$store.dispatch("CREAT_BOOKMARK", this.recipe.id, { message: "CREATE_BOOKMARK" });
			// },
		},
	};
</script>
