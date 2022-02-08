<script lang="ts">
	export let value = '';
	export let classes = '';

	//
</script>

<div class={classes}>
	<input placeholder="Search" class="custom-input" bind:value type="text" />
</div>

<style lang="postcss">
	
	.custom-input {
		@apply px-3 py-2 mt-2 w-full font-medium rounded bg-gray-900 text-gray-100 focus:outline-none;
	}

	/* Chrome, Safari, Edge, Opera */
	/* input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	/* input[type='number'] {
		-moz-appearance: textfield;
	}  */
</style>
