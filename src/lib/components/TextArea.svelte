<script lang="ts">
	import { slide } from 'svelte/transition';

	// Input value
	export let value: string = '';

	// Amount of rows
	export let rows: number = 3;

	// Amount of collumns
	export let cols: number = 20;

	// Is it disabled
	export let disabled: boolean = false;

	// Error message
	export let error: string | boolean = false;

	// Warning message
	export let warning: string | boolean = false;

	// Filler text
	export let placeholder: string = '';

	// Set to true to disable editing
	export let readonly: boolean = false;

	// Spellcheck input value
	export let spellcheck: boolean = false;
</script>

<div>
	<div class="input-wrapper" class:disabled class:error class:warning>
		<textarea bind:value disabled={readonly || disabled} on:change on:keyup on:click on:focus on:blur {placeholder} {spellcheck} {rows} {cols} />
	</div>

	{#if typeof error === 'string'}
		<div class="error-message" transition:slide|local={{ duration: 100 }}>{error}</div>
	{:else if typeof warning === 'string'}
		<div class="warning-message" transition:slide|local={{ duration: 100 }}>{warning}</div>
	{/if}
</div>

<style>
	.input-wrapper {
		display: flex;
		flex-direction: row;
		border: 1px solid;
		border-radius: 0.5rem;
		border-color: var(--border);
		overflow-x: auto;
		overflow-y: hidden;
		padding: 1rem 1.25rem;
		transition: border-color 0.1s ease;
	}

	.input-wrapper:focus-within {
		border-color: var(--accent);
	}

	.input-wrapper.disabled {
		opacity: 0.5;
		user-select: none;
	}

	.input-wrapper.error {
		border-color: var(--danger);
	}

	textarea::placeholder {
		opacity: 0.5;
		font-weight: 300;
		font-style: italic;
	}

	textarea {
		all: unset;
		font-size: 1rem;
		line-height: 1.5rem;
		width: 100%;
	}

	.error-message,
	.warning-message {
		padding: 0 1rem;
		margin-top: 0.5rem;
		font-size: 0.9rem;
		font-weight: 300;
	}

	.warning-message {
		color: var(--warning);
	}

	.error-message {
		color: var(--danger);
	}
</style>
