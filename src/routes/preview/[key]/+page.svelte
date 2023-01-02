<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Renderer from '$lib/components/renderer/Renderer.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	// Enable server rendering
	export const ssr = true;
	export const csr = true;

	// Form data
	export let data: PageData;

	// Inputs data
	let inputs: Record<any, any> = {};

	// Log inputs changes
	$: console.log('📝 Changes', inputs);

	// Log form structure data
	onMount(() => {
		console.log('🔎 Formate Preview', data);

		// TODO: Fix
		const listener = () => {
			if (document.visibilityState !== 'visible') return;
			invalidateAll();
		};

		document.addEventListener('visibilitychange', listener);
		return () => document.removeEventListener('visibilitychange', listener);
	});
</script>

<div class="preview">
	<span>Preview Mode (data won't be sent)</span>
</div>

<Renderer form={data} bind:inputs on:submit={({ detail }) => console.log('🏁 Submission', detail)} />

<style>
	.preview {
		position: fixed;
		top: 1rem;
		left: 1rem;
		font-size: 0.75rem;
		opacity: 0.3;
	}
</style>
