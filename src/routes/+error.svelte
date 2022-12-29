<script lang="ts">
	import { page } from '$app/stores';
</script>

<main>
	<div class="icon">🤕</div>
	<h1>{$page.status}</h1>
	<p>{$page.error.message}</p>
</main>

<style>
	main {
		font-family: 'Inter UI', system;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 100vh;
	}

	.icon {
		font-size: 4rem;
		margin-top: -6rem;
		margin-bottom: 2rem;
	}

	h1 {
		all: unset;
		display: block;
		font-size: 3rem;
		font-weight: 800;
		margin-bottom: 0.5rem;
	}

	p {
		all: unset;
		font-size: 2rem;
		font-weight: 300;
		opacity: 0.5;
	}
</style>
