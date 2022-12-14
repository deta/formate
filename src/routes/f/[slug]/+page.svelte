<script lang="ts">
	import type { PageData } from './$types';
	import Renderer from '$lib/components/Renderer.svelte';

	// Form data
	export let data: PageData;

	// Inputs data
	let inputs: Record<any, any> = {};
</script>

<Renderer form={data} bind:inputs on:submit={() => console.log()} />
