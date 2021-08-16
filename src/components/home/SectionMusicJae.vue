<template>
	<div class="section section__music">
		<div class="full__container">
			<h1>혼술 할 때 즐기기 좋은 음악</h1>
			<div class="music__wrapper">
				<div class="music__box">
					<div class="music_inform" style="color: white" v-for="(music, index) in musicList" :key="index">
						<img :src="music.img" />
						<p class="music__title">{{ music.musicTitle }}</p>
						<p class="DJ__name">#{{ music.DJName }}</p>
					</div>
					<p>혼술하러가기</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.section_music {
		position: relative;
		background: black;
	}

	.full__container h1 {
		font-size: 48px;
		font-weight: 300;
		margin-top: 113px;
		margin-bottom: 50px;
	}

	.music__wrapper {
		margin-left: -120px;
		width: 1560px;
		height: 612px;
		background: black;
	}
	.music__box img {
		width: 290px;
		padding: 20px;
	}

	.music_inform p {
		padding: 20px;
	}
</style>

<script>
	export default {
		name: "section",
		data() {
			return {
				musicList: [
					{
						musicTitle: "혼술 먹방에 딱맞는 분위기 깡패 혼술 음악",
						DJName: "리플레이 LEEPLAY",
						img: require("@/assets/images/relaxing_piano.png"),
					},
					{
						musicTitle: "새벽 혼술 최고의 술안주",
						DJName: "MAGIC STRAWBERRY",
						img: require("@/assets/images/groovy_mix.png"),
					},
					{
						musicTitle: "혼자 있을 때 듣는 감성적인 음악",
						DJName: "미러볼 뮤직",
						img: require("@/assets/images/pop.png"),
					},
					{
						musicTitle: "반짝이는 야경과 함께 느긋하게 즐기는 밤 재즈",
						DJName: "우든체어",
						img: require("@/assets/images/lofi-jazz.png"),
					},
				],
			};
		},
	};
</script>
