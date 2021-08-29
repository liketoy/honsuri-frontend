<template>
	<div class="container">
		<img class="user_img" src="@/assets/images/user.jpeg" />
		<div class="text_container">
			<div class="bubble top">
				<a
					@click="
						COUNT_QnA_ID();
						SELECT_A();
					"
					class="test_text"
					>A. {{ $store.state.answer[Object.keys($store.state.answer)[0]] }} <br />
				</a>
			</div>
			<div class="bubble bottom">
				<a
					@click="
						COUNT_QnA_ID();
						SELECT_B();
					"
					class="test_text"
				>
					B. {{ $store.state.answer[Object.keys($store.state.answer)[1]] }}
				</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container {
		display: flex;
		flex-direction: row-reverse;
		margin-block: 40px;
		display: flex;
	}
	.user_img {
		width: 50px;
		height: 50px;
		margin-left: 20px;
		border-radius: 50%;
	}
	.text_container {
		display: flex;
		flex-direction: column;
	}
	.bubble {
		font-size: 20px;
		font-weight: 600;
		padding-inline: 20px;
		padding-block: 20px;
		background: #ededed;
		box-shadow: 2px 2px 2px #00000029;
		text-align: left;
	}
	.top {
		border-radius: 8px 8px 0px 0px;
		border-bottom: solid 1px #dbdbdb;
	}
	.bottom {
		border-radius: 0px 0px 8px 8px;
	}

	.test_text:hover {
		box-shadow: inset 0 -9px 0 rgb(221, 152, 23);
		cursor: pointer;
	}
</style>

<script>
	import { mapState } from "vuex";

	export default {
		name: "BubbleUser",
		state: {
			...mapState(["answer", "dictMBTI"]),
		},
		methods: {
			COUNT_QnA_ID: function () {
				// user가 답변 선택시 count++ (이 값을 api url 뒷 부분에 넣어줘서 다음 질문을 불러옴)
				this.$store.state.qna_count += 1;
			},
			SELECT_A: function () {
				// dictMBTI 객체, 해당 답변의 Key의 Value ++1
				// Q. 함수 내에서 mapState를 사용하는 방법이 없을까?! 코드 가독성이 떨어져서 슬프군.
				// Object.keys(this.$store.state.answer)[0] 은 MBTI 유형이 담긴 값 (E I S N F J ... 등)
				this.$store.state.dictMBTI[Object.keys(this.$store.state.answer)[0]] += 1;
				console.log(this.$store.state.dictMBTI);
				console.log("A 선택.");
			},
			SELECT_B: function () {
				// dictMBTI 객체, 해당 답변의 Key의 Value ++1
				// Object.keys(this.$store.state.answer)[1] 은 MBTI 유형이 담긴 값 (E I S N F J ... 등)
				this.$store.state.dictMBTI[Object.keys(this.$store.state.answer)[1]] += 1;
				console.log(this.$store.state.dictMBTI);
				console.log("B 선택.");
			},
		},
	};
</script>
