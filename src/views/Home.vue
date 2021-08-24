<template>
	<div class="home">
		<LandingIntranceVue :value="IsRemembered" @input="DisableLanding" />
		<full-page ref="fullpage" :options="options" id="fullpage">
			<SectionMainVue />
			<!-- components/home/ 위치에 컴포넌트화 시켜서 본인 섹션 구성하기!!!
            - 컴포넌트 파일명은 아래 참고
            - Default Setting은 SectionIntroductionVue 참고
             -->
			<!-- IsClosedLanding이 참일 경우 아래도 보여주기!-->
			<SectionIntroductionVue />
			<SectionMusicJae />
			<SectionCocktailVue />
			<!-- SectionBoard Elena -->
		</full-page>
	</div>
</template>
<style>
	.fp-right {
		position: fixed;
		color: #ffff;
		right: 5%;
		top: 50%;
		font-size: 24px;
		transform: translateY(-50%);
		margin: 0 auto;
	}
	.fp-right ul li:not(:first-child, :last-child) {
		display: none;
	}
	.fp-right ul li:first-child::after {
		content: "";
		display: block;
		width: 4px;
		border-radius: 2px;
		background: white;
		height: 200px;
		margin: 10px auto;
	}
</style>
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
				IsRemembered: false,
			};
		},
		methods: {
			DisableLanding(val) {
				this.IsRemembered = val;
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
			anchors: ["01", "02", "03", "04"],
			navigation: true,
			scrollOverflow: true,
			scrollBar: false,
		},
	};
</script>
