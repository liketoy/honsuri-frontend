<template>
	<div class="section section__music">
		<div class="full__container">
			<h1>혼술 할 때 즐기기 좋은 음악</h1>
			<div class="music__wrapper">
				<div class="music__box">
					<div class="music_inform" style="color: white" v-for="(music, index) in musicList" :key="index">
						<div class="thumbnail">
							<img :src="music.img" />
							<p class="thumbnail__title">{{ music.thumbnail }}</p>
						</div>
						<p class="music__title">{{ music.musicTitle }}</p>
						<p class="DJ__name">{{ music.DJName }}</p>
						<p class="go_honsuri">혼술하러 가기 ></p>
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
		margin-top: 113px;
	}

	.music__wrapper {
		margin: 0px -120px;
		height: 612px;
		background: black;
		margin-bottom: 230px;
		padding-left: 130px;
	}

	.music__box {
		width: 290px;
		height: 322+290px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 40px;
		display: flex;
	}
	.thumbnail {
		margin-top: 60px;
		width: 290px;
		height: 290px;
		position: relative;
	}
	.music_inform {
		margin-top: 20px;
		width: 290px;
		position: relative;
	}
	.music_inform p {
		text-align: left;
	}
	.music__title {
		font-weight: 500;
		font-size: 20px;
		padding: 20px 0px;
		width: 290px;
		height: 58px;
	}
	.thumbnail__title {
		display: flex;
		align-items: center;
		word-break: keep-all;
		font-size: 50px;
		color: white;
		font-weight: 600;
		width: 230px;
		height: 100px;
		transform: translate(15%, -200%);
		text-align: center;
		z-index: 1;
	}
	.DJ__name {
		font-weight: 200;
		padding-bottom: 50px;
		font-size: 18px;
	}
	.go_honsuri {
		color: gray;
		text-decoration: underline;
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
