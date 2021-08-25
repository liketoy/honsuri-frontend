<template>
	<div class="add_post_container">
		<div class="add_post_content">
			<p>새로운 소식을 남겨보세요.</p>
			<img src="@/assets/icons/image.png" width="30px" height="30px" />
		</div>
	</div>
</template>

<style scoped>
	.add_post_container {
		display: flex;
		justify-content: center;
	}
	.add_post_content {
		text-align: start;
		width: 600px;
		height: 99px;
		background: #ffffff;
		box-shadow: 1px 1px 2px #00000029;
		border-radius: 8px;
		padding-block: 10px;
	}
	.add_post_content p {
		margin-bottom: 20px;
		height: 29px;
		font-size: 20px;
		color: #767676;
	}
</style>
