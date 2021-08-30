<template>
	<div class="recipes">
		<TheHeaderVue :color="black" />

		<div class="container">
			<div class="top_container">
				<h1>레시피</h1>
				<div class="line"></div>
				<h3>Base</h3>
				<div class="baseList">
					<div v-for="(optionCheck, baseOption) in baseList" :key="baseOption" class="baseBox">
						<img
							v-if="optionCheck"
							src="@/assets/icons/check_box.png"
							alt="박스"
							class="check_box"
							@click="checkOption(baseOption)"
						/>
						<img
							v-else
							src="@/assets/icons/none_box.png"
							alt="박스"
							class="none_box"
							@click="checkOption(baseOption)"
						/>
						<p>{{ baseOption }}</p>
					</div>
				</div>
			</div>

			<div v-if="baseList['전체보기'] || baseList['소주']">
				<div class="title_soju"><p>소주</p></div>
				<div class="musiccard__container">
					<div v-for="recipe in sojuList" :key="recipe.id">
						<TheRecipeBoxVue :recipe="recipe" />
					</div>
				</div>
			</div>
			<div v-if="baseList['전체보기'] || baseList['양주']">
				<div class="title_soju"><p>양주</p></div>
				<div class="musiccard__container">
					<div v-for="recipe in liquorList" :key="recipe.id">
						<TheRecipeBoxVue :recipe="recipe" />
					</div>
				</div>
			</div>
			<div v-if="baseList['전체보기'] || baseList['맥주']">
				<div class="title_soju"><p>맥주</p></div>
				<div class="musiccard__container">
					<div v-for="recipe in beerList" :key="recipe.id">
						<TheRecipeBoxVue :recipe="recipe" />
					</div>
				</div>
			</div>
			<div v-if="baseList['전체보기'] || baseList['와인']">
				<div class="title_soju"><p>와인</p></div>
				<div class="musiccard__container">
					<div v-for="recipe in wineList" :key="recipe.id">
						<TheRecipeBoxVue :recipe="recipe" />
					</div>
				</div>
			</div>
			<div v-if="baseList['전체보기'] || baseList['과일소주']">
				<div class="title_soju"><p>과일소주</p></div>
				<div class="musiccard__container">
					<div v-for="recipe in fruitList" :key="recipe.id">
						<TheRecipeBoxVue :recipe="recipe" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.recipes {
		display: flex;
		align-content: center;
		justify-content: center;
		padding-bottom: 100px;
	}
	.container {
		width: 1280px;
	}

	.top_container {
		margin-top: 128px;
	}
	.recipes h1 {
		font-size: 36px;
		font-weight: bold;
		text-align: left;
	}
	.recipes h3 {
		font-size: 30px;
		font-weight: 500;
		text-align: left;
		margin-bottom: 34px;
	}
	.line {
		width: 100%;
		height: 1px;
		background: #767676;
		margin: 18px 0px 30px 0px;
	}
	.none_box,
	.check_box {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}

	.baseList {
		display: flex;
		align-content: center;
		gap: 40px;
	}
	.baseBox {
		display: flex;
		align-content: center;
		justify-content: center;
		text-align: center;
	}
	.baseBox img {
		margin: 2px 10px 0px 0px;
	}
	.musiccard__container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 40px;
	}
	.title_soju {
		width: 100%;
		height: 80px;
		background: #ededed;
		font-size: 30px;
		font-weight: bold;
		line-height: 80px;
		text-align: left;
		margin: 103px 0px 50px 0px;
	}
	.title_soju p {
		margin-left: 30px;
	}
</style>

<script>
	import TheHeaderVue from "../components/TheHeader.vue";
	import TheRecipeBoxVue from "../components/recipes/TheRecipeBox.vue";

	export default {
		name: "Recipes",
		components: {
			TheHeaderVue,
			TheRecipeBoxVue,
		},
		data() {
			return {
				black: "#191919",
				baseList: { 전체보기: true, 소주: false, 양주: false, 맥주: false, 와인: false, 과일소주: false },
			};
		},
		methods: {
			checkOption: function (baseOption) {
				if (this.baseList["전체보기"] && baseOption != "전체보기") {
					this.baseList["전체보기"] = false;
				} else if (baseOption == "전체보기") {
					this.baseList["소주"] = false;
					this.baseList["양주"] = false;
					this.baseList["맥주"] = false;
					this.baseList["와인"] = false;
					this.baseList["과일소주"] = false;
				}
				if (this.baseList[baseOption]) {
					this.baseList[baseOption] = false;
				} else {
					this.baseList[baseOption] = true;
				}
				if (
					!this.baseList["전체보기"] &&
					!this.baseList["소주"] &&
					!this.baseList["양주"] &&
					!this.baseList["맥주"] &&
					!this.baseList["와인"] &&
					!this.baseList["과일소주"]
				) {
					this.baseList["전체보기"] = true;
				}
			},
		},
		computed: {
			recipes() {
				return this.$store.state.recipes;
			},
			sojuList() {
				return this.$store.state.sojuList;
			},
			liquorList() {
				return this.$store.state.liquorList;
			},
			beerList() {
				return this.$store.state.beerList;
			},
			wineList() {
				return this.$store.state.wineList;
			},
			fruitList() {
				return this.$store.state.fruitList;
			},
		},

		mounted() {
			this.$store.dispatch("getRecipes");
			this.$store.dispatch("getRecipesForBase");
			console.log(this.recipes);
		},
	};
</script>
