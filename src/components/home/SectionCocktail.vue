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
							<hr />
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
		border-bottom: 1px solid #b43539;
		box-shadow: inset 0 -1px 0 #b43539;
	}
	.section__cocktail {
		background-color: #ededed;
	}
	.cocktail__container {
		padding-inline-start: 190px;
		padding-inline-end: 190px;
	}
	.cocktail__container .card__cocktail {
		display: inline-block; /* 한 줄로 정렬 */
		width: 25%;
		margin-top: 30px;
		/* overflow: hidden; */
	}
	.cocktail__container .card__cocktail img {
		width: 200px;
		height: 200px;

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
	.cocktail__container .card__cocktail .cocktail__content {
		padding-inline-start: 10px;
		padding-inline-end: 10px;
	}
	.cocktail__container .card__cocktail .cocktail__content hr {
		padding: 0;
		margin: 0;
		width: 30%;
		margin-block-start: 10px;
		margin-block-end: 10px;
	}
	.cocktail__container .card__cocktail .cocktail__content .cocktail__name {
		font-size: 17px;
		text-align: left;
		margin-block-start: 16px;
	}
	.cocktail__container .card__cocktail .cocktail__content .cocktail__base {
		font-size: 12px;
		text-align: left;
	}
</style>

<script>
	import { mapState } from "vuex";

	export default {
		name: "SectionCocktail",
		computed: {
			...mapState(["cocktailRecipe"]),
		},
	};
</script>
