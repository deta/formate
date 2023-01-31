<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Renderer from '$lib/components/renderer/Renderer.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	// Form data
	export let data: PageData;

	// Inputs data
	let inputs: Record<any, any> = {};

	// Log inputs changes
	$: console.log('📝 Changes', inputs);

	// Log form structure data
	onMount(() => {
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
		z-index: 99999999;
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		font-size: 0.75rem;
		opacity: 0.3;
	}
</style>
