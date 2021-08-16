<template>
	<div class="musicbox__container" v-if="isActive">
		<div class="x__wrapper" @click="closeMusicBox">
			<span class="x__btn">x</span>
		</div>
		<div class="musiccard__wrapper full__container">
			<h4>음악듣기</h4>
			<div class="musiccard__container">
				<TheMusicCardVue v-for="index in 8" :key="index" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.musicbox__container {
		z-index: 1;
		position: absolute;
		width: 100%;
		bottom: 0;
		height: 350px;
		background-color: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(30px);
	}
	.x__wrapper {
		background: #191919;
		cursor: pointer;
		border-radius: 50%;
		width: 70px;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 0 auto;
		bottom: -15px;
		margin-top: -50px;
	}
	.x__btn {
		color: #f2f2f2;
	}
	.musiccard__wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.musiccard__wrapper h4 {
		color: #f2f2f2;
		font-size: 24px;
	}
	.musiccard__container {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 100px;
		row-gap: 40px;
		margin-top: 30px;
	}
</style>

<script>
	import TheMusicCardVue from "./TheMusicCard.vue";

	export default {
		name: "TheMusicBox",
		components: {
			TheMusicCardVue,
		},
		props: ["isActive"],
		methods: {
			closeMusicBox: function () {
				this.$emit("updateIsActive");
			},
		},
	};
</script>
