<script lang="ts">
	import type { PageData } from './$types';
	import Renderer from '$lib/components/Renderer.svelte';
	import { POST } from '$lib/http';

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
		await POST(`/api/submit?slug=${data.slug}`, { inputs })
	}
</script>

<Renderer form={data} bind:inputs on:submit={({ detail }) => submit(detail)} />
