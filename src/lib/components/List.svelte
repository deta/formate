<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import TrashBin from './icons/TrashBin.svelte';

	// On item delete event
	const dispatch = createEventDispatcher<{ delete: { item: any; index: number } }>();

	// Items to render
	export let items: any[] = [];

	// Make smaller
	export let small: boolean = false;

	// Make table heavier
	export let bold: boolean = false;

	// Allow deleting
	export let deletable: boolean = true;
</script>

{#if items?.length}
	<div class="list" class:small class:bold transition:slide|local={{ duration: 100 }}>
		{#each items as item, index}
			<div class="item" transition:slide|local={{ duration: 100 }}>
				<slot {item} {index} />

				{#if deletable}
					<button class="delete" on:click={() => dispatch('delete', { item, index })}>
						<TrashBin />
					</button>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<style>
	.list {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: 1rem;
		border: 1px solid;
		border-radius: 0.5rem;
		border-color: var(--border);
		background-color: white;
	}

	.list .item {
		padding: 1rem 1.25rem;
		white-space: nowrap;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid;
		border-color: var(--border);
	}

	.list.small .item {
		padding: 0.75rem 1rem;
	}

	.list.bold {
		border-width: 2px;
	}

	.list.bold .item {
		border-width: 2px;
	}

	.list .item:last-of-type {
		border-bottom: none;
	}

	.delete {
		all: unset;
		display: block;
		cursor: pointer;
	}

	.delete :global(svg) {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		opacity: 0;
		transition: opacity 0.1s ease;
	}

	.item:hover .delete :global(svg) {
		opacity: 0.5;
	}

	.delete:hover :global(svg) {
		opacity: 1 !important;
	}

	.delete:hover :global(svg *) {
		opacity: 1;
		stroke: var(--danger);
	}
</style>
