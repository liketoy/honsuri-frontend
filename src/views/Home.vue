<template>
	<div class="home">
		<LandingIntranceVue />
		<full-page ref="fullpage" :options="options" id="fullpage">
			<SectionMainVue />
			<!-- components/home/ 위치에 컴포넌트화 시켜서 본인 섹션 구성하기!!!
			- 컴포넌트 파일명은 아래 참고
			- Default Setting은 SectionIntroductionVue 참고
			 -->

			<!-- <SectionIntroductionVue /> -->
			<!-- SectionMusic Jae -->
			<!-- SectionCocktail Joy -->

			<SectionIntroductionVue />
			<SectionMusicJae />
			<!-- SectionCocktail Joy -->
			<SectionCocktailVue />
			<!-- SectionBoard Elena -->

			<SectionBoardVue />
			<SectionSlideVue />
			<SectionTestVue />
		</full-page>
	</div>
</template>

<script>
	// @ is an alias to /src
	import SectionMainVue from "../components/home/SectionMain.vue";
	// import SectionIntroductionVue from "../components/home/SectionIntroduction.vue";
	import SectionBoardVue from "../components/home/SectionBoard.vue";
	import SectionSlideVue from "../components/home/SectionSlide.vue";
	import SectionTestVue from "../components/home/SectionTest.vue";

	import SectionIntroductionVue from "../components/home/SectionIntroduction.vue";
	import SectionMusicJae from "../components/home/SectionMusicJae.vue";
	import SectionCocktailVue from "../components/home/SectionCocktail.vue";
	import LandingIntranceVue from "../components/landing/LandingIntrance.vue";

	export default {
		name: "Home",
		components: {
			LandingIntranceVue,
			SectionMainVue,
			// SectionIntroductionVue,
			SectionBoardVue,
			SectionSlideVue,
			SectionTestVue,

			SectionIntroductionVue,
			SectionCocktailVue,
			SectionMusicJae,
		},
		options: {
			licenseKey: "YOUR_KEY_HEERE",
		},
	};
</script>
