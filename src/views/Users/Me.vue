<template>
	<div>
		<user-layout-vue>
			<h2 class="user__title">나의 정보</h2>
			<div class="userinput__container">
				<div class="input__img"></div>
				<div class="input__email">
					<p>이메일(아이디)</p>
					<span>{{ userInfo.email }}</span>
				</div>
				<div class="input__box">
					<p>이름</p>
					<input class="input__text" type="text" v-model="userInfo.name" />
				</div>
				<div class="input__box">
					<p>닉네임</p>
					<input class="input__text" type="text" v-model="userInfo.nickname" />
				</div>
				<div class="input__box">
					<p>연락처</p>
					<input class="input__text" type="text" v-model="userInfo.phone_number" />
				</div>
				<div class="input__box">
					<p>비밀번호</p>
					<router-link to="/users/me/password" class="input__btn" style="text-align: center">비밀번호 변경</router-link>
				</div>
			</div>
			<h2 class="user__title">관심 정보</h2>
			<div class="userinput__container">
				<div class="input__img"></div>
				<div class="input__email">
					<p>주량</p>
					<input class="input__text" type="text" v-model="userInfo.alcohol_amount" />
				</div>
				<div class="input__box">
					<p>최애 주종</p>
					<input class="input__text" type="text" v-model="userInfo.favorite_alcohol" />
				</div>
				<div class="input__box">
					<p>최애 안주</p>
					<input class="input__text" type="text" v-model="userInfo.favorite_food" />
				</div>
				<div class="input__box">
					<p>최애 조합</p>
					<input class="input__text" type="text" v-model="userInfo.favorite_combination" />
				</div>
			</div>
			<div class="submit__btns">
				<router-link to="/users/signout" class="submit__btn gray">회원탈퇴</router-link>
				<input
					class="submit__btn black"
					type="button"
					value="변경사항 저장"
					@click="
						userUpdate({
							name: userInfo.name,
							nickname: userInfo.nickname,
							phone_number: userInfo.phone_number,
							alcohol_amount: userInfo.alcohol_amount,
							favorite_alcohol: userInfo.favorite_alcohol,
							favorite_food: userInfo.favorite_food,
							favorite_combination: userInfo.favorite_combination,
						})
					"
				/>
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
	.input__box,
	.input__email {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		gap: 30px;
		margin-bottom: 20px;
	}
	.input__email p {
		flex: 1;
		color: #767676;
		font-size: 14px;
	}
	.input__email span {
		flex: 4;
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
	.input__box .input__btn {
		flex: 4;
		background: #111111;
		border-radius: 4px;
		color: #fff;
		padding: 15px 12px;
		border: none;
		cursor: pointer;
	}
	.submit__btns {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
	.submit__btn {
		padding: 10px 20px;
		border: none;
		cursor: pointer;
		font-size: 20px;
	}
	.gray {
		color: #767676;
		background: #ededed;
	}
	.black {
		color: #fff;
		background: #111111;
	}
</style>

<script>
	import { mapState } from "vuex";
	import UserLayoutVue from "../../components/user/UserLayout.vue";

	export default {
		name: "Me",
		components: {
			UserLayoutVue,
		},
		computed: {
			...mapState(["userInfo"]),
		},
		data() {
			return {
				name: "",
				nickname: "",
				phone_number: "",
				alcohol_amount: "",
				favorite_alcohol: "",
				favorite_food: "",
				favorite_combination: "",
			};
		},
		methods: {
			userUpdate: function (obj) {
				this.$store.dispatch("PATCH_USER", obj);
			},
		},
	};
</script>
