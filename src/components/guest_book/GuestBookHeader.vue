<template>
	<div class="header_container">
		<h1>방명록</h1>
	</div>
</template>

<style scoped>
	.header_container {
		display: flex;
		justify-content: center;
		margin-top: 130px;
	}
	.header_container h1 {
		font-size: 36px;
		font-weight: 700;
		text-align: left;
	}
	h1:after {
		content: "";
		display: block;
		width: 600px;
		border-bottom: 2px solid #767676;
		margin: 20px auto;
		margin-bottom: 50px;
	}
</style>
