<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import EditableText from '$lib/components/EditableText.svelte';
	import FieldEditor from '$lib/components/editor/FieldEditor.svelte';
	import { openAddFieldModal } from '$lib/stores/modals';
	import type { Screen } from '$lib/types';
	import { flip } from 'svelte/animate';
	import { blur } from 'svelte/transition';

	// Initial screen data
	export let screen: Screen;
</script>

<div id="screen-editor" class="screen">
	<div class="field">
		<h3>
			<EditableText bind:value={screen.title} placeholder="No Title" />
		</h3>
		<p>
			<EditableText bind:value={screen.description} placeholder="No Description" />
		</p>
	</div>

	{#each screen.fields as field, index (field.key)}
		<div animate:flip={{ duration: 200 }}>
			<FieldEditor bind:field {index} {screen} />
		</div>
	{/each}

	<div class="buttons">
		<Button position="right" style="neutral" on:click={openAddFieldModal}>Add Field</Button>
	</div>

	{#if screen.fields.length === 0}
		<div class="tutorial" in:blur />
	{/if}
</div>

<style>
	h3 {
		all: unset;
		display: block;
		font-size: 1.5rem;
		font-weight: 800;
		padding-bottom: 0.25rem;
	}

	p {
		all: unset;
		display: block;
		font-size: 1.25rem;
		font-weight: 300;
	}

	.screen {
		width: 100%;
		display: flex;
		overflow-y: overlay;
		overflow-x: hidden;
		flex-direction: column;
		padding-bottom: 4rem;
	}

	.field {
		padding: 2rem 2.25rem;
		border-bottom: 1px solid;
		border-color: var(--border);
	}

	.buttons {
		padding: 1rem 2.25rem;
	}

	.tutorial {
		height: 100%;
		width: 100%;
		opacity: 0.3;
		background-image: url('/tutorial2.webp');
		background-repeat: no-repeat;
		background-size: contain;
		pointer-events: none;
		margin-top: -3rem;
	}
</style>
