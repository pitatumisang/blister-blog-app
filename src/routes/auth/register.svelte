<script>
	import Alert from '../../components/Alert.svelte';
	import { baseUrl } from '$lib/utils.js';
	import { goto } from '$app/navigation';

	const user = {
		name: 'Tumisang',
		email: 'tumisang@gmail.com',
		password: '1234',
		password2: '1234'
	};

	$: isAlertActive = false;
	let isSuccessAlert = false;
	let alertMessage = '';

	// method that hides the alert
	const hideAlert = () => {
		setTimeout(() => {
			isAlertActive = false;
		}, 2000);
	};

	const registerUser = async () => {
		if (user.name === '' || user.email === '' || user.password === '' || user.password2 === '') {
			isAlertActive = true;
			isSuccessAlert = false;
			alertMessage = 'All fields are required';

			hideAlert();

			return;
		}

		if (user.password !== user.password2) {
			isAlertActive = true;
			isSuccessAlert = false;
			alertMessage = 'Passwords do not match';

			user.password2 = '';

			hideAlert();

			return;
		}

		const res = await fetch(`http://localhost:5000/api/v1/user/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ names: user.name, email: user.email, password: user.password })
		});

		const { success, msg } = await res.json();

		if (!success) {
			isAlertActive = true;
			isSuccessAlert = false;
			alertMessage = msg;

			hideAlert();

			return;
		}

		isAlertActive = true;
		isSuccessAlert = true;
		alertMessage = msg;

		hideAlert();

		// redirect to login page
		setTimeout(() => {
			goto('/auth/login');
		}, 1500);
	};
</script>

<svelte:head>
	<title>Blister | Register</title>
</svelte:head>

<main class="h-screen flex justify-center items-center">
	<section class="relative bg-white w-[420px] rounded-md shadow-md p-10 tracking-wider">
		<div class="absolute bg-primaryColor top-0 left-0 right-0 h-1.5 rounded-t-md" />
		<img src="/logo-1.png" class="w-16 mx-auto" alt="logo" />
		<h1 class="text-3xl my-6 text-center">Register</h1>

		{#if isAlertActive}
			<Alert {isAlertActive} {isSuccessAlert}>{alertMessage}</Alert>
		{/if}

		<form on:submit|preventDefault={registerUser}>
			<div class="mb-6">
				<label for="name" class="block mb-2 text-md font-medium text-gray-900">Name</label>
				<input
					type="text"
					id="name"
					bind:value={user.name}
					class="bg-bgColor border border-borderColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				/>
			</div>
			<div class="mb-6">
				<label for="email" class="block mb-2 text-md font-medium text-gray-900">Email</label>
				<input
					type="email"
					id="email"
					bind:value={user.email}
					class="bg-bgColor border border-borderColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				/>
			</div>
			<div class="mb-4">
				<label for="password" class="block mb-2 text-md font-medium text-gray-900">Password</label>
				<input
					type="password"
					id="password"
					bind:value={user.password}
					class="bg-bgColor border border-borderColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				/>
			</div>
			<div class="mb-4">
				<label for="password2" class="block mb-2 text-md font-medium text-gray-900"
					>Confirm Password</label
				>
				<input
					type="password"
					id="password2"
					bind:value={user.password2}
					class="bg-bgColor border border-borderColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				/>
			</div>

			<button
				type="submit"
				class="w-full bg-primaryColor text-white rounded-md font-medium py-2 mt-2">Submit</button
			>

			<p class="mt-4 text-center">
				Alredy registered? <a href="/auth/login" class="text-primaryColor hover:underline">Login</a>
			</p>
		</form>
	</section>
</main>
