<script lang="ts">
	import Renderer from '$lib/components/renderer/Renderer.svelte';
	import type { PageData } from './$types';

	// Enable server rendering
	export const ssr = true;
	export const csr = true;

	// Form data
	export let data: PageData;

	// Inputs data
	let inputs: Record<any, any> = {};

	/**
	 * Handle form submit
	 * @param inputs Inputs data
	 */
	async function submit(inputs: any) {
		await fetch(`/api/submit?slug=${data.slug}`, {
			method: 'POST',
			body: JSON.stringify({ inputs }),
			headers: { 'Content-Type': 'application/json' }
		});
	}
</script>

<Renderer form={data} bind:inputs on:submit={({ detail }) => submit(detail)} />
