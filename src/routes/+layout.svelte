<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import './app.css';

	let { children } = $props();
</script>

<div>
	<Navbar />
	{@render children()}
</div>
