<a {href} class="bg-gray-800 overflow-hidden rounded-md shadow-lg">
	<div>
		<img  src={image} alt={title} class="w-full h-40 object-cover" />
	</div>
	<div class=" mt-2 pb-2">
		<div class="flex px-4 justify-between text-xl font-semibold tracking-wide">
			<h4>{name}</h4>
			<p>${price}</p>
		</div>

		<div class="px-4 flex justify-between mt-2">
			<h4 class="font-semibold text-sm tracking-wide">Rating</h4>
			<div class="flex">
				{#each stars as star, i (i)}
					<span class="text-yellow-400">
						<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path d={star_icon} />
						</svg>
					</span>
				{/each}
			</div>
		</div>

		<div class="mt-3 pl-4 pr-2">
			<p class="text-sm tracking-wide text-gray-200 italic lowercase">
				{description.slice(0, 100)}
			</p>
		</div>
		<div class="flex justify-end mt-1  pr-4 z-10">
			<button on:click={()=> console.log('added to the cart')}>
				<svg class="h-8 w-8 font-semibold fill-current" viewBox="0 0 24 24">
					<path d={add_to_cart_icon} />
				</svg>
			</button>
		</div>
	</div>
</a>

<script lang="ts">
	import { add_to_cart_icon, star_icon } from '../../util/icons';

	export let id: number;
	export let title: string;
	export let price: number;
	export let rating: number;
	export let image: string;
	export let description: string;

	$: href = `/products/${id}`;
	$: stars = Array(Math.round(rating)).fill(0);
	$: tokens = title.split(' ');
	$: name = tokens.length > 2 ? `${tokens[0]} ${tokens[1]}` : tokens.join(' ');
</script>
