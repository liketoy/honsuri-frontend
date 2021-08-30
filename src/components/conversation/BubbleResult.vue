<template>
	<div>
		<div class="container pointer">
			<img class="honsuri_img" src="@/assets/icons/honsuri.png" />
			<a class="honsuri_text" @click="GET_RECOMMEND_COCKTAIL()">
				그렇군요... 여기를 누르면 손님을 위한 칵테일을 추천해드릴게요.
			</a>
		</div>
		<div class="container none_img_margin">
			<div class="honsuri_text cocktail_text" v-if="recommend">
				<p>오늘의 추천 칵테일은...</p>
				<h1>{{ recommend_cock }}</h1>
				<p>"{{ recommend_comment }}"</p>
				<!-- 쿼리가 있으면, `/recipes/?id=${recommend_cock_id}` 형식이 됨 -->
				<router-link :to="'recipes/' + this.$store.state.recommend_cock_id">
					<button>레시피 보러가기</button>
				</router-link>
			</div>
			<div class="honsuri_text" v-if="recommend">
				<img
					class="cock_img"
					v-bind:src="require(`@/assets/images/mbti_cock/${recommend_cock_photo}`)"
					width="230px"
					height="235px"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container {
		display: flex;
		margin-block: 30px;
	}
	.honsuri_img {
		width: 50px;
		height: 50px;
		margin-right: 20px;
	}
	.honsuri_text {
		font-size: 20px;
		font-weight: 600;
		padding-inline: 25px;
		padding-block: 25px;
		background: #ededed;
		box-shadow: 2px 2px 2px #00000029;
		border-radius: 8px;
		text-align: left;
	}
	.pointer {
		cursor: pointer;
	}
	.none_img_margin {
		/* 이미지 없는 대신, margin 값으로 여백을 채움 */
		margin-left: 70px;
	}
	.cocktail_text {
		text-align: center;
	}
	.cocktail_text p {
		font-size: 23px;
		font-weight: 600;
		margin-bottom: 15px;
		margin-top: 10px;
	}
	.cocktail_text h1 {
		font-size: 27px;
		font-weight: 800;
		margin-bottom: 10px;
	}
	.cocktail_text button {
		color: white;
		width: 300px;
		font-size: 20px;
		background-color: #191919;
		margin-top: 30px;
		height: 49px;
		border: none;
		cursor: pointer;
	}
	.cock_img {
		margin-block: auto;
	}
</style>

<script>
	import axios from "axios";
	import { mapState } from "vuex";

	export default {
		name: "BubbleResult",
		data() {
			return {
				recommend: false,
				recommend_photo_url: "",
			};
		},
		computed: {
			...mapState(["recommend_comment", "recommend_cock", "recommend_cock_id", "recommend_cock_photo"]),
		},
		methods: {
			// mbti_result를 파라미터로 하여 결과값을 가져올 예정
			GET_RECOMMEND_COCKTAIL: function () {
				const mbti_result = { mbti: this.$store.state.mbti_result };
				axios
					.get("https://honsuri-backend.herokuapp.com/mbti", {
						params: mbti_result,
					})
					.then(res => {
						console.log("불러오기 성공");
						this.$store.state.recommend_comment = res.data[0].comment;
						this.$store.state.recommend_cock_id = res.data[0].recipe.id;
						this.$store.state.recommend_cock = res.data[0].recipe.name;
						this.$store.state.recommend_cock_photo = res.data[0].recipe.photo;
						console.log(this.$store.state.recommend_cock_photo);
						// console.log(res.data[0].comment); // 코멘트
						// console.log(res.data[0].recipe.id); // 게시물 id
						// console.log(res.data[0].recipe.name); // 게시물 이름
						// console.log(res.data[0].recipe.photo); // 게시물 사진 파일명
						this.recommend = true; // true 값일 때 결과값을 보여주는 bubble 이 show 됨
					})
					.catch(err => {
						console.log("불러오기 실패");
						console.log(err);
					});
			},
		},
	};
</script>
