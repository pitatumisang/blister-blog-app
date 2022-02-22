<script>
	export let isSuccessAlert = false;
</script>

{#if isSuccessAlert}
	<!-- ALERT SUCCESS -->
	<div class="flex px-4 py-2 mb-2 text-sm text-green-700 bg-green-100 rounded-md">
		<svg
			class="inline flex-shrink-0 mr-3 w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
				clip-rule="evenodd"
			/></svg
		>
		<div class="font-semibold">
			<slot />
		</div>
	</div>
{:else}
	<!-- ALERT SUCCESS -->
	<div class="flex px-4 py-2 mb-2 text-sm text-red-700 bg-red-100 rounded-md">
		<svg
			class="inline flex-shrink-0 mr-3 w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
				clip-rule="evenodd"
			/></svg
		>
		<div class="font-semibold">
			<slot />
		</div>
	</div>
{/if}
