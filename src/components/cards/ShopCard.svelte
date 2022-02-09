<a {href} class=" {classes} flex px-4 py-3 items-center bg-gray-800 rounded-lg shadow-lg">
	<div class="h-12 w-12 overflow-hidden rounded-full">
		<img class="w-full h-full object-center" src={img_url} alt={alt_tag} />
	</div>
	<div class="ml-4">
		<h4 class="capitalize tracking-wide text-lg font-semibold">{name}</h4>
		<p class="text-sm tracking tracking-wide text-blue-400">{location}</p>
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
