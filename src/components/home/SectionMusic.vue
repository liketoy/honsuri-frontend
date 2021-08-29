<template>
	<div class="section section__music">
		<div class="full__container">
			<h1>혼술 할 때 즐기기 좋은 음악</h1>
			<div class="music__container">
				<div class="music_info" v-for="(music, index) in musicList" :key="index">
					<div class="info_thumbnail" :style="{ background: 'url(' + music.img + ')' }">
						<button class="play__btn"></button>
						<button class="play__inner_btn"></button>
						<span class="thumbnail__title">{{ music.thumbnail }}</span>
					</div>
					<div class="info_text">
						<p class="music__title">{{ music.musicTitle }}</p>
						<p class="music__dj">{{ music.DJName }}</p>
						<a href="" class="music__url">혼술하러 가기 ></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.full__container h1 {
		font-size: 48px;
		font-weight: 400;
		margin-bottom: 50px;
	}

	.music__container {
		margin: 0px -120px;
		padding-block: 60px; /* y축 padding*/
		background: black;
		justify-content: center;
		display: grid;
		grid-template-columns: repeat(4, 290px);
		gap: 40px;
	}

	.info_thumbnail {
		height: 290px;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
	}

	.info_thumbnail .play__btn {
		position: absolute;
		left: 15px;
		bottom: 15px;
		border-radius: 50%;
		border: 1px solid #ffff;
		width: 35px;
		height: 35px;
		background-color: transparent;
	}

	.info_thumbnail .play__inner_btn {
		position: absolute;
		width: 0px;
		height: 0px;
		bottom: 20px;
		left: 30px;
		border-top: 10px solid transparent;
		border-left: 10px solid #ffff;
		border-right: 0px solid transparent;
		border-bottom: 10px solid transparent;
		background-color: transparent;
	}

	.info_thumbnail .thumbnail__title {
		font-size: 50px;
		color: white;
		font-weight: 600;
	}

	.info_text {
		text-align: start;
		color: white;
	}

	.info_text .music__title {
		font-weight: 500;
		font-size: 20px;
		padding: 20px 0px;
		height: 58px;
		word-break: keep-all;
	}
	.info_text .music__dj {
		font-weight: 200;
		padding-bottom: 50px;
		font-size: 18px;
	}

	.info_text .music__url {
		color: gray;
		text-decoration: underline;
	}
</style>

<script>
	export default {
		name: "SectionMusic",
		data() {
			return {
				musicList: [
					{
						musicTitle: "혼술 먹방에 딱맞는 분위기 깡패 혼술 음악",
						DJName: "리플레이 LEEPLAY",
						img: require("@/assets/images/relaxing_piano.png"),
						thumbnail: "RELAXING PIANO",
					},
					{
						musicTitle: "새벽 혼술 최고의 술안주",
						DJName: "MAGIC STRAWBERRY",
						img: require("@/assets/images/groovy_mix.png"),
						thumbnail: "GROOVY R&B MIX",
					},
					{
						musicTitle: "혼자 있을 때 듣는 감성적인 음악",
						DJName: "미러볼 뮤직",
						img: require("@/assets/images/pop.png"),
						thumbnail: "POP",
					},
					{
						musicTitle: "반짝이는 야경과 함께 느긋하게 즐기는 밤 재즈",
						DJName: "우든체어",
						img: require("@/assets/images/lofi-jazz.png"),
						thumbnail: "LO-FI JAZZ",
					},
				],
			};
		},
	};
</script>
