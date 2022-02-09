<div class={classes}>
	<h4 class="text-3xl tracking-wide font-semibold text-center capitalize mt-2">Browse stores in your area</h4>
	<div class="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
		{#each shops as shop, i (i)}
			<ShopCard {...shop} />
		{/each}
	</div>
</div>

<script lang="ts">
	import ShopCard from '../cards/ShopCard.svelte';
	import type { ShopCardProps } from '../../models/component_props';

	export let classes = '';
	export let shops: ShopCardProps[];
	// pick and pay
	// Tilus
	// Food for less
	// powersales
	// meikles
	// edgars
	// topics
	// bata
</script>
