<template>
	<div class="musicbox__container" v-show="isActive">
		<div class="x__wrapper" @click="closeMusicBox">
			<span class="x__btn">x</span>
		</div>
		<div class="musiccard__wrapper container">
			<h4>음악듣기</h4>
			<div class="musiccard__container">
				<TheMusicCardVue v-for="music in musics" :key="music.id" :music="music" />
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
		height: 250px;
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
		margin-top: 18px;
	}
	.container {
		position: fixed;
		width: 100%;
	}
	@media (min-width: 1280px) {
		.container {
			/* width: 1280px; */
			min-width: 1280px;
			left: 50%;
			margin-left: -640px;
		}
	}
	.musiccard__wrapper h4 {
		color: #f2f2f2;
		font-size: 24px;
	}
	.musiccard__container {
		width: 100%;
		display: flex;
		column-gap: 28px;
		row-gap: 40px;
		margin-top: 30px;
	}
</style>

<script>
	import TheMusicCardVue from "./TheMusicCard.vue";
	// import api from "../api/index";
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
		computed: {
			musics() {
				return this.$store.state.musics;
			},
		},
		mounted() {
			this.$store.dispatch("getMusics");
		},
	};
</script>
