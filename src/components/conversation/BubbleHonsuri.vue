<template>
	<div class="container">
		<img class="honsuri_img" src="@/assets/icons/honsuri.png" />
		<p class="honsuri_text">{{ $store.state.question }}</p>
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
		padding-inline: 20px;
		padding-block: 20px;
		background: #ededed;
		box-shadow: 2px 2px 2px #00000029;
		border-radius: 8px;
		text-align: left;
	}
</style>

<script>
	import { mapState } from "vuex";

	export default {
		name: "BubbleHonsuri",
		data() {
			return {};
		},
		state: {
			// Issue. template에서 mapState 활용이 왜 안될까!! {{question}}
			...mapState(["question"]),
		},
	};
</script>
