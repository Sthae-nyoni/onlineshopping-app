<Navbar />
<Container classes={$product_data ? 'pb-20' : 'pb-96'}>
	<ShopsSection shops={$shops} classes="mt-32" />
	{#each $categories as category, i (i)}
		<ProductSection title={category.name} products={$product_data[category.key]} classes="mt-10" />
	{:else}
		<h4 class="mt-20 text-4xl font-semibold tracking-wide text-center">Fetching Data...</h4>
	{/each}
</Container>

<script context="module">
	export async function load({ fetch }) {
		if (browser) {
			await fetchProducts();
			return { props: {} };
		}

		return { props: {} };
	}
</script>

<script lang="ts">
	import { browser } from '$app/env';
	import Navbar from '../components/nav/Navbar.svelte';
	import { product_data, shops, categories } from '../stores/appdata';
	import Container from '../components/util/Container.svelte';
	import ShopsSection from '../components/util/ShopsSection.svelte';
	import { fetchProducts } from '../services/ProductFetchingService';
	import ProductSection from '../components/util/ProductSection.svelte';
</script>
