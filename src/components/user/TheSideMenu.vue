<template>
	<div class="side__container">
		<div class="user__avatar">
			<img class="user__img" src="@/assets/images/groovy_mix.png" alt="avatar" />
			<p class="user__name">{{ userInfo.nickname }}</p>
		</div>
		<router-link to="/users/me" class="user__info">나의 정보</router-link>
		<router-link to="/users/post" class="user__feeds">내가 쓴 글</router-link>
		<router-link to="/users/fav" class="user__fav">My Favorite</router-link>
	</div>
</template>

<style scoped>
	.side__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fff;
		border-radius: 8px;
		box-sizing: border-box;
		box-shadow: 1px 1px 2px #00000029;
	}
	.side__container a,
	.user__name {
		font-size: 20px;
		font-weight: 600;
		padding: 20px 0;
	}
	.side__container > a {
		border-top: 1px solid #dbdbdb;
		width: 100%;
	}
	.user__avatar {
		padding-top: 40px;
	}
	.user__img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
</style>

<script>
	export default {
		name: "TheSideMenu",
		props: ["userInfo"],
	};
</script>
