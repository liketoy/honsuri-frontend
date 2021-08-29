<template>
	<div class="comment__card">
		<div class="comment__container">
			<div class="comment__info">
				<div class="user__avatar"></div>
				<div class="user__info">
					<div class="user__name">익명</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.comment__card {
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
	.comment__container {
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
</style>

<script>
	export default {
		name: "CommentVue",
		props: ["comment"],
		data: function () {
			return {};
		},
		methods: {
			// 1. birth 관련 조건이 맞으면 버튼 활성화
			like: function () {
				this.isLiked = !this.isLiked;
				if (this.isLiked == true) {
					this.feed.like_count += 1;
					this.LikeSrc = this.heartSrc;
				} else {
					this.feed.like_count -= 1;
					this.LikeSrc = this.grayheartSrc;
				}
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
	};
</script>
