<template>
	<div class="musiccard__album">
		<div class="musiccard__info">
			<div class="song__image">
				<img :src="photos" :alt="photos" />
			</div>

			<div class="song__info">
				<p>{{ music.title }}</p>
				<p>{{ music.singer }}</p>
			</div>
		</div>
		<div class="musiccard__player">
			<div v-if="!musicIsPlaying[music.id - 1]">
				<img src="@/assets/icons/play_button.jpg" alt="playBtn" @click="play(music.id)" />
			</div>
			<div v-else>
				<img src="@/assets/icons/pause_button.png" alt="pauseBtn" @click="play(music.id)" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.musiccard__album {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	.musiccard__info {
		display: flex;
		align-items: center;
	}
	.song__image {
		width: 80px;
		height: 80px;
		margin-right: 18px;
	}
	.song__image img {
		border-radius: 10px;
		width: 100%;
	}
	.song__info {
		font-size: 16px;
		color: #f2f2f2;
		text-align: left;
	}
	.song__info:first-child {
		font-weight: 600;
	}
	.musiccard__player {
		width: 32px;
		height: 32px;
		cursor: pointer;
	}
	.musiccard__player img {
		width: 100%;
	}
</style>

<script>
	export default {
		name: "TheMusicCard",
		props: ["music"],
		data() {
			return {
				audio: null,
				isPlaying: false,
				photos: require("@/assets/musicImg/" + this.music.photo),
				// musictFile: require("@/assets/audio/" + this.music.file_name),
			};
		},
		computed: {
			musicIsPlaying() {
				return this.$store.state.musicIsPlaying;
			},
			audioPlayed() {
				return this.$store.state.audioPlayed;
			},
		},
		methods: {
			play(id) {
				if (this.musicIsPlaying[id - 1]) {
					this.$store.state.audio[id - 1].pause();

					this.$set(this.$store.state.musicIsPlaying, this.music.id - 1, false);
				} else {
					//음악이 나오고 있지 않다면
					if (!this.audioPlayed[id - 1]) {
						//음악이 한 번도 재생된 적 없다면
						this.$set(this.$store.state.audio, this.music.id - 1, new Audio(this.musictFile));
					}
					this.$store.state.audio[id - 1].play();
					this.$set(this.$store.state.musicIsPlaying, this.music.id - 1, true);
					this.$set(this.$store.state.audioPlayed, this.music.id - 1, true);
				}
			},
		},
	};
</script>
