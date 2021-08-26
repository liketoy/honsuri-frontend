<template>
	<div class="conversation_container">
		<h1 class="title">수리와 대화하기</h1>
		<BubbleHonsuri v-bind:question="$store.state.question" />
		<BubbleUser v-bind:answer="$store.state.answer" />
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
			return {
				result: "",
			};
		},
		// 추후에 API 호출 부분 분리할게요 !!!!
		created() {
			const mbti_url = "http://ec2-18-215-16-128.compute-1.amazonaws.com:8000/mbti/";
			const mbti_id = this.$store.state.qna_count;
			// 사용자가 mbti test 답안을 선택할 때 마다, count++ 되는데, 그때의 count를 url 뒤에 붙여서 API 통신
			const full_url = mbti_url + mbti_id + "/";
			axios
				.get(full_url)
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
		updated() {
			const mbti_url = "http://ec2-18-215-16-128.compute-1.amazonaws.com:8000/mbti/";
			const mbti_id = this.$store.state.qna_count;
			// 사용자가 mbti test 답안을 선택할 때 마다, count++ 되는데, 그때의 count를 url 뒤에 붙여서 API 통신
			const full_url = mbti_url + mbti_id + "/";

			axios
				.get(full_url)
				.then(res => {
					// console.log(res.data);
					// console.log(res.data.question);
					this.$store.state.question = res.data.question;
					// console.log(res.data.answer);
					this.$store.state.answer = res.data.answer;
				})
				.catch(err => {
					console.log(err);
				});
			// qua_count가 n이 되면 대화 종료 -> MBTI 결과값 반환
			if (this.$store.state.qna_count === 16) {
				console.log("MBTI 테스트 끝 🎉");
				let dictMBTI = this.$store.state.dictMBTI;
				// console.log("E는 " + this.$store.state.dictMBTI["E"]);
				// console.log("I는 " + this.$store.state.dictMBTI["I"]);
				// console.log("S는 " + this.$store.state.dictMBTI["S"]);
				// console.log("N는 " + this.$store.state.dictMBTI["N"]);
				// console.log("T는 " + this.$store.state.dictMBTI["T"]);
				// console.log("F는 " + this.$store.state.dictMBTI["F"]);
				// console.log("P는 " + this.$store.state.dictMBTI["P"]);
				// console.log("J는 " + this.$store.state.dictMBTI["J"]);
				for (let key in dictMBTI) {
					if (dictMBTI[key] >= 2) {
						console.log(key);
						this.result += key;
						console.log(this.result);
					}
				}
			}
		},
	};
</script>
