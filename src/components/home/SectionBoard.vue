<template>
	<div class="section">
		<div class="full__container">
			<span>혼술 인증샷</span>
			<div class="board_container">
				<div class="card" v-for="(board, index) in BoardComponent" :key="index" avatar>
					<div>
						<img :src="board.img" />
						<p class="cocktail__name">{{ board.writer }}</p>
						<p class="cocktail__base">#{{ board.contents }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
    .board_container {
        display: flex;
    }
</style>

<script>
	import { mapState } from "vuex";

	export default {
		name: "SectionBoard",
		computed: {
			...mapState(["BoardComponent"]),
		},
	};
</script>
