<template>
	<div class="section">
		<!-- <img :src="require('@/assets/images/Joy.png')" class="board_img" /> -->
		<p class="title">혼술 인증샷</p>
		<div class="entire_containter">
			<div v-on:click="pre" v-bind:class="{ hidden: selected == 1 }" class="slide_btn btn_left" slot="button-prev">
				<img :src="require(`@/assets/images/left.png`)" class="left_img" />
			</div>
			<!-- <div class="Wrapper"> -->
			<!-- <img :src="require('@/assets/images/Joy.png')" class="board_img" /> -->
			<div class="board_container">
				<div class="temp"></div>
				<div
					class="imageContainer"
					v-bind:style="{
						transform: 'translate(-' + (selected - 1) * 290 + 'px, 0px)',
					}"
				>
					<div class="board">
						<img :src="require('@/assets/images/Allen.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Allen</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
					<div class="board">
						<img :src="require('@/assets/images/Joy.png')" class="scale board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Joy</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
					<div class="board">
						<img :src="require('@/assets/images/Linda.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Linda</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
					<div class="board">
						<img :src="require('@/assets/images/Yunnie.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Yunnie</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
					<div class="board">
						<img :src="require('@/assets/images/Elena.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Elena</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
					<div class="board">
						<img :src="require('@/assets/images/Jae.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Jae</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
					<div class="board">
						<img :src="require('@/assets/images/Jinu.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Jinu</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
					<div class="board">
						<img :src="require('@/assets/images/Woody.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Woody</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</div>
				<div class="temp"></div>
			</div>
			<!-- </div> -->
			<div
				v-on:click="next"
				v-bind:class="{ hidden: selected == length }"
				class="slide_btn btn_right"
				slot="button-next"
			>
				<img :src="require(`@/assets/images/right.png`)" class="rigth_img" />
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		// props: ["images"],
		data() {
			return {
				length: 3,
				selected: 1,
			};
		},
		mounted() {},
		methods: {
			next() {
				if (this.selected == this.length) {
					this.selected = 1;
				} else {
					this.selected = this.selected + 1;
				}
				console.log(this.selected);
			},
			pre() {
				if (this.selected == 1) {
					this.selected = this.length;
				} else {
					this.selected = this.selected - 1;
				}
				console.log(this.selected);
			},
		},
		components: {
			...mapState(["BoardComponent"]),
		},
	};
</script>

<style>
	/* .board:hover {
		transform: scale(1.2);
		-webkit-transform: scale(2.4);
		-moz-transform: scale(1.2);
		-ms-transform: scale(1.2);
		-o-transform: scale(1.2);
	} */
	.entire_containter {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.board_container {
		display: flex;
		position: relative;
		z-index: 1;
	}
	.temp {
		width: 110px;
		height: 250px;
		background: white;
		z-index: 5;
	}

	.imageContainer {
		display: flex;
		gap: 40px;
		transition: 0.6s;

		width: 1700px;
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
		flex-shrink: 0;
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
		z-index: 2;
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

	.hidden {
		display: none;
	}
</style>
