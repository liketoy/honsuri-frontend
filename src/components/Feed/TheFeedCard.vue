<template>
	<div class="feed__card">
		<div class="card__container">
			<div class="card__info">
				<div class="user__avatar"></div>
				<div class="user__info">
					<div class="user__name">익명</div>
					<div class="created__at">{{ feed.created_at | toDatetime() }}</div>
				</div>
			</div>
			<div class="card__content">
				<div class="card__image">
					<img v-if="feed.photos[0]" :src="feed.photos[0].image" alt="photo" />
					<img v-else src="@/assets/images/default_img.png" alt="default__photo" />
				</div>
				<div class="card__caption">
					<p>{{ feed.content }}</p>
				</div>
			</div>
			<div class="card__count">
				<span class="count__likes">좋아요 {{ feed.like_count }}</span>
			</div>
		</div>
		<div class="btn__container">
			<!--v-if="$store.state.isLoggedIn"생략-->
			<div class="card__btn">
				<div class="btn">
					<label style="cursor: pointer" @click="Like"><img :src="LikeSrc" alt="heart" /> <span>좋아요</span></label>
				</div>
				<div class="btn">
					<label style="cursor: pointer" @click="AvailComment"
						><img src="@/assets/icons/speech-bubble.png" alt="bubble" /> <span>댓글쓰기</span></label
					>
				</div>
			</div>
		</div>
		<div class="comment_container" v-show="commentAvail">
			<div class="commenter__avatar"></div>
			<div class="commenter__content">
				<label
					><input type="text" class="input__comment" v-model="commentContent" placeholder="댓글을 입력하세요."
				/></label>
				<button style="cursor: pointer font-size:20px" @click="onSubmitComment">작성</button>
			</div>
			<div class="comments_list"></div>
			<CommentVue v-for="comment in comments" :key="comment.id" :comment="comment" />
		</div>
	</div>
</template>

<style scoped>
	.feed__card {
		margin-top: 20px;
		width: 100%;
		height: auto;
		box-sizing: border-box;
		background: #fff;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.card__container {
		padding: 20px;
		min-width: 560px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.card__info {
		display: flex;
		width: 100%;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
	}
	.user__avatar {
		width: 60px;
		height: 60px;
		background: #dbdbdb;
		border-radius: 50%;
	}
	.user__info {
		text-align: left;
	}
	.user__name {
		font-size: 20px;
		font-weight: 600;
	}
	.created__at {
		color: #767676;
		font-size: 12px;
	}
	.card__content {
		margin-top: 20px;
		width: 100%;
	}
	.card__image img {
		width: 100%;
		height: 415px;
		object-fit: cover;
	}
	.card__caption {
		margin-top: 20px;
		text-align: left;
		font-size: 20px;
	}
	.card__count {
		margin-top: 20px;
		font-size: 16px;
		font-weight: 600;
	}
	.btn__container {
		width: 100%;
		border-top: 1px solid #dbdbdb;
	}
	.card__btn {
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 20px;
	}
	.btn {
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn img {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	.commenter__avatar {
		margin-left: 10px;
		width: 50px;
		height: 50px;
		background: #dbdbdb;
		border-radius: 50%;
		display: flex;
	}

	.comment_container {
		margin-right: 10px;
		min-width: 490px;
		padding: 0px 0px 20px;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		float: left;
		align-content: center;
	}

	.input__comment {
		margin-left: 10px;
		width: 510px;
		background-color: #ededed;
		border-radius: 10px;
		opacity: 1;
		height: 30px;
		text-align: left;
		font-size: 16px;
		padding: 10px;
		border: none;
	}
</style>

<script>
	import CommentVue from "./CommentVue.vue";
	export default {
		name: "TheFeedCard",
		props: ["feed"],
		data: function () {
			return {
				isLiked: false,
				LikeSrc: require("@/assets/icons/gray_heart.png"),
				heartSrc: require("@/assets/icons/full_heart.png"),
				grayheartSrc: require("@/assets/icons/gray_heart.png"),
				commentAvail: false,
				commentContent: "",
				post_id: this.feed.id,
				//댓글쓰기 누르면 true로 바꿔줄 예정,
			};
		},
		components: {
			CommentVue,
		},
		computed: {
			comments() {
				return this.$store.state.comments;
			},
		},
		methods: {
			// 1. birth 관련 조건이 맞으면 버튼 활성화
			Like: function (id) {
				this.isLiked = !this.isLiked;
				if (this.isLiked == true) {
					this.feed.like_count += 1;
				} else {
					this.feed.like_count -= 1;
				}
				this.$store.dispatch("POST_LIKE", id);
			},
			AvailComment: function () {
				this.commentAvail = !this.commentAvail;
				console.log(this.post_id);
				this.$store.dispatch("GET_COMMENTS", this.post_id);
			},
			onSubmitComment: function () {
				this.$store.dispatch("POST_COMMENT", { commentContent: this.commentContent });
				console.log("됐다~");
			},
		},
		filters: {
			toDatetime(value) {
				const date = new Date(value);
				const year = date.getFullYear();
				const month = 1 + date.getMonth();
				const day = date.getDate();
				let hour = date.getHours();
				const min = date.getMinutes();
				let str_ampm;
				if (hour < 12) {
					str_ampm = "오전";
				} else {
					hour -= 12;
					str_ampm = "오후";
				}
				return `${year}년 ${month}월 ${day}일 ${str_ampm} ${hour}:${min}`;
			},
		},
		mounted() {
			this.$store.dispatch("GET_COMMENTS");
		},
	};
</script>
