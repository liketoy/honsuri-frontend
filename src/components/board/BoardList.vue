<template>
	<div class="board_section">
		<!-- <TheHeaderVue :color="white" /> -->

		<BoardCreateVue :isActive="isActive" @updateIsActive="isActive = !isActive" />

		<div>
			<h1 class="board_title" @click="console()">방명록</h1>

			<div class="hr"></div>
			<div class="new_board" @click="isActive = !isActive">
				<div class="new">새로운 소식을 남겨보세요.</div>
				<img class="new_pic" src="@/assets/picture.png" alt="사진" />
			</div>

			<div :key="i" v-for="(board, i) in users.results">
				<div class="board_container">
					<div class="board">
						<div class="board_data">
							<div class="profile"></div>
							<div class="detail">
								<p>익명</p>
								<div>{{ board.created }}</div>
							</div>
						</div>

						<div v-if="board.photos.length === 0">
							<img class="board_img" src="@/assets/honsuri.jpg" alt="" />
						</div>
						<div v-else>
							<img class="board_img" :src="board.photos[0].file" alt="" />
						</div>

						<p class="board_caption">{{ board.caption }}</p>
						<div class="board_likes">좋아요 {{ board.likes }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.board_title {
		font-size: 36px;
		font-weight: 700;
		letter-spacing: -0.9px;
	}
	.hr {
		background: #767676;
		width: 600px;
		height: 1px;
		border-width: 2px;
		border-color: #767676;
		margin: 18px 0px 50px 0px;
	}
	.board_section {
		display: flex;
		align-content: center;
		justify-content: center;
		background: #ededed;
		height: 100%;
	}

	.new_board,
	.board_container {
		width: 600px;
		background: white;
		border-radius: 8px;
		box-shadow: 1px 1px 2px #00000029;
		margin-bottom: 30px;
	}
	.new_board {
		padding: 10px 0px 10px 0px;
		text-align: left;
		cursor: pointer;
	}
	.new {
		margin-bottom: 20px;
	}
	.new,
	.new_pic {
		margin-left: 20px;
	}
	.board {
		margin: 0px 20px 0px 20px;
	}
	.board_data {
		display: flex;
		padding: 20px 10px 20px 0px;
	}
	.detail {
		text-align: left;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		margin-left: 10px;
	}
	.profile {
		background: #dbdbdb;
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.board_img {
		width: 560px;
		height: 415px;
	}
	.board_caption {
		margin: 20px 0px 20px 0px;
		text-align: left;
	}
	.board_likes {
		padding-bottom: 11px;
		text-align: left;
	}
</style>

<script>
	import BoardCreateVue from "./BoardCreate.vue";

	import axios from "axios";
	export default {
		components: {
			// TheHeaderVue,
			BoardCreateVue,
		},
		data() {
			return {
				isImage: false,
				isActive: false,
				users: [],
			};
		},

		created() {
			//Vuex의 actions에 함수 등록해서 BoardCreate.vue에서 "게시"버튼 누르면 클릭하는게 나음
			var vm = this;
			axios
				.get("http://photoshoot-backend.herokuapp.com/api/v1/feeds/")
				.then(function (response) {
					vm.users = response.data;
					// console.log(vm.users.results[7].photos[0]);
				})
				.catch(function (err) {
					console.log(err);
				});

			console.log();
		},

		methods: {
			console: function () {
				console.log(this.users.results[0].id);

				console.log(this.users.results[9].photos);
				console.log(this.users.results[0].photos);

				console.log(this.users.results[0].photos.length);
			},
			existImage: function () {
				this.console();
				console.log("AA");
				for (var i = 0; i < this.users.count; i++) {
					if (this.users.results[i].photos.length == 0) {
						// console.log(this.users.results[0].id);

						// this.users.results[i].photos["file"] = "@/assets/honsuri.jpg";
						this.users.results[i].photos.push({ file: "@/assets/honsuri.jpg" });
					}
				}
			},
		},
	};
</script>
