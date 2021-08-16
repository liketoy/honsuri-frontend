<template>
	<div class="musiccard__album">
		<div class="musiccard__info">
			<div class="song__image">
				<img
					src="https://mblogthumb-phinf.pstatic.net/MjAxNzEwMDVfMjky/MDAxNTA3MTY1OTc0MjUx.pEx70aLCc-DwDvkS4z89QOdyueTdWf0Ttq2aNUwER0Yg.wd5TN9edUQChZVYFXSlV_lyvGcK8QOQuUmBgWyWM3PYg.JPEG.touryp/mosasRxXEH.jpg?type=w800"
					alt="아이유"
				/>
			</div>
			<div class="song__info">
				<p>가을 아침</p>
				<p>아이유</p>
			</div>
		</div>
		<div class="musiccard__player">
			<img src="@/assets/icons/play_button.jpg" alt="playBtn" />
		</div>
	</div>
</template>

<style scoped>
	.musiccard__album {
		display: flex;
		align-items: center;
		gap: 40px;
	}
	.musiccard__info {
		display: flex;
		align-items: center;
	}
	.song__image {
		width: 80px;
		height: 80px;
		margin-right: 24px;
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
	}
	.musiccard__player img {
		width: 100%;
	}
</style>

<script>
	export default {
		name: "TheMusicCard",
	};
</script>
