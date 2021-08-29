<template>
	<div class="sign__section">
		<TheHeaderVue />
		<div class="sign__container">
			<h2 class="sign__title">아이디 찾기</h2>
			<input class="input__box" v-model="name" type="text" placeholder="이름을 입력해 주세요." />
			<input
				class="input__box"
				v-model="phone_number"
				type="text"
				placeholder="연락처를 입력해 주세요."
				maxlength="11"
				oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
			/>
			<input class="submit__box" type="button" value="아이디 찾기" @click="findId({ name, phone_number })" />
			<div class="result__box" v-if="email">
				<p>회원님의 이메일 주소를 찾았습니다.</p>
				<p>{{ email }}</p>
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
	.result__box {
		margin-top: 30px;
		background: #191919;
		color: #fff;
		padding: 12px;
	}
</style>

<script>
	import { mapState } from "vuex";
	import TheHeaderVue from "../../components/TheHeader.vue";

	export default {
		name: "FindId",
		data() {
			return {
				name: "",
				phone_number: "",
			};
		},
		computed: {
			...mapState(["email"]),
		},
		components: {
			TheHeaderVue,
		},
		methods: {
			findId: function (obj) {
				this.$store.dispatch("POST_FINDID", obj);
			},
		},
	};
</script>
