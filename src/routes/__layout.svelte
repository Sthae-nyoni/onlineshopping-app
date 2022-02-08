<script>
	import { dark_theme } from '../stores/appdata';
	import '../app.css';
</script>
<div class:dark={$dark_theme}>
	<div class="layout-container">
		<slot />
	</div>
</div>

<style lang="postcss">
	.layout-container {
		@apply w-full overflow-hidden dark:bg-gray-900 bg-gray-200 text-gray-900 dark:text-gray-50 antialiased;
	}
</style>
