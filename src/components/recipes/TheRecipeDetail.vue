<template>
	<div class="recipe">
		<TheHeaderVue :color="black" />

		<div class="container">
			<div class="recipe_contents">
				<div class="recipe_image"><img :src="require('@/assets/recipeImg/' + recipe.photo)" /></div>
				<!-- <div class="recipe_image"><img :src="photos" :alt="photos" /></div> -->
				<div class="recipe_expain">
					<div class="recipe_item">
						<p class="recipe_title">{{ recipe.name }}</p>
						<div v-show="this.$store.state.token">
							<div v-if="recipe.bookmark === true">
								<div class="bookmark" @click="createBook">My Favorite</div>
							</div>
							<div v-else>
								<div class="bookmark_none" @click="createBook">+ My Favorite</div>
							</div>
						</div>
					</div>
					<div class="line"></div>
					<p class="recipe_sub_title">INGREDIENTS</p>
					<div class="recipe_ingredient">
						<div v-for="(ingredient, i) in recipe.ingredient" :key="i">
							<div v-if="i + 1 == recipe.ingredient.length">{{ ingredient["name"] }}</div>
							<div v-else>{{ ingredient["name"] }},</div>
						</div>
					</div>

					<p class="recipe_sub_title">HOW TO MIX</p>

					<div class="recipe_how_to_mix">
						<div v-for="i in recipe.how_to_mix.split('/n').length" :key="i">
							<div v-html="recipe.how_to_mix.split('/n')[i - 1].replace(/(?:\\n|\r\n|\r|\n)/g, '<p/>')"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="recipe_detail">
				<p>상세 레시피</p>
				<p class="recipe_detail_contents" v-html="recipe.detail_contents.replace(/(?:\\n|\r\n|\r|\n)/g, '<p/>')"></p>
				<!-- <p class="recipe_detail_title">동영상</p> -->
				<!-- <div>{{ recipe.youtube_link }}</div> -->
				<!-- <iframe
					width="729"
					height="444"
					:src="recipe.youtube_link"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe> -->
			</div>
		</div>
	</div>
</template>

<style scoped>
	.recipe {
		display: flex;
		align-content: center;
		justify-content: center;

		margin-top: 180px;
		padding-bottom: 100px;
	}
	.container {
		width: 1280px;
		text-align: left;
	}
	.recipe_image img {
		width: 450px;
		height: 450px;
		/* z-index: 2; */
	}
	.recipe_contents {
		display: flex;
	}
	.recipe_expain {
		text-align: left;
		margin-left: 50px;
	}
	.recipe_item {
		display: flex;
		align-items: center;
		/* align-content: center; */
	}
	.bookmark_none,
	.bookmark {
		width: 113px;
		height: 34px;
		border-radius: 4px 4px 4px 4px;
		color: #ffffff;
		text-align: center;
		line-height: 34px;
		margin-left: 20px;
		font-size: 16px;
		font-weight: 300;
		cursor: pointer;
	}
	.bookmark_none {
		background: #111111;
	}
	.bookmark {
		background: #ff4343;
	}
	.recipe_expain .recipe_title,
	.recipe_detail {
		font-size: 30px;
		font-weight: 600;
	}
	.recipe_expain .line {
		width: 780px;
		height: 2px;
		background: #767676;
		margin: 20px 0px 50px 0px;
	}
	.recipe_sub_title {
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 10px;
	}
	.recipe_ingredient,
	.recipe_how_to_mix {
		font-size: 24px;
	}
	.recipe_expain .recipe_ingredient {
		display: flex;
		gap: 10px;
		margin: 0px 0px 50px 0px;
	}
	.recipe_expain .recipe_how_to_mix {
		margin-top: 10px;
	}
	.recipe_detail {
		text-align: left;
		margin-top: 150px;
	}
	.recipe_detail_contents {
		margin-top: 30px;
		font-size: 21px;
		font-weight: 500;
	}
	.recipe_detail_title {
		margin: 50px 0px 30px 0px;
	}
</style>

<script>
	import TheHeaderVue from "../TheHeader.vue";

	export default {
		name: "RecipeDetail",
		components: {
			TheHeaderVue,
		},
		data() {
			return {
				black: "#191919",
				count: 0,
				thisRecipe: [],
				// bookmark: null,
			};
		},

		computed: {
			recipe() {
				return this.$store.state.recipe;
			},
			param: function () {
				return this.$route.params;
			},
			bookmark() {
				return this.$store.state.bookmark;
			},
		},
		methods: {
			createBook: function () {
				this.$store.state.bookmark = this.recipe.bookmark;

				if (!this.$store.state.recipe.bookmark) {
					this.$store.state.recipe.bookmark = true;
				} else {
					this.$store.state.recipe.bookmark = false;
				}
				this.$store.dispatch("CREAT_BOOKMARK", { id: this.recipe.id });

				// console.log("!!");
				// console.log(this.recipe.bookmark);
			},
		},
		mounted() {
			this.$store.dispatch("getRecipeOne", this.$route.params["id"]);
			// this.bookmark = this.recipe.bookmark;
			// console.log("!!");
			console.log(this.recipe.bookmark);
		},
		created() {
			this.count = this.recipe.how_to_mix.split("/n").length;
			// this.scrollBehavior();
		},
	};
</script>
