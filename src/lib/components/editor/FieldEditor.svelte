<script lang="ts">
	import { fieldsMetadata } from '$lib/metadata';
	import { deleteField, moveField } from '$lib/stores/editor';
	import type { Field, Screen } from '$lib/types';
	import { fly } from 'svelte/transition';
	import EditableText from '../EditableText.svelte';
	import ArrowDown from '../icons/ArrowDown.svelte';
	import ArrowUp from '../icons/ArrowUp.svelte';
	import TrashBin from '../icons/TrashBin.svelte';
	import CheckboxOptions from './options/CheckboxOptions.svelte';
	import NumberOptions from './options/NumberOptions.svelte';
	import ShortLongTextOptions from './options/ShortLongTextOptions.svelte';

	// Screen data
	export let screen: Screen;

	// Initial field data
	export let field: Field;

	// Index inside the fields list
	export let index: number = 0;

	// Field icon, name, etc.
	$: fieldData = fieldsMetadata[field.type];
</script>

<div class="field" in:fly={{ x: -8, delay: 100 * index }} out:fly|local={{ x: 8, delay: 100 * index }}>
	<div class="heading">
		<div class="buttons">
			{#if index > 0}
				<button on:click={() => moveField(field.key, 'up')}><ArrowUp /></button>
			{/if}

			{#if index < screen.fields.length - 1}
				<button on:click={() => moveField(field.key, 'down')}><ArrowDown /></button>
			{/if}

			<button class="delete" on:click={() => deleteField(field.key)}><TrashBin /></button>
		</div>

		<div class="icon">
			<svelte:component this={fieldData.icon} />
		</div>

		<div>
			<small class="type">{fieldData.name}</small>
			<h4 class="title">
				<EditableText bind:value={field.title} />
			</h4>
		</div>
	</div>

	<div class="content">
		{#if field.type === 'short' || field.type === 'long'}
			<ShortLongTextOptions bind:field />
		{:else if field.type === 'number'}
			<NumberOptions bind:field />
		{:else if field.type === 'checkbox'}
			<CheckboxOptions bind:field />
		{/if}
	</div>
</div>

<style>
	.field {
		gap: 1rem;
		display: flex;
		flex-direction: column;
		padding: 2rem 2.25rem;
		border-bottom: 1px solid;
		border-color: var(--border);
		background-color: white;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3.5rem;
		height: 3.5rem;
		min-width: 3.5rem;
		min-height: 3.5rem;
		border-radius: 50%;
		background-color: var(--neutral);
	}

	.icon :global(svg) {
		display: block;
		width: 1.75rem;
		height: 1.75rem;
	}

	.icon :global(svg *) {
		stroke: var(--accent);
	}

	.heading {
		position: relative;
		gap: 0.75rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.type,
	.title {
		all: unset;
		display: block;
	}

	.type {
		opacity: 0.5;
		font-weight: 400;
		font-size: 0.9rem;
		margin-bottom: 0.2rem;
	}

	.title {
		font-weight: 400;
		font-size: 1.25rem;
	}

	.content {
		padding-top: 1rem;
		padding-left: 4.25rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.buttons {
		position: absolute;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		top: 0;
		right: 0;
		opacity: 0;
		pointer-events: none;
		transition: 0.1s ease;
	}

	.field:hover .buttons {
		opacity: 1;
		pointer-events: all;
	}

	button {
		all: unset;
		cursor: pointer;
		opacity: 0.3;
		transition: 0.1s ease;
	}

	button:hover {
		opacity: 1 !important;
	}

	.delete:hover :global(svg *) {
		stroke: var(--danger);
	}
</style>
