<!DOCTYPE html>
<template>
	<div class="section slide">
		<input type="radio" name="pos" id="pos1" checked />
		<input type="radio" name="pos" id="pos2" />
		<input type="radio" name="pos" id="pos3" />
		<input type="radio" name="pos" id="pos4" />
		<input type="radio" name="pos" id="pos5" />
		<input type="radio" name="pos" id="pos6" />
		<input type="radio" name="pos" id="pos7" />
		<input type="radio" name="pos" id="pos8" />
		<ul>
			<div class="board_container">
				<li>
					<div class="board">
						<img :src="require('@/assets/images/Allen.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Allen</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="board">
						<img :src="require('@/assets/images/Joy.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Joy</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="board">
						<img :src="require('@/assets/images/Linda.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Linda</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="board">
						<img :src="require('@/assets/images/Yunnie.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Yunnie</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="board">
						<img :src="require('@/assets/images/Elena.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Elena</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="board">
						<img :src="require('@/assets/images/Jae.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Jae</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="board">
						<img :src="require('@/assets/images/Jinu.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Jinu</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="board">
						<img :src="require('@/assets/images/Woody.png')" class="board_img" />
						<div class="board_main_box">
							<div class="board_main">
								<div class="board_writer">Woody</div>
								<img :src="require(`@/assets/images/small_heart.png`)" class="board_like" />
							</div>
						</div>
					</div>
				</li>
			</div>
		</ul>
		<!-- <div class="slide_btn btn_right">
			<img :src="require(`@/assets/images/right.png`)" class="rigth_img" />
		</div> -->
		<p class="bullet">
			<label for="pos1">1 </label>
			<label for="pos2">2</label>
			<label for="pos3">3</label>
			<label for="pos4">4</label>
			<label for="pos5">5 </label>
			<label for="pos6">6</label>
			<label for="pos7">7</label>
			<label for="pos8">8</label>
		</p>
	</div>
</template>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	ul,
	li {
		list-style: none;
	}
	.slide {
		height: 300px;
		/* overflow: hidden; */
		position: relative;
	}
	.slide ul {
		width: calc(100% * 4);
		display: flex;
		transition: 1s;
	}
	.slide li {
		width: 250px;
		height: 250px;
	}
	.slide li:nth-child(1) {
		background: #ffa;
	}
	.slide li:nth-child(2) {
		background: #faa;
	}
	.slide li:nth-child(3) {
		background: #afa;
	}
	.slide li:nth-child(4) {
		background: #aaf;
	}
	.slide li:nth-child(5) {
		background: #ffa;
	}
	.slide li:nth-child(6) {
		background: #faa;
	}
	.slide li:nth-child(7) {
		background: #afa;
	}
	.slide li:nth-child(8) {
		background: #aaf;
	}
	.slide input {
		display: none;
	}
	.slide .bullet {
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		text-align: center;
		z-index: 10;
	}
	.slide .bullet label {
		width: 10px;
		height: 10px;
		border-radius: 10px;
		border: 2px solid #666;
		display: inline-block;
		background: #fff;
		font-size: 0;
		transition: 0.5s;
		cursor: pointer;
	}
	/* 슬라이드 조작 */
	.btn_right:checked {
		transform: translateX(-200px);
	}
	#pos1:checked ~ ul {
		margin-left: 0;
	}
	#pos2:checked ~ ul {
		margin-left: -250px;
	}
	#pos3:checked ~ ul {
		margin-left: -500px;
	}
	#pos4:checked ~ ul {
		margin-left: -750px;
	}
	#pos5:checked ~ ul {
		margin-left: -1000;
	}
	#pos6:checked ~ ul {
		margin-left: -1250px;
	}
	#pos7:checked ~ ul {
		margin-left: -1500px;
	}
	#pos8:checked ~ ul {
		margin-left: -1750px;
	}
	/* bullet 조작 */
	#pos1:checked ~ .bullet label:nth-child(1),
	#pos2:checked ~ .bullet label:nth-child(2),
	#pos3:checked ~ .bullet label:nth-child(3),
	#pos4:checked ~ .bullet label:nth-child(4),
	#pos5:checked ~ .bullet label:nth-child(5),
	#pos6:checked ~ .bullet label:nth-child(6),
	#pos7:checked ~ .bullet label:nth-child(7),
	#pos8:checked ~ .bullet label:nth-child(8) {
		background: #666;
	}

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

	.board_container {
		display: flex;
		/* padding-left: 110px; */
		width: 1700px;
		gap: 40px;
		/* overflow: hidden; */
		/* position: relative; */
		z-index: 1;
	}

	.board {
		position: relative;
	}

	.board .board_img {
		width: 250px;
		height: 250px;
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
		/* z-index: 2; */
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
