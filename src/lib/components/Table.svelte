<script lang="ts">
	import { form } from '$lib/stores/editor';
	import { fade, fly, slide } from 'svelte/transition';
	import Copy from './icons/Copy.svelte';
	import Refresh from './icons/Refresh.svelte';

	// Data to render
	export let data: any[] = [];

	// Make smaller
	export let small: boolean = false;

	// Width of the columns
	export let width: string = '12rem';

	// Is table loading
	export let loading: boolean = false;

	// Collect columns
	$: columns = collectCollumns(data);

	// Collect collumn names
	function collectCollumns(data: unknown[]) {
		const cols = new Set(['key']);

		data.forEach((row) => {
			Object.keys(row).forEach((key) => cols.add(key));
		});

		return [...cols];
	}

	/**
	 * Get title by column key
	 * @param column Column key
	 */
	function getFieldTitle(column: string) {
		for (let i = 0; i < $form.screens.length; i++) {
			const screen = $form.screens[i];

			for (let j = 0; j < screen.fields.length; j++) {
				const field = screen.fields[j];
				if (field.column === column) return field.title;
			}
		}

		return column;
	}

	/**
	 * Copy item
	 * @param item Item data to copy
	 */
	function copyItem(item: unknown) {
		const serialized = JSON.stringify(item);
		navigator.clipboard.writeText(serialized);
	}

	// If is nullable
	function isNullable(value: any) {
		return value === '' || typeof value === 'undefined' || value === null;
	}

	// Serialize value to display as text
	function serializeValue(value: any) {
		return value;
	}
</script>

<div class="table" class:small transition:fly|local>
	{#if loading}
		<div class="loading" transition:fade|local={{ duration: 100 }}>
			<Refresh />
		</div>
	{/if}

	{#if data.length > 0}
		<div class="headings">
			<div class="cell action" />
			{#each columns as column}
				<div class="cell" style:width>
					<div>{column}</div>

					{#if column !== 'key'}
						<div class="secondary">{getFieldTitle(column)}</div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="rows">
			{#each data as row, index (row.key)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="row" transition:slide|local={{ duration: 100 }}>
					<button class="cell action" on:click={() => copyItem(row)}>
						<Copy />
					</button>
					{#each columns as column}
						<div class="cell" style:width class:secondary={isNullable(row[column])}>
							{serializeValue(row[column])}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{:else if !loading}
		<div class="no-data">Currently no data</div>
	{/if}
</div>

<style>
	.table {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 8rem;
		overflow: auto;
		margin-bottom: 1rem;
		border: 1px solid;
		border-radius: 0.5rem;
		border-color: var(--border);
		background-color: white;
	}

	.headings {
		font-weight: 600;
		min-width: 100%;
		display: flex;
		line-height: 1.25rem;
		width: fit-content;
		flex-direction: row;
		border-bottom: 1px solid;
		border-color: var(--border);
	}

	.row {
		min-width: 100%;
		display: flex;
		width: fit-content;
		flex-direction: row;
		border-bottom: 1px solid;
		border-color: var(--border);
	}

	.row:nth-of-type(odd) {
		background-color: rgba(0, 0, 0, 0.05);
	}

	.row:last-of-type {
		border-bottom: none;
	}

	.cell {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 1rem;
		padding: 0.75rem 1rem;
	}

	.action {
		all: unset;
		cursor: pointer;
		width: 1rem;
		padding: 0 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.action :global(svg) {
		display: block;
		opacity: 0.5;
		width: 0.5rem;
		height: 0.5rem;
		transform: scale(2);
		transition: 0.1s ease;
	}

	.action:hover :global(svg) {
		opacity: 1;
	}

	.action:active :global(svg) {
		opacity: 0.5;
		transform: scale(1.75);
	}

	.table.small .cell {
		font-size: 0.75rem;
		padding: 0.5rem 1rem;
	}

	.secondary {
		opacity: 0.3;
		font-style: italic;
	}

	.no-data {
		font-size: 0.9rem;
		padding: 1rem;
		font-weight: 300;
	}

	.loading {
		z-index: 9999999;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.75);
	}

	.loading :global(svg) {
		opacity: 0.3;
		width: 2rem;
		height: 2rem;
		animation: infinite 0.5s rotation linear;
		animation-name: rotation;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-180deg);
		}
	}
</style>
