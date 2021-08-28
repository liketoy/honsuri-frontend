<template>
	<div class="feeds">
		<div class="head"><TheHeaderVue :color="black" /></div>

		<div class="feeds__container">
			<div class="feeds__title">
				<h1>방명록</h1>
			</div>
			<div class="feeds__search">
				<input type="text" class="feeds__input" style="height: 100%" placeholder="글 내용, 작성자 검색" />
				<img class="search__icon" src="@/assets/icons/search.png" alt="searchIcon" />
			</div>
			<div class="feeds__textbox">
				<input type="text" class="feeds__input" v-model="content" placeholder="새로운 소식을 남겨보세요." />
				<div class="btn">
					<label class="image__input__button" for="image__input" style="margin-top: 5px">
						<!--기본UI를 아이콘 모양으로 커스텀하기 위함-->
						<img src="@/assets/icons/photo.png" style="cursor: pointer" />
					</label>
					<input
						type="file"
						id="image__input"
						accept="image/*"
						@change="onInputImage"
						ref="feedImage"
						style="display: none"
					/>
					<input type="button" class="attachimage" @click="onSubmit" value="제출" style="display: inline" />
				</div>
			</div>
			<TheFeedCardVue v-for="feed in feeds" :key="feed.id" :feed="feed" />
		</div>
	</div>
</template>

<style scoped>
	.feeds {
		padding-top: 140px;
		background: #ededed;
	}
	.feeds__container {
		width: 600px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.feeds__title {
		align-self: flex-start;
		width: 100%;
		padding-bottom: 18px;
		border-bottom: 1px solid #191919;
		margin-bottom: 50px;
	}
	.feeds__title h1 {
		text-align: left;
		font-size: 36px;
		font-weight: 700;
	}
	.feeds__search {
		width: 100%;
		height: 50px;
		border-radius: 8px;
		position: relative;
		box-sizing: border-box;
		box-shadow: 1px 1px 2px #00000029;
		margin-bottom: 20px;
		padding: 15px 20px;
		background: #fff;
	}
	.feeds__input {
		border: none;
		box-sizing: border-box;
		width: 100%;
		overflow: hidden;
		font-size: 20px;
	}
	.feeds__input::placeholder {
		color: #767676;
	}
	.feeds__input:focus {
		outline: none;
	}
	.search__icon {
		position: absolute;
		top: 15px;
		right: 20px;
		overflow: hidden;
		cursor: pointer;
	}
	.feeds__textbox {
		width: 100%;
		height: 100px;
		padding: 15px 20px;
		box-sizing: border-box;
		border-radius: 8px;
		background: #fff;
		box-shadow: 1px 1px 2px #00000029;
	}
	.btn {
		display: flex;
		justify-content: space-between;
	}
</style>

<script>
	import TheFeedCardVue from "../components/Feed/TheFeedCard.vue";
	import TheHeaderVue from "../components/TheHeader.vue";

	export default {
		name: "Feeds",
		data() {
			return {
				black: "#191919",
				content: "",
				selectedFile: "",
			};
		},
		computed: {
			feeds() {
				return this.$store.state.feeds;
			},
		},
		components: {
			TheHeaderVue,
			TheFeedCardVue,
		},
		methods: {
			onInputImage: function () {
				this.selectedFile = this.$refs.feedImage.image[0];
				console.log("온풋이미지");
			},
			onSubmit: function () {
				this.$store.dispatch("POST_FEED", { content: this.content, photos: this.selectedFile });
			},
		},
		mounted() {
			this.$store.dispatch("GET_FEEDS");
		},
	};
</script>
