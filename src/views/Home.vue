<template>
	<div class="home">
		<LandingIntranceVue :value="IsClosedLanding" @input="DisableLanding" />
		<full-page ref="fullpage" :options="options" id="fullpage">
			<SectionMainVue />
			<!-- components/home/ 위치에 컴포넌트화 시켜서 본인 섹션 구성하기!!!
			- 컴포넌트 파일명은 아래 참고
			- Default Setting은 SectionIntroductionVue 참고
			 -->
			<!-- IsClosedLanding이 참일 경우 아래도 보여주기!-->
			<SectionIntroductionVue v-show="IsClosedLanding" />
			<SectionMusicJae v-show="IsClosedLanding" />
			<SectionCocktailVue v-show="IsClosedLanding" />
			<!-- SectionBoard Elena -->
		</full-page>
	</div>
</template>

<script>
	// @ is an alias to /src
	import SectionMainVue from "../components/home/SectionMain.vue";
	import SectionIntroductionVue from "../components/home/SectionIntroduction.vue";
	import SectionMusicJae from "../components/home/SectionMusicJae.vue";
	import SectionCocktailVue from "../components/home/SectionCocktail.vue";
	import LandingIntranceVue from "../components/landing/LandingIntrance.vue";

	export default {
		name: "Home",
		data: function () {
			return {
				IsClosedLanding: false,
			};
		},
		methods: {
			DisableLanding(val) {
				this.IsClosedLanding = val;
			},
		},
		components: {
			LandingIntranceVue,
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
