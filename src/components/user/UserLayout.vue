<template>
	<div class="user__section">
		<TheHeaderVue />
		<div class="user__container">
			<div class="side__wrapper">
				<TheSideMenuVue :userInfo="userInfo" />
			</div>
			<div class="main__wrapper">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.user__section {
		background: #ededed;
		margin: 0 auto;
		width: 100vw;
		height: 100vh;
	}
	.user__container {
		max-width: 1280px;
		margin: 140px auto;
		padding-top: 50px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 50px;
	}
	.side__wrapper {
		flex: 1;
	}
	.main__wrapper {
		flex: 3;
		background: #fff;
		border-radius: 8px;
		box-shadow: 1px 1px 2px #00000029;
		padding: 40px 60px;
		text-align: left;
	}
</style>

<script>
	import { mapState } from "vuex";
	import TheHeaderVue from "../TheHeader.vue";
	import TheSideMenuVue from "./TheSideMenu.vue";

	export default {
		name: "UserLayout",
		components: {
			TheHeaderVue,
			TheSideMenuVue,
		},
		computed: {
			...mapState(["userInfo"]),
		},
	};
</script>
