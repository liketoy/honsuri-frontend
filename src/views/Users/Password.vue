<template>
	<div>
		<user-layout-vue>
			<h2 class="user__title">비밀번호 변경</h2>
			<div class="userinput__container">
				<div class="input__box">
					<p>현재 비밀번호</p>
					<input class="input__text" v-model="password" type="password" placeholder="현재 비밀번호 입력해 주세요." />
				</div>
				<div class="input__box">
					<p>새 비밀번호</p>
					<input
						class="input__text"
						v-model="new_password1"
						type="password"
						placeholder="새 비밀번호를 입력해 주세요."
					/>
				</div>
				<div class="input__box">
					<p>새 비밀번호 확인</p>
					<input
						class="input__text"
						v-model="new_password2"
						type="password"
						placeholder="새 비밀번호를 다시 입력해 주세요."
					/>
				</div>
				<div class="userinput__submits">
					<input
						class="submit__btn black"
						type="button"
						value="변경사항 저장"
						:disabled="password.length === 0 || new_password1.length === 0 || new_password2.length === 0"
						@click="
							changePassword({
								password,
								new_password1,
								new_password2,
							})
						"
					/>
				</div>
			</div>
		</user-layout-vue>
	</div>
</template>

<style scoped>
	.user__title {
		font-size: 36px;
		font-weight: 600;
		padding-bottom: 30px;
		border-bottom: 1px solid #767676;
	}
	.userinput__container {
		padding: 30px 0;
	}
	.input__box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		gap: 30px;
		margin-bottom: 20px;
	}
	.input__box p {
		flex: 1;
		color: #767676;
		font-size: 14px;
	}
	.input__text {
		flex: 4;
		width: 100%;
		box-sizing: border-box;
		padding: 15px 12px;
		font-size: 14px;
		background: #ededed;
		border: none;
	}
	.input__text::placeholder {
		color: #767676;
	}
	.userinput__submits {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
	}
	.userinput__checkbox label {
		font-size: 14px;
		color: #767676;
	}
	.submit__btn {
		margin-top: 20px;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
		font-size: 20px;
	}
	.submit__btn:disabled {
		background: #767676;
		cursor: not-allowed;
	}
	.black {
		color: #fff;
		background: #111111;
	}
</style>

<script>
	import UserLayoutVue from "../../components/user/UserLayout.vue";

	export default {
		name: "Password",
		components: {
			UserLayoutVue,
		},
		data: function () {
			return {
				password: "",
				new_password1: "",
				new_password2: "",
			};
		},
		methods: {
			changePassword: function (obj) {
				if (obj.new_password1 !== obj.new_password2) {
					alert("새 비밀번호가 같지 않습니다");
					return;
				}
				if (obj.password === obj.new_password1) {
					alert("현재 비밀번호와 새 비밀번호가 같습니다");
					return;
				}
				this.$store.dispatch("FATCH_PASSWORD", obj);
			},
		},
	};
</script>
