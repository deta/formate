<script lang="ts">
	import { publication } from '$lib/stores/publication';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Copy from '../icons/Copy.svelte';
	import Input from '../Input.svelte';
	import Label from '../Label.svelte';

	// Click outside event
	export let shown: boolean = false;

	// Publication window element
	let element: HTMLElement;

	/**
	 * Copy URL on click
	 * @param event Click event
	 */
	function copyPublicURL(event: MouseEvent) {
		(event.target as HTMLInputElement).select();
		navigator.clipboard.writeText(`${window.location.origin}/f/${$publication.slug}`);
	}

	// Handle outside click
	onMount(() => {
		const handler = (event) => {
			if (!element.contains(event.target)) {
				event.stopPropagation();
				shown = false;
			}
		};

		document.addEventListener('click', handler, true);
		return () => document.removeEventListener('click', handler, true);
	});
</script>

<div class="publication" bind:this={element} transition:fly|local={{ duration: 200, y: -8 }}>
	<div>
		<Label title="Form published!" description="Сopy it and share it with your respondents!" />
		<Input value="{window.location.origin}/f/{$publication?.slug}" icon={Copy} on:focus={copyPublicURL} readonly />
	</div>
</div>

<style>
	.publication {
		z-index: 99999999999;
		position: absolute;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		min-width: 26rem;
		top: calc(100% + 1.5rem);
		right: 2rem;
		padding: 2rem;
		border-radius: 1rem;
		border: 1px solid;
		border-color: var(--accent);
		background-color: white;
		box-shadow: 0 0.5rem 2rem var(--neutral);
		transition: 0.1s ease;
	}

	.publication :global(.input svg) {
		cursor: pointer;
	}
</style>
