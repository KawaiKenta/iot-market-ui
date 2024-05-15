<script lang="ts">
	import productImage from '$lib/assets/m5stack.jpg';
	import { ethers } from 'ethers';
	import { Merchandise__factory } from '../../../types/typechain-types/index.js';
	import Inprogress from '$lib/assets/inprogress.png';
	import Sold from '$lib/assets/soldout.png';
	const { data } = $props();
	let purchaseStatus = $state();

	// FIXME: defined in +layout.svelte
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
			throw new Error('Error while connecting to MetaMask');
		}
	};

	const purchase = async () => {
		const { provider, signer } = await connectToMetaMask();
		const merchandise = Merchandise__factory.connect(data.address, signer);
		if (signer) {
			try {
				const transactionResponse = await merchandise.purchase({
					value: ethers.parseEther(data.price)
				});
				purchaseStatus = transactionResponse.wait(1);
				await purchaseStatus;
				alert('Purchased is Confirmed!\nWe will reload the page to update the status');
				location.reload();
			} catch (err: unknown) {
				throw new Error((err as Error).message);
			}
		} else {
			throw new Error('Please connect to MetaMask First');
		}
	};
</script>

<section id="detail" class="container mx-auto mt-4 px-4">
	<div class="flex flex-col md:flex-row">
		<div class="relative md:w-1/2">
			<img src={productImage} alt="M5Stack" class="w-full rounded-lg" />
			<!-- 上に重ねる -->
			{#if data.state === 1n}
				<img
					src={Inprogress}
					alt="state"
					class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			{:else if data.state === 2n}
				<img
					src={Sold}
					alt="state"
					class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			{/if}
		</div>
		<div class="py-6 md:w-1/2 md:p-4">
			<h2 class="text-2xl font-bold">M5Stack Temprature</h2>
			<p class="py-2 text-gray-400">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, illo nihil sapiente nemo
				molestias earum eaque totam quidem perferendis reprehenderit nisi autem ad eum doloribus
				debitis culpa, sint laudantium maxime.
			</p>
			<p class="mt-4 text-lg font-bold">
				Price: <span class="text-purple-400">{data.price}</span> ETH
			</p>
			<div class="my-2">
				{#if data.state === 0n}
					<button class="gradiant mx-auto w-full rounded-md px-4 py-2" on:click={purchase}
						>Purchase!</button
					>
				{:else}
					<button class="mx-auto w-full rounded-md bg-gray-400 px-4 py-2" disabled>Purchase!</button
					>
				{/if}
			</div>
			{#if purchaseStatus}
				{#await purchaseStatus}
					<p class="text-gray-400">Purchasing...</p>
				{:then}
					<p class="text-green-400">Purchased!</p>
				{:catch error}
					<p class="text-red-400">{error.message}</p>
				{/await}
			{/if}
			<h3 class="mt-4 text-lg font-bold text-white">Other Infomation</h3>
			<div class="py-2 text-gray-400" id="product-info">
				<p>Address: {data.address}</p>
				<p>Owner: {data.owner}</p>
				<p>Retry Limit: {data.retryLimit}</p>
				<p>State: {data.state}</p>
			</div>
		</div>
	</div>
</section>
