<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import Checkmark from './icons/Checkmark.svelte';

	// Is toggle active
	export let value: boolean = false;

	// Set to true if value controlled from the outside
	export let controlled: boolean = false;

	export let error: string | boolean = false;

	// Click event
	const dispath = createEventDispatcher();

	/**
	 * Toggle checkmark
	 */
	function toggle() {
		if (!controlled) value = !value;
		dispath('click');
	}
</script>

<button class:active={value} class:with-checkmark={!$$slots.default} on:click={toggle}>
	<slot>
		<Checkmark />
	</slot>
</button>

{#if typeof error === 'string'}
	<div class="error-message" transition:slide|local={{ duration: 100 }}>{error}</div>
{/if}

<style>
	button {
		all: unset;
	}

	button {
		position: relative;
		cursor: pointer;
		gap: 0.5rem;
		width: fit-content;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		user-select: none;
		white-space: nowrap;
		color: var(--border);
		border-color: var(--border);
		border: 1px solid;
		border-radius: 0.5rem;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		line-height: 1rem;
		padding: 1rem 1.25rem;
		min-height: 1.5rem;
		min-width: 1.5rem;
		transition: 0.1s ease;
	}

	button:hover,
	button:focus {
		filter: brightness(0.9);
	}

	button:focus.active {
		filter: brightness(1.1);
	}

	button:active {
		transform: translateY(2px);
	}

	button.active {
		color: var(--accent);
		border-color: var(--accent);
	}

	button :global(svg) {
		display: block;
		width: 1rem;
		height: 1rem;
		transform: scale(1.5);
	}

	button :global(svg *) {
		stroke: var(--border);
	}

	button.active :global(svg *) {
		stroke: var(--accent);
	}

	.with-checkmark {
		padding: 1rem;
	}

	.error-message {
		color: var(--danger);
		padding: 0 1rem;
		margin-top: 0.5rem;
		font-size: 0.9rem;
		font-weight: 300;
	}
</style>
