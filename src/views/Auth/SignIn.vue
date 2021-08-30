<template>
	<div class="sign__section">
		<div class="conversation_header">
			<TheHeaderVue :color="black" />
		</div>
		<div class="sign__container">
			<h2 class="sign__title">로그인</h2>
			<input class="input__box" v-model="email" type="email" placeholder="이메일을 입력해 주세요." />
			<input class="input__box" v-model="password" type="password" placeholder="비밀번호를 입력해 주세요." />
			<label for="auto_login"><input type="checkbox" id="auto_login" />자동 로그인</label>
			<input class="submit__box" type="button" value="로그인" @click="login({ email, password })" />
			<div class="users__btns">
				<router-link class="sign__up" to="/users/findid">아이디 찾기</router-link>
				<router-link class="sign__up" to="/users/signup">회원가입</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.sign__section {
		width: 100vw;
		height: 100vh;
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
		background: #fff;
		box-sizing: border-box;
		border-radius: 8px;
		width: 600px;
		padding: 40px 116px;
		display: flex;
		flex-direction: column;
	}
	.sign__container label {
		align-self: flex-start;
	}
	.sign__title {
		font-size: 36px;
		font-weight: 700;
		align-self: flex-start;
		margin-bottom: 20px;
	}
	.input__box {
		border: none;
		background: #dbdbdb;
		padding: 15px 12px;
		margin-bottom: 10px;
		font-size: 14px;
	}
	.input__box:focus {
		outline: none;
	}
	.input__box::placeholder {
		color: #767676;
	}
	.submit__box {
		background: #191919;
		color: #fff;
		border: none;
		padding: 15px;
		margin-top: 27px;
		cursor: pointer;
	}
	.users__btns {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.sign__up {
		margin-top: 10px;
		font-size: 12px;
		align-self: flex-end;
	}
</style>

<script>
	import TheHeaderVue from "../../components/TheHeader.vue";

	export default {
		name: "SignIn",
		data() {
			return {
				email: "",
				password: "",
				black: "#191919",
			};
		},
		components: {
			TheHeaderVue,
		},
		methods: {
			login: function (obj) {
				this.$store.dispatch("POST_LOGIN", obj);
			},
		},
	};
</script>
