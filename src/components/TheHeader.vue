<template>
	<header class="full__container">
		<div class="header__gnb" :style="style">
			<router-link to="/">
				<span>HONSURI</span>
			</router-link>
			<div class="gnb__menu">
				<router-link to="/recipes">
					<span>레시피</span>
				</router-link>
				<router-link to="/">
					<span>대화하기</span>
				</router-link>
				<router-link to="/guest_book">
					<span>방명록</span>
				</router-link>
			</div>
		</div>
		<div class="header__sign">
			<router-link to="/signin">로그인</router-link>
			<router-link to="/signup">회원가입</router-link>
		</div>
	</header>
</template>

<style scoped>
	header {
		top: 0;
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 9;
	}
	header a {
		text-decoration: none;
		color: var(--color);
		font-size: 18px;
	}
	.header__gnb {
		display: flex;
		justify-content: flex-start;
		gap: 100px;
	}
	.header__gnb > a {
		font-size: 34px;
		font-weight: 700;
	}
	.gnb__menu {
		display: flex;
		gap: 30px;
		align-items: center;
	}
	.header__sign {
		display: flex;
		gap: 30px;
	}
</style>

<script>
	export default {
		name: "TheHeader",
		props: ["color"],
		computed: {
			style() {
				return { "--color": this.color };
			},
		},
	};
</script>
