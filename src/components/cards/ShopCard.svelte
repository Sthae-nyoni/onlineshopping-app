<a {href} class=" {classes} flex px-2 py-2 sm:px-4 sm:py-3 items-center bg-gray-800 rounded-lg shadow-lg">
	<div class=" h-8 w-8 sm:h-12 sm:w-12 overflow-hidden rounded-full">
		<img class="w-full h-full object-center" src={img_url} alt={alt_tag} />
	</div>
	<div class="ml-4">
		<h4 class="text-sm capitalize tracking-wide sm:text-lg font-semibold">{name}</h4>
		<p class="text-xs sm:text-sm tracking tracking-wide text-blue-400 ">{location}</p>
	</div>
</a>

<script lang="ts">
	export let classes = '';
	export let name: string;
	export let alt_tag: string;
	export let img_url: string;
	export let location: string;

	$: href = `/shop/${name}`;
</script>
