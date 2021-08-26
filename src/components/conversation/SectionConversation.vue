<template>
	<div class="conversation_container">
		<h1 class="title">수리와 대화하기</h1>
		<BubbleHonsuri />
		<BubbleUser />
	</div>
</template>

<style scoped>
	.conversation_container {
		width: 1280px;
		height: 800px;
		background-color: #ffffff !important;
		box-shadow: 1px 1px 2px #00000029;
		border-radius: 8px;
		margin-inline: auto;
		margin-block: 50px;
		padding-inline: 60px;
		padding-block: 40px;
	}
	.title {
		font-size: 36px;
		font-weight: 700;
		text-align: start;
	}
	.title:after {
		content: "";
		display: block;
		width: 1280px;
		border-bottom: 1px solid #767676;
		margin-top: 30px;
	}
</style>

<script>
	import BubbleHonsuri from "@/components/conversation/BubbleHonsuri.vue";
	import BubbleUser from "@/components/conversation/BubbleUser.vue";
	import axios from "axios";

	export default {
		name: "SectionConversation",
		components: {
			BubbleHonsuri,
			BubbleUser,
		},
		data() {
			return {};
		},
		created() {
			axios
				.get("http://ec2-18-215-16-128.compute-1.amazonaws.com:8000/mbti/1/")
				.then(res => {
					console.log(res.data);
					console.log(res.data.question);
					this.$store.state.question = res.data.question;
					console.log(res.data.answer);
					this.$store.state.answer = res.data.answer;
				})
				.catch(err => {
					console.log(err);
				});
		},
	};
</script>
