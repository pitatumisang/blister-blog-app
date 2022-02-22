<script>
	import { isUserLoggedIn } from '../store/stores.js';

	const logOutUser = async () => {
		$isUserLoggedIn = false;
	};
</script>

<header class="border-b border-borderColor py-3">
	<nav class="container mx-auto max-w-screen-md flex justify-between items-center ">
		<a href="/">
			<img src="/logo-1.png" alt="logo" class="w-11 h-11" />
		</a>

		<ul class="flex justify-between items-center gap-x-8">
			<li class="underline hover:underline hover:text-primaryColor">
				<a href="/">All Posts</a>
			</li>

			{#if !$isUserLoggedIn}
				<li>
					<a href="/auth/login" class="hover:underline hover:text-primaryColor"> Log In </a>
				</li>
				<li>
					<a href="/auth/register" class="hover:underline hover:text-primaryColor"> Register </a>
				</li>
			{:else}
				<li>
					<a href="/" class="flex items-center hover:underline hover:text-primaryColor">
						<span>Tumisang</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</li>

				<button
					type="submit"
					on:click={logOutUser}
					class="bg-primaryColor text-white rounded-md font-medium py-2 px-4">Logout</button
				>
			{/if}
		</ul>
	</nav>
</header>
