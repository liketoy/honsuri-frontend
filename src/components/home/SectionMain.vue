<template>
	<div class="section section__main">
		<TheHeaderVue />
		<div class="full__container bg__container">
			<h1>HONSURI</h1>
			<h4>지금 어떤 안주를 먹고 있는지, 어떤 술을 마시고 있는지 공유해봐요<br />방구석 혼술 더 이상 외롭지 않아</h4>
		</div>
	</div>
</template>

<style scoped>
	.section__main {
		background: center/cover no-repeat url("../../assets/background.jpg");
		position: relative;
	}
	.section__main::before {
		content: "";
		opacity: 0.4;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: #000;
	}
	.bg__container {
		text-align: left;
		color: #f2f2f2;
	}
	.bg__container h1 {
		font-size: 60px;
		font-weight: 700;
		margin-bottom: 30px;
		line-height: 1.2;
	}
	.bg__container h4 {
		font-size: 20px;
	}
</style>

<script>
	import TheHeaderVue from "../TheHeader.vue";
	export default {
		name: "SectionMain",
		components: {
			TheHeaderVue,
		},
	};
</script>
