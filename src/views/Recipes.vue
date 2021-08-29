<template>
	<div class="recipes">
		<TheHeaderVue :color="black" />
	</div>
</template>

<script>
	import TheHeaderVue from "../components/TheHeader.vue";

	export default {
		name: "Recipes",
		components: {
			TheHeaderVue,
		},
		data() {
			return {
				black: "#191919",
			};
		},
	};
</script>
