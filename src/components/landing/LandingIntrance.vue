<template>
	<div class="intrance__container" id="intrance__container" v-if="intranceContainerDisable && !getRemember">
		<div class="intrance__content">
			<h1>HONSURI</h1>
			<h2>'혼수리바'에 오신걸 환영합니다.</h2>
			<p>당신의 태어난 연도를 알려주세요.</p>
			<!-- v-model 통해 birth 값 데이터바인딩 -->
			<input class="year__input" placeholder="YYYY" v-model="birth" maxlength="4" @input="onlyNumbers" />
			<div class="content__checkbox">
				<input type="checkbox" id="remember" v-model="remember" />
				<label for="remember">기억하기</label>
			</div>
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
		display: flex; /* display table 속성을 주어, 수직정렬 구현 */
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background-color: #ffff;
		opacity: 0.9;
	}

	.intrance__content h1 {
		font-size: 80px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	.intrance__content h2 {
		font-size: 50px;
		font-weight: 500;
		margin-bottom: 30px;
	}
	.intrance__content p {
		font-size: 20px;
		margin-bottom: 32px;
	}

	.intrance__content button {
		color: white;
		width: 300px;
		font-size: 20px;
		background-color: #191919;
		margin-top: 30px;
		height: 49px;
		border: none;
		cursor: pointer;
	}
	.intrance__content button:disabled {
		color: rgb(204, 204, 204);
		background-color: rgb(173, 173, 173);
		cursor: not-allowed;
	}
	.year__input {
		border: 3px solid #191919;
		font-size: 30px;
		font-weight: 500;
		margin-bottom: 50px;
		width: 100px;
		height: 80px;
		box-sizing: border-box;
		padding: 14px;
	}
	.year__input::placeholder {
		color: #191919;
	}
	.content__checkbox {
		font-size: 20px;
	}
</style>

<script>
	export default {
		name: "LandingIntrance",
		data: function () {
			return {
				birth: "",
				remember: false,
				intranceBtnActive: false,
				intranceContainerDisable: true,
				getRemember: sessionStorage.getItem("remember"),
			};
		},
		watch: {
			birth(val) {
				if (val.length === 4) {
					return val <= 2002 ? (this.intranceBtnActive = true) : (this.intranceBtnActive = false);
				}
			},
			remember(val) {
				if (val == true) {
					sessionStorage.setItem("remember", true);
				} else {
					sessionStorage.removeItem("remember");
				}
			},
		},
		methods: {
			// 1. birth 관련 조건이 맞으면 버튼 활성화
			onlyNumbers: function () {
				this.birth = this.birth.replace(/[^0-9.]/g, "");
			},
			closeLanding: function () {
				this.$emit("input", [(this.DisableLanding = true), this.getRemember]);
				this.intranceContainerDisable = false;
				//IsRemember키워드로 getremember값을 home.vue로 전달한다.
			},
		},
	};
</script>
