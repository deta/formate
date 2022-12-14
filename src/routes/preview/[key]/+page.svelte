<script lang="ts">
	import type { PageData } from './$types';
	import Renderer from '$lib/components/Renderer.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Form data
	export let data: PageData;

	// Inputs data
	let inputs: Record<any, any> = {};

	// Log form structure data
	onMount(() => {
		console.log('🔎 Formate Preview', data);
	});

	// Append global styles
	if (browser) {
		const element = document.createElement('style');
		element.textContent = data.css;
		document.head.append(element);
	}
</script>

<div class="preview">
	<span>Preview Mode (data won't be sent)</span>
</div>

<Renderer form={data} bind:inputs on:submit={({ detail }) => console.log('🏁 Submission', detail)} />

<style>
	.preview {
		position: absolute;
		top: 1rem;
		left: 1rem;
		font-size: 0.75rem;
		opacity: 0.3;
	}
</style>
