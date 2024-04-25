<script lang="ts">
	import productImage from '$lib/assets/m5stack.jpg';
	const { data } = $props();
</script>

<section id="detail" class="container mx-auto mt-4 px-4">
	<div class="flex flex-col md:flex-row">
		<div class="md:w-1/2">
			<img src={productImage} alt="M5Stack" class="w-full rounded-lg" />
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
				<button class="gradiant mx-auto w-full rounded-md px-4 py-2">Purchase!</button>
			</div>
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
