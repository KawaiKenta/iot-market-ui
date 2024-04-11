<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>
<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-gray-900;
		@apply text-white;
	}
</style>
