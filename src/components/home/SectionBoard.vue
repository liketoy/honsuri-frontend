<template>
	<div class="section">
		<p class="title">혼술 인증샷</p>
		<div class="containter">
			<div class="slide_btn btn_left">
				<img :src="require(`@/assets/images/left.png`)" class="left_img" />
			</div>
			<div class="board_container">
				<div class="card" v-for="(board, index) in BoardComponent" :key="index" avatar>
					<div class="board_sub_container">
						<img :src="board.img" class="board_main_img" />
						<div class="board_main">
							<div class="board_title">
								<p class="board_writer">{{ board.writer }}</p>
								<img :src="require(`@/assets/images/small_heart.png`)" class="heart_img" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="slide_btn btn_right">
				<img :src="require(`@/assets/images/right.png`)" class="rigth_img" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.containter {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	.title {
		font-size: 48px;
		font-weight: 700;
		margin: 0px 0px 20px 400px;
		letter-spacing: -1.2px;
	}
	.board_sub_container {
		position: relative;
	}

	.board_sub_container .board_main_img {
		width: 250px;
		height: 250px;
	}

	.board_main {
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
	.board_title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.board_title .board_writer {
		color: white;
		font-size: 25px;
		padding-left: 30px;
		letter-spacing: -0.63px;
	}

	.board_title .heart_img {
		width: 20px;
		height: 20px;
		padding-right: 20px;
	}

	.board_container {
		display: flex;
		width: 1700px;
		gap: 40px;
		overflow: hidden;
		z-index: 1;
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
</style>

<script>
	import { mapState } from "vuex";

	export default {
		name: "SectionBoard",
		computed: {
			...mapState(["BoardComponent"]),
		},
	};
</script>
