<template>
	<div class="section section__cocktail">
		<div class="full__container">
			<span>혼술 레시피</span><br />
			<div class="cocktail__container">
				<div class="card__cocktail" v-for="(cocktail, index) in cocktailRecipe" :key="index" avatar>
					<div>
						<!-- v-bind:src -->
						<router-link :to="{ name: 'RecipeDetail', params: { id: cocktail.cockId } }">
							<img class="cocktail__img" :src="cocktail.img" />
							<div class="cocktail__content">
								<p class="cocktail__name">{{ cocktail.cocktailName }}</p>
								<p class="cocktail__base">#{{ cocktail.base }}</p>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	span {
		font-size: 36px;
		font-weight: 700;
		border-bottom: 1px solid #b43539;
		box-shadow: inset 0 -1px 0 #b43539;
	}
	.section__cocktail {
		background-color: #ededed;
	}
	.cocktail__container {
		margin-top: 32px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 40px;
	}
	.cocktail__img {
		width: 290px;
		height: 290px;
	}
	.cocktail__content {
		text-align: left;
	}
	.cocktail__name {
		margin-top: 16px;
		font-size: 20px;
		font-weight: 600;
	}
	.cocktail__name::after {
		margin-top: 20px;
		content: "";
		display: block;
		width: 100px;
		border-bottom: 2px solid;
	}
	.cocktail__base {
		margin-top: 16px;
		font-size: 15px;
	}
	.cocktail__container .card__cocktail img {
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
	.cocktail__container .card__cocktail:hover img {
		-webkit-transform: scale(1.05);
		-moz-transform: scale(1.05);
		-ms-transform: scale(1.05);
		-o-transform: scale(1.05);
		transform: scale(1.05);
	}
</style>

<script>
	export default {
		name: "SectionCocktail",
		data: function () {
			return {
				cocktailRecipe: [
					{
						cocktailName: "스크류키스",
						base: "소주",
						cockId: 1,
						img: require("@/assets/recipeImg/screwkiss.png"),
					},
					{
						cocktailName: "에너자이저주",
						base: "소주",
						cockId: 16,
						img: require("@/assets/recipeImg/energizerju.png"),
					},
					{
						cocktailName: "진토닉",
						base: "양주",
						cockId: 26,
						img: require("@/assets/recipeImg/JinTonik.png"),
					},
					{
						cocktailName: "태극주",
						base: "소주",
						cockId: 15,
						img: require("@/assets/recipeImg/Taegeukju.png"),
					},
					{
						cocktailName: "하이볼",
						base: "양주",
						cockId: 22,
						img: require("@/assets/recipeImg/HighBall.png"),
					},
					{
						cocktailName: "블루라군",
						base: "양주",
						cockId: 20,
						img: require("@/assets/recipeImg/BlueLaggon.png"),
					},
					{
						cocktailName: "모구모구스파클링",
						base: "소주",
						cockId: 5,
						img: require("@/assets/recipeImg/mogumogusparkling.png"),
					},
					{
						cocktailName: "청포도 맥주",
						base: "맥주",
						cockId: 23,
						img: require("@/assets/recipeImg/GrapeBeer.png"),
					},
				],
			};
		},
	};
</script>
