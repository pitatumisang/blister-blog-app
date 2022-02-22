<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<main class="bg-bgColor min-h-screen">
	<Navbar />
	<slot />
</main>
