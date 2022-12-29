<script lang="ts">
	import { addField } from '$lib/stores/editor';
	import { hideModals } from '$lib/stores/modals';
	import type { FieldType } from '$lib/types';
	import Modal from '../Modal.svelte';

	import { fieldsMetadata } from '$lib/metadata';

	/**
	 * On field select
	 * @param type
	 */
	function selectField(type: FieldType) {
		addField(type);
		hideModals();
	}
</script>

<Modal title="Add field" paddings={false}>
	<div class="fields">
		{#each Object.entries(fieldsMetadata) as [type, field]}
			<button class="field" on:click={() => selectField(type)}>
				<div class="icon">
					<svelte:component this={field.icon} />
				</div>
				<div>
					<h3>{field.name}</h3>
					<p>{field.description}</p>
				</div>
			</button>
		{/each}
	</div>
</Modal>

<style>
	.fields {
		padding: 1.5rem;
		gap: 1.5rem;
		display: flex;
		flex-direction: column;
	}

	.field {
		all: unset;
		cursor: pointer;
		gap: 0.75rem;
		display: flex;
		align-items: center;
		flex-direction: row;
		width: 100%;
	}

	.field:hover {
		color: black;
	}

	.field:hover .icon :global(svg) {
		opacity: 1;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2.5rem;
		width: 2.5rem;
		min-width: 2.5rem;
		min-height: 2.5rem;
		white-space: nowrap;
		border-radius: 50%;
		background-color: var(--neutral);
	}

	.icon :global(svg *) {
		stroke: var(--accent);
	}

	.icon :global(svg) {
		opacity: 0.5;
		transition: 0.1s ease;
	}

	h3,
	p {
		all: unset;
		display: block;
		font-size: 0.9rem;
	}

	h3 {
		font-weight: 500;
	}

	p {
		font-weight: 400;
		opacity: 0.5;
	}
</style>
