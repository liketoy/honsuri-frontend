<template>
	<div class="home">
		<full-page ref="fullpage" id="fullpage">
			<SectionMainVue />
			<!-- components/home/ 위치에 컴포넌트화 시켜서 본인 섹션 구성하기!!!
			- 컴포넌트 파일명은 아래 참고
			- Default Setting은 SectionIntroductionVue 참고
			 -->

			<!-- <SectionIntroductionVue /> -->
			<!-- SectionMusic Jae -->
			<!-- SectionCocktail Joy -->
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

	export default {
		name: "Home",
		components: {
			SectionMainVue,
			// SectionIntroductionVue,
			SectionBoardVue,
			SectionSlideVue,
			SectionTestVue,
		},
	};
</script>
