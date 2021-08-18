<template>
	<!-- 3. v-if = "intranceContainerDisable" 를 통해 true일땐 container가 보이고, false일 때 보이지 않음. -->
	<!-- Q. true 인데 왜 안될까 -->
	<div class="intrance__container" id="intrance__container" v-show="intranceContainerDisable">
		<div class="intrance__content">
			<h1>HONSURI</h1>
			<h2>'혼수리바'에 오신걸 환영합니다.</h2>
			<p>당신의 태어난 연도를 알려주세요.</p>
			<!-- v-model 통해 birth 값 데이터바인딩 -->
			<input class="year__input" placeholder="YYYY" v-model="birth" maxlength="4" @input="onlyNumbers" />
			<p><input type="checkbox" id="remember" /><label for="remember">기억하기</label></p>
			<!-- 2. button을 누르면 intranceContainerDisable 값이 false로 변경하고,
			Home.vue의 IsClosedLanding 값을 true로 변경해주는 함수 실행-->
			<button :disabled="!intranceBtnActive" @click="closeLanding">입장하기</button>
		</div>
	</div>
</template>

<style scoped>
	.intrance__container {
		z-index: 1; /* 1순위로 보여지는 div (가장 앞으로 가져옴) */
		position: fixed;
		display: table; /* display table 속성을 주어, 수직정렬 구현 */
		width: 100%;
		height: 100%;
		background-color: #ffff;
		opacity: 0.9;
	}
	.intrance__content {
		display: table-cell;
		vertical-align: middle;
	}
	.year__input {
		border-radius: 0px;
		border: solid;
		margin-top: 33px;
		margin-bottom: 50px;
		width: 100px;
		height: 80px;
		background-color: white;
		opacity: 1;
	}
	.year__input::placeholder {
		color: black;
		font-size: 30px;
		text-align: center;
		font-weight: medium;
	}
	.intrance__content h1 {
		font-size: 80px;
		font-weight: bold;
		height: 96px;
		margin-bottom: 10px;
	}
	.intrance__content h2 {
		font-size: 50px;
		margin-top: 10px;
		font-weight: 400;
		height: 74px;
		margin-bottom: 30px;
	}
	.intrance__content p {
		font-size: 20px;
	}

	.intrance__content button {
		color: white;
		border-radius: 0px;
		border: 0px;
		width: 300px;
		height: 49px;
		font-size: 20px;
		background-color: black;
		margin-top: 30px;
		cursor: pointer;
	}
	.intrance__content button:disabled {
		color: rgb(204, 204, 204);
		border-radius: 0px;
		border: 0px;
		width: 300px;
		height: 49px;
		font-size: 20px;
		background-color: rgb(173, 173, 173);
		margin-top: 30px;
		cursor: default;
	}
</style>

<script>
	import { mapState } from "vuex";

	export default {
		name: "LandingIntrance",
		data: function () {
			return {
				birth: "",
				intranceBtnActive: false,
				intranceContainerDisable: true,
			};
		},
		watch: {
			birth(val) {
				if (val.length === 4) {
					return val <= 2002 ? (this.intranceBtnActive = true) : (this.intranceBtnActive = false);
				}
			},
		},
		methods: {
			// 1. birth 관련 조건이 맞으면 버튼 활성화
			onlyNumbers: function () {
				this.birth = this.birth.replace(/[^0-9.]/g, "");
			},
			closeLanding: function () {
				this.$emit("input", (this.DisableLanding = true));
				this.intranceContainerDisable = !this.intranceContainerDisable;
			},
		},
		computed: {
			...mapState(["isRemember"]), // 기억하기 field가 체크되어 있을때, true로 변경
		},
	};
</script>
