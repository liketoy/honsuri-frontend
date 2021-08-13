<template>
	<div id="app" class="notosanskr">
		<router-view />
	</div>
</template>

<style>
	@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

	.notosanskr * {
		font-family: "Noto Sans KR", sans-serif;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #191919;
	}

	/* reset.css */
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1.5;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: "";
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		text-decoration: none;
		color: inherit;
	}

	/* FullPage Section 중앙에 컨테이너 위치시키기 위함 */
	.full__container {
		position: fixed;
		width: 100%;
	}
	@media (min-width: 1280px) {
		.full__container {
			width: 1280px;
			min-width: 1280px;
			left: 50%;
			margin-left: -640px;
		}
	}
	.fp-tableCell {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
</style>

<script>
	export default {
		components: {},
	};
</script>
