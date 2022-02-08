<div class={classes}>
	<label for="comment" class="comment-label">Comment</label>
	<textarea bind:value class="comment-area" />
</div>

<script>
	export let value = '';
	export let classes = '';
</script>

<style lang="postcss">
	.comment-label {
		@apply block uppercase text-xs font-semibold tracking-widest;
	}
	.comment-area {
		@apply px-3 py-2 mt-2 w-full rounded resize-none border border-gray-600 bg-gray-800 text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1;
	}
</style>
