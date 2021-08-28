<template>
	<div>
		<user-layout-vue>
			<h2 class="user__title">회원 탈퇴</h2>
			<div class="userinput__container">
				<div class="input__box">
					<p>비밀번호</p>
					<input
						class="input__text"
						v-model="password"
						type="password"
						placeholder="본인인증을 위해 비밀번호를 입력해주세요."
					/>
				</div>
				<div class="userinput__submits">
					<div class="userinput__checkbox">
						<label for="signout">탈퇴에 동의합니다.</label>
						<input type="checkbox" id="signout" v-model="signOutCheck" />
					</div>
					<input
						class="submit__btn black"
						:disabled="!signOutCheck || password.length === 0"
						type="button"
						value="탈퇴하기"
						@click="signOut({ password })"
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
		name: "SignOut",
		components: {
			UserLayoutVue,
		},
		data: function () {
			return {
				password: "",
				signOutCheck: false,
			};
		},
		methods: {
			signOut: function (obj) {
				const res = confirm("정말 탈퇴하시겠습니까?");
				if (res) {
					this.$store.dispatch("DELETE_USER", obj);
				} else {
					return;
				}
			},
		},
	};
</script>
