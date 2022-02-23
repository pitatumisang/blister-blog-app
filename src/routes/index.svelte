<script>
	import { each } from 'svelte/internal';

	const posts = [
		{
			title: 'Post One',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
		},
		{
			title: 'Post Two',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
		},
		{
			title: 'Post Three',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
		},
		{
			title: 'Post Four',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
		},
		{
			title: 'Post Five',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
		}
	];
</script>

<svelte:head>
	<title>Blister | Home</title>
</svelte:head>

<main class="mt-6">
	<h1 class="text-3xl mb-3">Posts</h1>

	{#each posts as post}
		<div
			class="relative bg-white rounded-md shadow-md mb-6 tracking-wider w-[640px] border border-borderColor"
		>
			<a href="/">
				<img src="/post_img.jpeg" alt={post.title} class="rounded-t-md w-full object-cover" />
			</a>
			<div class="px-6">
				<a href="/">
					<h3 class="text-2xl mt-4 hover:underline hover:text-primaryColor">{post.title}</h3>
				</a>
				<p class="mt-2 mb-4">{post.desc}</p>

				<a href="/">Read More</a>
			</div>

			<div class="bg-bgColor flex justify-between items-center px-6 py-3 rounded-b-md">
				<small>pitatumisang</small>
				<small>30 mins ago</small>
			</div>
			<div class="absolute bg-primaryColor bottom-0 left-0 right-0 h-1 rounded-b-md" />
		</div>
	{:else}
		<h1 class="text-2xl tex-center">There are no posts found!</h1>
	{/each}
</main>
