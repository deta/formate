<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/editor/Card.svelte';
	import type { Screen } from '$lib/types';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher<{ select: string; delete: string; add: undefined }>();

	let element: HTMLDivElement;

	export let screens: Screen[];
	export let selectedScreen: string;

	// Scroll to bottom
	onMount(() => {
		if (element) element.scrollTo({ top: element.scrollHeight });
	});

	/**
	 * Add screen
	 */
	function addScreen() {
		setTimeout(() => {
			// Scroll to bottom
			if (element) element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' });
		}, 200);
		dispatch('add');
	}
</script>

<div class="sidebar" bind:this={element}>
	{#each screens as screen, index (screen.key)}
		<div>
			<Card
				title={screen.title}
				description={screen.description}
				selected={selectedScreen === screen.key}
				on:click={() => dispatch('select', screen.key)}
				on:delete={() => dispatch('delete', screen.key)}
			/>
		</div>
	{/each}

	<Button position="centered" on:click={addScreen}>Add Screen</Button>
</div>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		overflow-y: overlay;
		height: 100%;
		width: 22rem;
		padding: 2rem;
		padding-bottom: 4rem;
		background-color: var(--background);
		border-right: 1px solid;
		border-color: var(--border);
	}
</style>
