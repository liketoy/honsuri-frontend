<template>
	<div class="conversation_container">
		<h1 class="title">수리와 대화하기</h1>
		<BubbleHonsuri />
		<BubbleUser />
		<BubbleResult v-if="this.$store.state.qna_count >= 16" />
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
	import BubbleResult from "@/components/conversation/BubbleResult.vue";
	import axios from "axios";

	export default {
		name: "SectionConversation",
		components: {
			BubbleHonsuri,
			BubbleUser,
			BubbleResult,
		},
		data() {
			return {};
		},
		// 추후 API 호출 부분 정리 !!!!
		// 처음에 혼수리 대화 하기 데이터를 불러오기 위함
		created() {
			const mbti_url = "http://ec2-18-215-16-128.compute-1.amazonaws.com:8000/mbti/";
			const mbti_id = this.$store.state.qna_count;
			// 사용자가 mbti test 답안을 선택할 때 마다, count++ 되는데, 그때의 count를 url 뒤에 붙여서 API 통신
			const full_url = mbti_url + mbti_id;
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
		// qna_count 값이 업데이트 될 때 마다, 새로운 질문을 불러오기 위함
		updated() {
			const mbti_url = "http://ec2-18-215-16-128.compute-1.amazonaws.com:8000/mbti/";
			const mbti_id = this.$store.state.qna_count;
			// 사용자가 mbti test 답안을 선택할 때 마다, count++ 되는데, 그때의 count를 url 뒤에 붙여서 API 통신
			const full_url = mbti_url + mbti_id;
			// qna_count 값이 16보다 작을 때, 다음 질문을 불러옴.
			if (this.$store.state.qna_count < 16) {
				axios
					.get(full_url)
					.then(res => {
						this.$store.state.question = res.data.question;
						this.$store.state.answer = res.data.answer;
					})
					.catch(err => {
						console.log(err);
					});
			}
			// qua_count가 16이 되면 대화 종료 -> MBTI 결과값 반환
			if (this.$store.state.qna_count === 16) {
				console.log("MBTI 테스트 끝 🎉");
				let dictMBTI = this.$store.state.dictMBTI;
				// 사용자의 MBTI 결과값 반환
				for (let key in dictMBTI) {
					// 2 이상의 값을 가지고 있는 key로 MBTI 결과값 반환
					if (dictMBTI[key] >= 2) {
						this.$store.state.mbti_result += key;
					}
				}
				console.log(this.$store.state.mbti_result);
			}
		},
	};
</script>
