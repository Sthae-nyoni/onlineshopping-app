<div class={classes}>
	<label for={label} class="input-label">{label}</label>
	<input on:change bind:value name={label} type="datetime-local" {min} {max} class="datetime-input" />
</div>

<script lang="ts">
	export let min = '';
	export let max = '';
	export let label = '';
	export let value = '';
	export let classes = '';
</script>

<style lang="postcss">
	.input-label {
		@apply block uppercase text-xs font-semibold tracking-widest;
	}

	.datetime-input {
		@apply px-3 py-2 mt-2 w-full uppercase font-medium border rounded border-gray-600 bg-gray-800 text-gray-100  focus:outline-none focus:border-blue-500 focus:ring-1;
	}
</style>
