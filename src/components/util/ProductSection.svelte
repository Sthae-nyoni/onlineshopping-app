<h4 class="{classes} text-3xl capitalize tracking-wide text-center font-medium">{title}</h4>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
	{#each products as product (product.id)}
		<ProductCard {...product} />
	{/each}
</div>

<script lang="ts">
	import ProductCard from '../cards/ProductCard.svelte';
	import type { ProductCardProps } from '../../models/component_props';

	export let title = 'Section';
	export let classes = '';
	export let products: ProductCardProps[];
</script>
