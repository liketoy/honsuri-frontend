<template>
	<div class="comment__card">
		<div class="comment__container">
			<div class="commenter__info">
				<div class="commenter__avatar"></div>
				<!--동그란거 들어갈거임-->
				<div class="commenter__name">익명</div>
			</div>
			<div class="comment__content">
				{{ comment.content }}
			</div>
		</div>
	</div>
</template>

<style scoped>
	.commenter__avatar {
		width: 40px;
		height: 40px;
		background: #dbdbdb;
		border-radius: 50%;
		display: flex;
	}

	.comment_container {
		min-width: 490px;
		padding: 0px 0px 20px;
		display: flex;
		flex-direction: column;
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
	export default {
		name: "CommentVue",
		props: ["comment"],
	};
</script>
