<template>
	<div class="board_create_container" v-show="isActive">
		<div class="board_create_box">
			<div class="board_create_head">
				<div class="board_title">글쓰기</div>
				<div class="x__wrapper" @click="closeMusicBox">
					<span class="x__btn">X</span>
				</div>
			</div>

			<div class="board_contents">
				<textarea type="text" v-model="form.caption" />
				<input
					ref="image"
					id="input"
					type="file"
					name="image"
					accept="image/*"
					multiple="multiple"
					class="hidden"
					@change="conformImg()"
				/>

				<!-- @change="uploadImage()" -->
				<!-- <input multiple accept="image/*" type="file" id="file" class="inputfile" /> -->
			</div>
			<img v-if="previewImgUrl" :src="previewImgUrl" />
			<div class="create_board">
				<button class="create_btn" @click="upload()">게시</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.board_create_container {
		position: fixed;
		z-index: 1;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
	}
	.board_create_box {
		position: absolute;
		height: 300px;
		width: 700px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
	}
	.board_create_head {
		display: flex;
		justify-content: center;
		align-content: center;
		margin: 20px 0px 30px 0px;
	}
	.board_title {
		padding-left: 24px;
	}
	.x__wrapper {
		background: #191919;
		cursor: pointer;
		border-radius: 50%;
		width: 24px;
		height: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: relative;
		left: 279px;
		margin: 0;
	}
	.x__btn {
		color: white;
		/* text-align: center; */
	}
	.board_contents {
		padding: 0px 60px 0px 60px;
	}
	textarea {
		width: 100%;
		padding: 0px !important;
		height: 100px;
		resize: none;
	}
	.create_board {
		display: flex;
		justify-content: center;
		margin: 20px 0px 20px 0px;
	}
	.create_btn {
		background: black;
		color: white;
		width: 80px;
		height: 49px;
		border: none;
	}
</style>

<script>
	// import TheMusicCardVue from "./TheMusicCard.vue";
	import axios from "axios";

	export default {
		name: "TheMusicBox",
		components: {
			// TheMusicCardVue,
		},
		props: ["isActive"],
		methods: {
			closeMusicBox: function () {
				this.$emit("updateIsActive");
			},
			conformImg: function () {
				let formData = new FormData();
				let image = this.$refs["image"].files[0];

				formData.append("photos", image);
				formData.append("caption", this.form.caption);

				console.log(formData.get("caption"));
				console.log(formData.getAll("photos"));
			},
			upload: function () {
				let formData = new FormData();
				let image = this.$refs["image"].files[0];

				// formData.append("userpic[]", myFileInput.files[0], "chris1.jpg");
				formData.append("photos", image);
				formData.append("caption", this.form.caption);
				// formData.append("file", image);

				axios
					.post("http://photoshoot-backend.herokuapp.com/api/v1/feeds/", formData, {
						header: { "Content-Type": "multipart/form-data" },
					})
					.then(({ data }) => {
						this.images = data;
						// console.log(formData.caption);
						// console.log(formData.photos);
					})
					.catch(err => console.log(err));

				// console.log(this.form);
				this.closeMusicBox();
			},
			clickInputTag: function () {
				this.$refs["image"].click();
			},
		},
		data() {
			return {
				previewImgUrl: null,
				images: "",
				form: {
					caption: "",
					photos: [
						{
							file: "",
						},
					],
				},
			};
		},
		updated() {
			console.log(this.form.caption);
		},
	};
</script>
