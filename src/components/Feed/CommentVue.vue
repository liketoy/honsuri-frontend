<template>
	<div class="comment__card">
		<div class="comment__container">
			<div class="commenter__info">
				<div class="commenter__avatar"></div>
				<!--동그란거 들어갈거임-->
				<div class="commenter__name" style="padding: 5px 10px">익명</div>
			</div>
			<div class="comment__content">
				{{ comment.content }}
			</div>
		</div>
	</div>
</template>

<style scoped>
	.comment__card {
		width: 100%;
		min-height: 100;
	}
	.commenter__avatar {
		width: 40px;
		height: 40px;
		background: #dbdbdb;
		border-radius: 50%;
		display: flex;
	}
	.commenter__info {
		left: 20px;
		display: flex;
		padding: 10px 0px;
		font-weight: 500;
		font-size: 18px;
	}
	.comment_container {
		padding: 3px;
		width: 510px;
		display: block;
		align-items: flex-start;
		align-content: center;
	}

	.comment__content {
		width: 450px;
		background-color: #ededed;
		border-radius: 10px;
		opacity: 1;
		height: 30px;
		text-align: left;
		font-size: 16px;
		font-weight: 500;
		padding: 10px 30px;
		border: none;
	}
</style>

<script>
	export default {
		name: "CommentVue",
		props: ["comment"],
	};
</script>
