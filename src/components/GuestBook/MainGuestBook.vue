<template>
	<div>
		<TheBlackHeaderVue />
		<ReadGuestBook />
	</div>
</template>
<style scoped></style>
<script>
	import TheBlackHeaderVue from "../TheBlackHeader.vue";
	import ReadGuestBook from "../GuestBook/ReadGuestBook.vue";
	export default {
		name: "MainGuestBook",
		components: { TheBlackHeaderVue, ReadGuestBook },
	};
</script>
