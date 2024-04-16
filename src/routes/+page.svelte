<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import Card from '$lib/components/Card.svelte';
	import { ethers } from 'ethers';

	let provider: ethers.BrowserProvider | undefined = $state();
	let signer: ethers.JsonRpcSigner | undefined = $state();

	const connectToMetaMask = async () => {
		const windowProvider = window.ethereum;
		if (windowProvider == null) {
			throw new Error('MetaMask not found');
		}
		try {
			const provider = await new ethers.BrowserProvider(windowProvider);
			const signer = await provider.getSigner();
			return { provider, signer };
		} catch (error) {
			throw new Error('Error connecting to MetaMask');
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
		<div id="icons" class="flex items-center">
			{#if signer}
				<p class="mr-2">Welcome! <span class="text-blue-500">{signer.address}</span></p>
			{/if}
			<button
				on:click={() => {
					connectToMetaMask()
						.then((res) => {
							provider = res.provider;
							signer = res.signer;
						})
						.catch((error) => {
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

<section id="merchandises" class="container mx-auto mt-4">
	<div class="flex flex-wrap">
		<div class="w-full md:w-1/2 lg:w-1/3">
			<Card title="aaaa" content="drer"></Card>
		</div>
	</div>
</section>
