<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<main class="bg-bgColor min-h-screen">
	<Navbar />
	<section class="container mx-auto max-w-screen-lg">
		<slot />
	</section>
</main>
