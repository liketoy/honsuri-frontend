<template>
	<div class="container">
		<div class="conversation_header">
			<TheHeaderVue :color="black" />
		</div>
		<SectionConversation />
	</div>
</template>

<style scoped>
	.container {
		background-color: #ededed;
		padding-top: 130px;
		padding-bottom: 50px;
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
</style>

<script>
	import TheHeaderVue from "@/components/TheHeader.vue";
	import SectionConversation from "@/components/conversation/SectionConversation.vue";

	export default {
		name: "Conversation",
		components: {
			TheHeaderVue,
			SectionConversation,
		},
		data() {
			return {
				black: "#191919",
			};
		},
	};
</script>
