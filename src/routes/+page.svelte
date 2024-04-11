<script lang="ts">
	import favicon from '$lib/assets/favicon.png';

	const connectToMetaMask = async () => {
		const provider = window.ethereum;
		if (provider) {
			try {
				await provider.request({ method: 'eth_requestAccounts' });
				console.log('Connected to MetaMask');
			} catch (error) {
				throw new Error('Error connecting to MetaMask');
			}
		} else {
			throw new Error('MetaMask not found');
		}
	};
</script>

<svelte:head>
	<title>IoT Data Market Place</title>
</svelte:head>

<header class="px-4 py-2 shadow-sm shadow-indigo-500/50">
	<div class="flex items-center justify-between">
		<a href="/" class="flex items-center">
			<img src={favicon} alt="" class="h-8 w-8" />
			<h1 class="ml-3 text-xl">IoT Marketplace</h1>
		</a>
		<div id="icons" class="">
			<button
				on:click={() => {
					connectToMetaMask().catch((error) => {
						alert(`Error: ${error.message}\nPlease install MetaMask and try again.`);
					});
				}}
				class="rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-4 py-2 text-white shadow-lg hover:bg-gradient-to-bl"
			>
				Connect your wallet!</button
			>
		</div>
	</div>
</header>
<section id="hero"></section>
<main>
	<section id="merchandises"></section>
</main>
