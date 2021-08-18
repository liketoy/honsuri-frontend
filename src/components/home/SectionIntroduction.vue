<template>
	<div class="section section__intro">
		<div class="full__container" style="padding-bottom: 168px">
			<h1>나에게 맞는 홈칵테일 찾기</h1>
			<h4>혼수리 유저들이 공유하는 특별한 레시피</h4>
			<div class="intro__wrapper">
				<div class="intro__img">
					<img src="../../assets/main_intro.png" alt="바" />
				</div>
				<div class="menu__container">
					<h3>5가지를 경험할 수 있어요</h3>
					<h5>집에 있는 재료로 누구나 만들 수 있는 레시피</h5>
					<div class="menu__card" v-for="(menu, index) in menus" v-bind:key="index">
						<div class="menu__img">
							<img :src="require(`@/assets/menu/${menu.image}.png`)" :alt="menu.name" />
						</div>
						<div class="menu__info">
							<p class="menu__title">{{ menu.name }}</p>
							<p class="menu__kinds">{{ menu.kinds }}</p>
						</div>
					</div>
				</div>
				<div class="intro__explain">
					<h2>집에서 간단히<br />만들 수 있는 칵테일 보러가기</h2>
					<a href="#">자세히 보기</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.section__intro {
		background: #0d0a15;
	}
	.section__intro div h1 {
		font-size: 48px;
		font-weight: 700;
		margin-bottom: 10px;
		color: #ffffff;
	}
	.section__intro div h4 {
		font-size: 24px;
		margin-bottom: 50px;
		color: #ffffff;
	}
	.intro__wrapper {
		position: relative;
		margin: 0 auto;
		width: 960px;
	}
	.intro__img {
		width: 100%;
		box-sizing: border-box;
		height: 520px;
		border-radius: 20px;
	}
	.menu__container {
		position: absolute;
		width: 320px;
		height: 508px;
		left: 36px;
		bottom: -168px;
		border-radius: 10px;
		box-sizing: border-box;
		background: #ffffff;
		box-shadow: 10px 10px 30px #00000029;
		padding: 30px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.menu__container h3 {
		font-size: 18px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	.menu__container h5 {
		font-size: 13px;
		color: #767676;
		margin-bottom: 38px;
	}
	.menu__card {
		display: flex;
		gap: 25px;
	}
	.menu__card:not(:last-child) {
		margin-bottom: 36px;
	}
	.menu__img {
		width: 40px;
		height: 40px;
	}
	.menu__img img {
		width: 100%;
	}
	.menu__info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 13px;
	}
	.menu__info .menu__title {
		font-weight: 700;
	}
	.menu__info .menu__kinds {
		color: #767676;
	}
	.intro__explain {
		position: absolute;
		right: 20%;
		top: 105%;
		text-align: left;
		color: #ffffff;
	}
	.intro__explain h2 {
		font-size: 30px;
		font-weight: 700;
		margin-bottom: 20px;
	}
	.intro__explain a {
		font-size: 20px;
		font-weight: 200;
	}
</style>

<script>
	export default {
		name: "SectionIntroduction",
		data() {
			return {
				menus: [
					{ name: "소주", kinds: "스크류 키스, 메로나주, 버블 탱크", image: "soju" },
					{ name: "양주", kinds: "블루라군, 하이볼, 스크류 드라이버", image: "whisky" },
					{ name: "맥주", kinds: "레몬 끌라라, 트로이카의 목마", image: "beer" },
					{ name: "과일소주", kinds: "이슬톡톡 자몽칵테일, 쁘디쁘디주", image: "fruit" },
					{ name: "와인", kinds: "미모사, 뱅쇼", image: "wine" },
				],
			};
		},
	};
</script>
