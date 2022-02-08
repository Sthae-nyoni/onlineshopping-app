<script>
	import StoreCard from '../cards/StoreCard.svelte';
	import Container from './Container.svelte';
	export let classes = '';
</script>

<div class={classes}>
	<h4 class="text-3xl tracking-wide font-semibold text-center capitalize mt-2">Browse stores</h4>
	<Container classes="flex mt-2 grid grid-cols-3 gap-4">
		<StoreCard />
		<StoreCard />
		<StoreCard />
		<StoreCard />
		<StoreCard />
		<StoreCard />
		<StoreCard />
		<StoreCard />
		<StoreCard />
		<StoreCard />
		<StoreCard />
		<StoreCard />
	</Container>
</div>
