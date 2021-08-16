<template>
	<div class="home">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<SectionMainVue />
			<!-- components/home/ 위치에 컴포넌트화 시켜서 본인 섹션 구성하기!!!
			- 컴포넌트 파일명은 아래 참고
			- Default Setting은 SectionIntroductionVue 참고
			 -->

			<SectionIntroductionVue />
			<SectionMusicJae />
			<!-- SectionCocktail Joy -->
			<SectionCocktailVue />
			<!-- SectionBoard Elena -->
		</full-page>
	</div>
</template>

<script>
	// @ is an alias to /src
	import SectionMainVue from "../components/home/SectionMain.vue";
	import SectionIntroductionVue from "../components/home/SectionIntroduction.vue";
	import SectionCocktailVue from "@/components/home/SectionCocktail";

	import SectionMusicJae from "../components/home/SectionMusicJae.vue";
	export default {
		name: "Home",
		components: {
			SectionMainVue,
			SectionIntroductionVue,
			SectionCocktailVue,
			SectionMusicJae,
		},
		options: {
			licenseKey: "YOUR_KEY_HEERE",
		},
	};
</script>
