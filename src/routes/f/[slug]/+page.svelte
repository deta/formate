<script lang="ts">
	import type { PageData } from './$types';
	import Renderer from '$lib/components/Renderer.svelte';

	// Form data
	export let data: PageData;

	// Inputs data
	let inputs: Record<any, any> = {};

	/**
	 * Handle form submit
	 * @param data Inputs data
	 */
	async function submit(data: any) {
		console.log(data);
	}
</script>

<Renderer form={data} bind:inputs on:submit={({ detail }) => submit(detail)} />
