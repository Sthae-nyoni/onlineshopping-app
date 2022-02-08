<script>
	import CustomInput from '../forms/util/CustomInput.svelte';
import CartButton from '../util/CartButton.svelte';
	import HomeLink from '../util/HomeLink.svelte';
</script>

<nav class="px-20 py-4 fixed top-0 inset-x-0 flex justify-between items-center bg-gray-800 shadow-xl">
	<HomeLink />
	<CustomInput classes="w-3/5" />
	<CartButton/>
</nav>
