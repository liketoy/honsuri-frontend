<template>
	<div class="section section__music">
		<div class="full__container">
			<h1>혼술 할 때 즐기기 좋은 음악</h1>
			<div class="music__container">
				<div class="music_info" v-for="(music, index) in musicList" :key="index">
					<div class="box">
						<div class="info_thumbnail" :style="{ background: 'url(' + music.img + ')' }">
							<span class="thumbnail__title">{{ music.thumbnail }}</span>
						</div>
						<div class="musiccard__player">
							<div v-if="!musicIsPlayingTwo[music.id - 1]">
								<img src="@/assets/icons/play_button.jpg" alt="playBtn" @click="play(music.id)" />
							</div>
							<div v-else>
								<img src="@/assets/icons/pause_button.png" alt="pauseBtn" @click="play(music.id)" />
							</div>
						</div>
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

	.musiccard__player {
		position: absolute;
		bottom: 15px;
		left: 15px;
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
	.musiccard__player {
		width: 32px;
		height: 32px;
		cursor: pointer;
	}
	.musiccard__player img {
		width: 100%;
	}
	.box {
		position: relative;
	}
</style>

<script>
	export default {
		name: "SectionMusic",
		data() {
			return {
				musictFile: "https://honsuri-uploads.s3.ap-northeast-2.amazonaws.com/uploads/musics/bg_chill_01.mp3",

				musicList: [
					{
						id: 1,
						musicTitle: "혼술 먹방에 딱맞는 분위기 깡패 혼술 음악",
						DJName: "리플레이 LEEPLAY",
						img: require("@/assets/images/relaxing_piano.png"),
						thumbnail: "RELAXING PIANO",
					},
					{
						id: 2,
						musicTitle: "새벽 혼술 최고의 술안주",
						DJName: "MAGIC STRAWBERRY",
						img: require("@/assets/images/groovy_mix.png"),
						thumbnail: "GROOVY R&B MIX",
					},
					{
						id: 3,
						musicTitle: "혼자 있을 때 듣는 감성적인 음악",
						DJName: "미러볼 뮤직",
						img: require("@/assets/images/pop.png"),
						thumbnail: "POP",
					},
					{
						id: 4,
						musicTitle: "반짝이는 야경과 함께 느긋하게 즐기는 밤 재즈",
						DJName: "우든체어",
						img: require("@/assets/images/lofi-jazz.png"),
						thumbnail: "LO-FI JAZZ",
					},
				],
			};
		},
		computed: {
			musicIsPlayingTwo() {
				return this.$store.state.musicIsPlayingTwo;
			},
			audioPlayedTwo() {
				return this.$store.state.audioPlayedTwo;
			},
		},
		methods: {
			play(id) {
				if (this.musicIsPlayingTwo[id - 1]) {
					this.$store.state.audioTwo[id - 1].pause();

					this.$set(this.$store.state.musicIsPlayingTwo, id - 1, false);
				} else {
					//음악이 나오고 있지 않다면
					if (!this.audioPlayedTwo[id - 1]) {
						//음악이 한 번도 재생된 적 없다면
						this.$set(this.$store.state.audioTwo, id - 1, new Audio(this.musictFile));
					}
					this.$store.state.audioTwo[id - 1].play();
					this.$set(this.$store.state.musicIsPlayingTwo, id - 1, true);
					this.$set(this.$store.state.audioPlayedTwo, id - 1, true);
				}
			},
		},
	};
</script>
