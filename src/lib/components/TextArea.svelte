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
	<div class="textarea" class:disabled class:error class:warning>
		<textarea bind:value disabled={readonly || disabled} on:change on:keyup on:click on:focus on:blur {placeholder} {spellcheck} {rows} {cols} />
	</div>

	{#if typeof error === 'string' || typeof warning === 'string'}
		<div class="message" class:error class:warning transition:slide|local={{ duration: 100 }}>{error || warning}</div>
	{/if}
</div>

<style>
	.textarea {
		display: flex;
		flex-direction: row;
		border: 1px solid;
		border-radius: 0.5rem;
		border-color: var(--border);
		overflow: hidden;
		padding: 1rem 1.25rem;
		transition: border-color 0.1s ease;
	}

	.textarea:focus-within {
		border-color: var(--accent);
	}

	.textarea.disabled {
		opacity: 0.5;
		pointer-events: none;
		user-select: none;
	}

	.textarea.error {
		border-color: var(--danger);
	}

	textarea {
		all: unset;
		cursor: pointer;
		font-size: 1rem;
		line-height: 1.5rem;
		width: 100%;
	}

	textarea::placeholder {
		opacity: 0.5;
		font-weight: 300;
		font-style: italic;
	}

	.message {
		padding: 0 1rem;
		margin-top: 0.5rem;
		font-size: 0.9rem;
		font-weight: 300;
	}

	.message.warning {
		color: var(--warning);
	}

	.message.error {
		color: var(--danger);
	}
</style>
