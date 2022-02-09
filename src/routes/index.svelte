<Navbar />
<Container classes="pb-20">
	<ShopsSection shops={$shops} classes="mt-32" />
</Container>

<script>
import { shops } from '../stores/appdata';

	import Navbar from '../components/nav/Navbar.svelte';
	import Container from '../components/util/Container.svelte';
	import ShopsSection from '../components/util/ShopsSection.svelte';
</script>
