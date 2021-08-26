<template>
	<div class="conversation_container">
		<div class="conversation_header">
			<TheHeaderVue :color="black" />
		</div>
		<SectionConversation />
	</div>
</template>

<style scoped>
	.conversation_container {
		background-color: #ededed;
	}
	.conversation_header {
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
