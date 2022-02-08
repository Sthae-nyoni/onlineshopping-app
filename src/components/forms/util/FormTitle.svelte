<h2 class="{classes} form-title">
	<slot />
</h2>

<script>
	export let classes = '';
</script>

<style lang="postcss">
	.form-title {
		@apply text-center text-3xl font-semibold tracking-wide;
	}
</style>
