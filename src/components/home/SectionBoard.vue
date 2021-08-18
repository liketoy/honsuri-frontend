<template>
	<div class="section section__board">
		<div class="full__container">
			<h2 class="board__title">혼술 인증샷</h2>
			<div class="slides__container">
				<vueper-slides
					class="no-shadow"
					:visible-slides="5"
					:slide-ratio="1 / 5"
					:bullets="false"
					:disableArrowsOnEdges="true"
					:slide-multiple="false"
					:touchable="false"
					:initSlide="2"
				>
					<vueper-slide
						v-for="(slide, i) in slides"
						:key="i"
						:title="slide.title"
						:content="slide.content"
						:image="slide.image"
					>
						<template #content>
							<div class="vueperslide__content-wrapper" style="justify-content: flex-end">
								<div class="like__container">
									<div class="vueperslide__title">
										<span>{{ slide.title }}</span>
									</div>
									<img src="@/assets/icons/heart.png" alt="heart" @click="clickHeart(i)" />
								</div>
							</div>
						</template>
					</vueper-slide>
				</vueper-slides>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.section__board {
		background: #ededed;
	}
	.board__title {
		text-align: left;
		font-size: 48px;
		font-weight: 700;
		margin-left: 80px;
		margin-bottom: 100px;
	}
	.slides__container {
		margin: 0 -150px;
	}
	.vueperslide {
		transition: 0.3s ease-in-out;
		transform: scale(0.8);
	}
	.vueperslide--active {
		box-shadow: 0 0 10px rgb(0 0 0 / 20%);
		transform: scale(1);
	}
	.like__container {
		position: relative;
		width: 100%;
		color: #ffffff;
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 180px;
	}
	.like__container::after {
		content: "";
		width: 100%;
		background: #191919;
		opacity: 0.4;
		position: absolute;
		display: block;
		top: 0;
		bottom: 0;
		z-index: -1;
	}
	.like__container img {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
</style>

<script>
	import { VueperSlides, VueperSlide } from "vueperslides";
	import "vueperslides/dist/vueperslides.css";
	export default {
		name: "SectionBoard",
		components: { VueperSlides, VueperSlide },
		methods: {
			clickHeart: function (index) {
				console.log(`${index}heart`);
			},
		},
		data() {
			return {
				slides: [
					{
						title: "woody",
						content: "안녕하세요",
						image: require("@/assets/images/woodyStargram.png"),
					},
					{
						title: "allen",
						content: "안녕하세요",
						image: require("@/assets/images/allenStargram.png"),
					},
					{
						title: "elena",
						content: "안녕하세요",
						image: require("@/assets/images/elenaStargram.png"),
					},
					{
						title: "joy",
						content: "안녕하세요",
						image: require("@/assets/images/joyStargram.png"),
					},
					{
						title: "jae",
						content: "안녕하세요",
						image: require("@/assets/images/jaeStargram.png"),
					},
					{
						title: "sean",
						content: "안녕하세요",
						image: require("@/assets/images/Tweak_Classic.png"),
					},
				],
			};
		},
	};
</script>
