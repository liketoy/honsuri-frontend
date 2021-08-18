<template>
	<div class="section section__cocktail">
		<div class="full__container">
			<span>혼술 레시피</span><br />
			<div class="cocktail__container">
				<div class="card__cocktail" v-for="(cocktail, index) in cocktailRecipe" :key="index" avatar>
					<div>
						<!-- v-bind:src -->
						<img :src="cocktail.img" />
						<div class="cocktail__content">
							<p class="cocktail__name">{{ cocktail.cocktailName }}</p>
							<p class="cocktail__base">#{{ cocktail.base }}</p>
						</div>
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
						img: require("@/assets/images/스크류키스.png"),
					},
					{
						cocktailName: "에너자이저주",
						base: "소주",
						img: require("@/assets/images/에너자이저주.png"),
					},
					{
						cocktailName: "진토닉",
						base: "양주",
						img: require("@/assets/images/진토닉.png"),
					},
					{
						cocktailName: "키스헌터",
						base: "소주",
						img: require("@/assets/images/키스헌터.png"),
					},
					{
						cocktailName: "하이볼",
						base: "양주",
						img: require("@/assets/images/하이볼.png"),
					},
					{
						cocktailName: "Old Fashioned",
						base: "양주",
						img: require("@/assets/images/Old_Fashioned.png"),
					},
					{
						cocktailName: "Sherry Cobbler",
						base: "양주",
						img: require("@/assets/images/Sherry_Cobbler.png"),
					},
					{
						cocktailName: "Tweak Classic",
						base: "양주",
						img: require("@/assets/images/Tweak_Classic.png"),
					},
				],
			};
		},
	};
</script>
