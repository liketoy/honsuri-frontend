<template>
	<div class="feeds">
		<div class="head"><TheHeaderVue :color="black" /></div>

		<div class="feeds__container">
			<div class="feeds__title">
				<h1>방명록</h1>
			</div>
			<div class="feeds__search">
				<input
					type="text"
					class="feeds__input"
					v-model="searchContent"
					style="height: 100%"
					placeholder="글 내용 검색"
				/>
				<img class="search__icon" src="@/assets/icons/search.png" alt="searchIcon" @click="searchFeed" />
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
			<wrap v-if="onlyOneFeed"><TheFeedCardVue /></wrap>
			<wrap v-else><TheFeedCardVue v-for="feed in feeds" :key="feed.id" :feed="feed" /></wrap>
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
				searchContent: "",
				Url: "http://ec2-18-215-16-128.compute-1.amazonaws.com:8000/post?keyword=",
				keywordUrl: "", //댓글쓰기 누르면 반복문을 멈추고 피드가 하나만 보이도록 하기 위함
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
				this.selectedFile = this.$refs.feedImage.files[0];
				console.log(this.$refs.feedImage.files[0]);
			},
			onSubmit: function () {
				this.$store.dispatch("POST_FEED", { content: this.content, image: this.selectedFile });
			},
			searchFeed: function () {
				this.keywordUrl = this.Url + this.searchContent;
				console.log(this.keywordUrl);
				this.$store.dispatch("GET_FEEDS", this.keywordUrl);
				//검색어 중복을 위한 변수 초기화
				this.keywordUrl = "";
			},
		},
		mounted() {
			this.$store.dispatch("GET_FEEDS");
		},
	};
</script>
