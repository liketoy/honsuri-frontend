<template>
	<div class="upload_container">
		<div class="upload_content">
			<input v-model="upload_caption" />
			<input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
			<button
				@click="
					uploadGuestBook({
						caption: upload_caption,
						photos: upload_image,
					})
				"
			>
				서버로 전송하기
			</button>
		</div>
	</div>
</template>

<style scoped>
	.upload_container {
		display: flex;
		justify-content: center;
	}
	.upload_content {
		text-align: start;
		width: 600px;
		background: #ffffff;
		box-shadow: 1px 1px 2px #00000029;
		border-radius: 8px;
		padding-block: 10px;
	}
</style>

<script>
	import { mapActions } from "vuex";

	export default {
		name: "GuestBookUpload",
		data() {
			return {
				upload_caption: null,
				upload_image: null,
			};
		},
		methods: {
			...mapActions(["uploadGuestBook"]),
			// 파일 변경시 이벤트 핸들러
			upload(e) {
				let file = e.target.files;
				console.log(file[0]);
				this.upload_image = file[0];
				// console.log(this.upload_image);
				// let url = URL.createObjectURL(file[0]);
				// this.upload_image = [url];
			},
			// createObj(){
			//     const form = new FormData();
			//     form.append('caption', this.upload_caption);
			//     form.append('photos', this.upload_image);
			//     this.$store.dispatch('uploadGuestBook', {form});
			// }
		},
	};
</script>
