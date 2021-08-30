<template>
	<div class="sign__section">
		<div class="conversation_header">
			<TheHeaderVue :color="black" />
		</div>
		<div class="sign__container">
			<h2 class="sign__title">회원가입</h2>
			<div class="info__container botborder">
				<h3>필수 정보</h3>
				<div class="info__box">
					<p>이메일(아이디)</p>
					<div class="info__inputs">
						<input class="main__input" type="email" placeholder="이메일을 입력해주세요." v-model="email" />
					</div>
				</div>
				<div class="info__box">
					<p>비밀번호</p>
					<div class="info__inputs">
						<input class="main__input" type="password" placeholder="비밀번호를 입력해주세요." v-model="password" />
					</div>
				</div>
				<div class="info__box">
					<p>비밀번호 확인</p>
					<div class="info__inputs">
						<input
							class="main__input"
							type="password"
							placeholder="위의 비밀번호를 다시 입력해 주세요."
							v-model="password1"
						/>
					</div>
				</div>
				<div class="info__box">
					<p>이름</p>
					<div class="info__inputs">
						<input class="main__input" type="text" placeholder="이름을 입력해 주세요." v-model="name" />
					</div>
				</div>
				<div class="info__box">
					<p>닉네임</p>
					<div class="info__inputs">
						<input
							class="main__input"
							type="text"
							placeholder="닉네임을 입력해 주세요. (최소 2자 이상)"
							v-model="nickname"
						/>
						<input class="side__input" type="button" value="중복 확인" />
					</div>
				</div>
				<div class="info__box">
					<p>연락처</p>
					<div class="info__inputs">
						<input
							class="main__input"
							type="text"
							placeholder="연락처를 입력해 주세요"
							maxlength="11"
							oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
							v-model="phone_number"
						/>
					</div>
				</div>
			</div>
			<div class="info__container botborder">
				<h3>관심 정보</h3>
				<div class="info__box">
					<p>주량</p>
					<div class="info__inputs">
						<input
							class="main__input"
							type="text"
							placeholder="당신의 최대 주량(소주 기준)을 알려주세요."
							oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
							v-model.number="alcohol_amount"
						/>
					</div>
				</div>
				<div class="info__box">
					<p>최애 주종</p>
					<div class="info__inputs">
						<input
							class="main__input"
							type="text"
							placeholder="당신의 최애 주종을 알려주세요."
							v-model="favorite_alcohol"
						/>
					</div>
				</div>
				<div class="info__box">
					<p>최애 안주</p>
					<div class="info__inputs">
						<input
							class="main__input"
							type="text"
							placeholder="당신의 최애 안주를 알려주세요."
							v-model="favorite_food"
						/>
					</div>
				</div>
				<div class="info__box">
					<p>최애 조합</p>
					<div class="info__inputs">
						<input
							class="main__input"
							type="text"
							placeholder="당신의 최애 조합을 알려주세요."
							v-model="favorite_combination"
						/>
					</div>
				</div>
			</div>
			<div class="info__container">
				<h3>이용약관/개인정보 수집 및 이용 동의</h3>
				<div class="agree__container">
					<div class="all__agree">
						<label for="allCheck"><input type="checkbox" id="allCheck" v-model="allCheck" />전체동의</label>
					</div>
					<div class="choice__agree">
						<label for="adultCheck"
							><input type="checkbox" name="agreeCheck" id="adultCheck" v-model="adultCheck" />(필수) 만 19세
							이상입니다.</label
						>
						<label for="termsCheck"
							><input type="checkbox" name="agreeCheck" id="termsCheck" v-model="termsCheck" />(필수) 이용약관
							동의</label
						>
						<label for="privacyCheck"
							><input type="checkbox" name="agreeCheck" id="privacyCheck" v-model="privacyCheck" />(필수) 개인정보 수집
							및 이용 동의</label
						>
						<label for="emailCheck"
							><input type="checkbox" name="agreeCheck" id="emailCheck" v-model="emailCheck" />(선택) 이메일 수신</label
						>
					</div>
				</div>
				<input
					class="submit__btn"
					type="button"
					value="가입완료"
					:disabled="
						this.email.length === 0 ||
						this.password.length === 0 ||
						this.password1.length === 0 ||
						this.name.length === 0 ||
						this.nickname.length === 0 ||
						this.phone_number.length === 0 ||
						this.alcohol_amount.length === 0 ||
						this.favorite_alcohol.length === 0 ||
						this.favorite_food.length === 0 ||
						this.favorite_combination.length === 0 ||
						this.adultCheck === false ||
						this.termsCheck === false ||
						this.privacyCheck === false
					"
					@click="
						signUp({
							email,
							password,
							password1,
							name,
							nickname,
							phone_number,
							alcohol_amount,
							favorite_alcohol,
							favorite_food,
							favorite_combination,
						})
					"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.sign__section {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ededed;
	}
	.conversation_header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 1920px;
		height: 80px;
		background: #ffffff;
		box-shadow: 3px 3px 6px #00000029;
	}
	.sign__container {
		margin: 140px auto;
		background: #fff;
		box-sizing: border-box;
		border-radius: 8px;
		width: 600px;
		padding: 40px 60px;
		display: flex;
		flex-direction: column;
		box-shadow: 1px 1px 2px #00000029;
	}
	.sign__title {
		font-size: 36px;
		font-weight: 700;
		text-align: left;
		padding-bottom: 30px;
		border-bottom: 1px solid #c1c1c1;
		width: 100%;
	}
	.info__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding-top: 30px;
		padding-bottom: 10px;
	}
	.botborder {
		border-bottom: 1px solid #c1c1c1;
	}
	.info__container h3 {
		text-align: left;
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 20px;
	}
	.info__box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		gap: 30px;
		margin-bottom: 20px;
	}
	.info__box p {
		flex: 1;
		text-align: left;
		font-size: 14px;
	}
	.info__inputs {
		flex: 4;
		display: flex;
		gap: 8px;
	}
	.main__input {
		width: 100%;
		box-sizing: border-box;
		padding: 15px 12px;
		font-size: 14px;
		background: #ededed;
		border: none;
	}
	.info__box input::placeholder {
		color: #767676;
	}
	.side__input {
		background: #191919;
		color: #fff;
		padding: 15px 12px;
		border: none;
		cursor: pointer;
	}
	.agree__container {
		text-align: left;
		border: 1px solid #767676;
		width: 100%;
	}
	.all__agree {
		background: #ededed;
		padding: 10px 20px;
		border-bottom: 1px solid #767676;
	}
	.choice__agree {
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.choice__agree label:not(:last-child) {
		margin-bottom: 20px;
	}
	.submit__btn {
		padding: 11px 0;
		background: #191919;
		color: #fff;
		border: none;
		width: 200px;
		margin: 0 auto;
		font-size: 20px;
		margin-top: 30px;
		cursor: pointer;
	}
	.submit__btn:disabled {
		background: #767676;
		cursor: not-allowed;
	}
</style>

<script>
	import TheHeaderVue from "../../components/TheHeader.vue";

	export default {
		name: "SignUp",
		components: {
			TheHeaderVue,
		},
		data() {
			return {
				email: "",
				password: "",
				password1: "",
				name: "",
				nickname: "",
				phone_number: "",
				alcohol_amount: "",
				favorite_alcohol: "",
				favorite_food: "",
				favorite_combination: "",
				allCheck: false,
				adultCheck: false,
				termsCheck: false,
				privacyCheck: false,
				emailCheck: false,
			};
		},
		methods: {
			signUp: function (obj) {
				if (obj.password !== obj.password1) {
					alert("비밀번호가 서로 일치하지 않습니다.");
					return;
				}
				this.$store.dispatch("POST_SIGNUP", obj);
			},
		},
	};
</script>
