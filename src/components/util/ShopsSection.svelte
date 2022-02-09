<div class={classes}>
	<h4 class="text-3xl tracking-wide font-semibold text-center capitalize mt-2">Browse stores in your area</h4>
	<Container classes="flex mt-8 grid grid-cols-3 gap-4">
		{#each display_shops as shop, i (i)}
			<ShopCard {...shop} />
		{/each}
	</Container>
	<div class="flex justify-center w-full ">
		<button on:click={() => (show_more = !show_more)} class="button-styles">{button_text}</button>
	</div>
</div>

<script lang="ts">
	import Container from './Container.svelte';
	import ShopCard from '../cards/ShopCard.svelte';
	import type { ShopCardProps } from '../../models/component_props';
	import FormTitle from '../forms/util/FormTitle.svelte';

	export let classes = '';
	export let shops: ShopCardProps[];
	let show_more = false;

	$: button_text = show_more ? 'show less...' : 'show more';
	$: display_shops = show_more ? shops : shops.slice(0, 6);
</script>

<style lang="postcss">
	.button-styles {
		@apply text-blue-500 py-5 tracking-wider;
	}
</style>
