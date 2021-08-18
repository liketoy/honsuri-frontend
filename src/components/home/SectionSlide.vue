<template>
	<div class="section">
		<p class="title">혼술 인증샷</p>
		<div class="container">
			<div class="slide_btn btn_left swiper-button-prev" slot="button-prev">
				<img :src="require(`@/assets/images/left.png`)" class="left_img" />
			</div>
			<swiper class="swiper" :options="swiperOption">
				<!-- <swiper-slide v-for="(board, index) in BoardComponent" :key="index" :virtualIndex="index">
				<div class="board">
					<img :src="board.img" class="board_img" />
					<div class="board_main_box">
						<div class="board_main">
							<div class="board_writer">{{ board.writer }}</div>
							<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
						</div>
					</div>
				</div>
			</swiper-slide> -->
				<swiper-slide>
					<div class="board">
						<img :src="require('@/assets/images/Allen.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Allen</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="board">
						<img :src="require('@/assets/images/Joy.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Joy</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="board">
						<img :src="require('@/assets/images/Linda.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Linda</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
					<!-- <div>Current slide is {{ isActive ? "active" : "not active" }}</div> -->
				</swiper-slide>
				<swiper-slide>
					<div class="board">
						<img :src="require('@/assets/images/Yunnie.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Yunnie</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="board">
						<img :src="require('@/assets/images/Elena.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Elena</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="board">
						<img :src="require('@/assets/images/Jae.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Jae</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="board">
						<img :src="require('@/assets/images/Jinu.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Jinu</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="board">
						<img :src="require('@/assets/images/Woody.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Woody</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</swiper-slide>

				<!-- <div class="swiper-pagination" slot="pagination"></div> -->
			</swiper>
			<div class="slide_btn btn_right swiper-button-next" slot="button-next">
				<img :src="require(`@/assets/images/right.png`)" class="rigth_img" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	/* .swiper {
		width: 1700px;
	} */

	/* .scale {
		z-index: 15;
	} */
	/* .board:hover {
		transform: scale(1.2);
		-webkit-transform: scale(2.4);
		-moz-transform: scale(1.2);
		-ms-transform: scale(1.2);
		-o-transform: scale(1.2);
	} */
	.container {
		position: relative;
		/* display: flex; */
		width: 100%;
		justify-content: center;
		align-items: center;
		/* gap: 40px; */
	}
	.title {
		font-size: 48px;
		font-weight: 700;
		margin: 0px 0px 20px 400px;
		letter-spacing: -1.2px;
	}

	.board {
		position: relative;
		width: 250px;
		height: 250px;
		/* z-index: 1; */
	}

	.board .board_img {
		width: 100%;
		height: 100%;
	}

	.board_main_box {
		position: absolute;
		top: 170px;
		width: 100%;
		height: 80px;
		background-color: rgba(0, 0, 0, 0.4);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.board_main {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.board_writer {
		color: white;
		font-size: 25px;
		padding-left: 30px;
		letter-spacing: -0.63px;
	}

	.board_main .board_like {
		width: 20px;
		height: 20px;
		padding-right: 20px;
	}

	.slide_btn {
		position: absolute;
		background-color: rgb(0, 0, 0, 0.6);
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn_left {
		left: 86px;
	}

	.btn_right {
		right: 86px;
	}

	.swiper-button-next::after,
	.swiper-button-prev::after {
		display: none;
	}
</style>

<script>
	import { mapState } from "vuex";
	import { Swiper, SwiperSlide } from "vue-awesome-swiper";
	import "swiper/css/swiper.css";
	export default {
		name: "swiper-example-loop",
		title: "Loop mode / Infinite loop",
		components: {
			Swiper,
			SwiperSlide,
			...mapState(["BoardComponent"]),
		},
		data() {
			return {
				swiperOption: {
					slidesPerView: 6,
					spaceBetween: 40,

					// zoom: true,
					loop: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					},
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					},
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import "/home/hyeonji/board/honsuri-frontend/src/assets/css/base.scss";
</style>
