<template>
	<div class="post_container">
		<div :key="i" v-for="(post, i) in allGuestBookList" class="post_content">
			<div class="post_userInfo">
				<div class="circle" />
				<div class="text_info">
					<p class="user_name">USER NAME</p>
					<p class="created">{{ post.created }}</p>
				</div>
			</div>
			<div class="post_postInfo">
				<img v-if="post.photos[0]" :src="post.photos[0].file" />
				<p class="caption">{{ post.caption }}</p>
				<p class="like">좋아요 {{ post.likes }}</p>
				<hr />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.post_container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.post_content {
		text-align: start;
		width: 600px;

		background: #ffffff;
		box-shadow: 1px 1px 2px #00000029;
		border-radius: 8px;
		padding-block: 10px;
		margin-inline: auto;
		margin-block: 20px;
	}
	/* 유저 정보 관련 */
	.post_userInfo {
		display: flex;
		margin-inline: 20px;
		margin-top: 10px;
	}
	.post_userInfo .circle {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: #dbdbdb;
	}
	.post_userInfo .text_info {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
	}
	.post_userInfo .text_info .user_name {
		font-size: 20px;
		font-weight: 600;
		margin-top: 4px;
	}
	.post_userInfo .text_info .created {
		font-size: 12px;
		color: #767676;
		margin-top: 4px;
	}
	/* 작성 글 관련 */
	.post_postInfo {
		margin-inline: 20px;
	}
	.post_postInfo img {
		width: 560px;
		margin-block: 20px;
	}
	.post_postInfo .caption {
		font-size: 20px;
	}
	.post_postInfo .like {
		font-size: 16px;
		font-weight: 600;
	}
</style>

<script>
	import { mapState } from "vuex";

	export default {
		name: "GuestBookPost",
		computed: {
			...mapState(["allGuestBookList"]),
		},
	};
</script>
