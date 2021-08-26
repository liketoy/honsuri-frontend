<template>
	<div class="container">
		<img class="user_img" src="@/assets/icons/user.png" />
		<p class="user_text">
			A. 혼자왔어요<br />
			B. 저 이전에도 왔는데....
		</p>
	</div>
</template>

<style scoped>
	.container {
		display: flex;
		flex-direction: row-reverse;
		margin-block: 30px;
	}
	.user_img {
		width: 50px;
		height: 50px;
		margin-left: 20px;
		border-radius: 50%;
	}
	.user_text {
		font-size: 20px;
		font-weight: 600;
		padding-inline: 20px;
		padding-block: 20px;
		background: #ededed;
		box-shadow: 2px 2px 2px #00000029;
		border-radius: 8px;
		text-align: left;
	}
</style>
