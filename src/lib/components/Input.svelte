<script lang="ts">
	import { slide } from 'svelte/transition';

	// Set to true to disable any interactions
	export let disabled: boolean = false;

	// Error message
	export let error: string | boolean = false;

	// Warning message
	export let warning: string | boolean = false;

	// Type of the input
	export let type: 'text' | 'number' = 'text';

	// Input value
	export let value: string | number | null = type === 'number' ? null : '';

	// Prefix input text
	export let prefix: string = undefined;

	// Postfix icon
	export let icon: ConstructorOfATypedSvelteComponent = undefined;

	// Filler text
	export let placeholder: string = '';

	// Set to true to disable editing
	export let readonly: boolean = false;

	// Spellcheck input value
	export let spellcheck: boolean = false;

	// Spellcheck input value
	export let small: boolean = false;

	let inputElement: HTMLInputElement;

	// Focus on the input element
	const focus = () => inputElement && inputElement.focus();

	// Handle inputs
	const handleInput = (event: any) => {
		const inputValue = event.target.value;
		if (readonly) return;

		if (type === 'number') {
			value = inputValue == '' ? null : +inputValue;
		} else {
			value = inputValue;
		}
	};

	// Scroll to element if error appeared
	$: if (error) {
		inputElement?.scrollIntoView({ block: 'center' });
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div>
	<div class="input" class:small class:disabled class:error class:warning>
		{#if prefix}
			<span class="prefix" on:click={focus}>{prefix}</span>
		{/if}

		<input
			bind:this={inputElement}
			on:input={handleInput}
			on:change
			on:keyup
			on:click
			on:focus
			on:blur
			{placeholder}
			{spellcheck}
			{disabled}
			{readonly}
			{value}
			{type}
		/>

		{#if icon}
			<span class="icon" on:click={focus}>
				<svelte:component this={icon} />
			</span>
		{/if}
	</div>

	{#if typeof error === 'string' || typeof warning === 'string'}
		<div class="message" class:error class:warning transition:slide|local={{ duration: 100 }}>{error || warning}</div>
	{/if}
</div>

<style>
	input,
	.prefix,
	.icon {
		all: unset;
		box-sizing: border-box;
		font-size: 1rem;
		line-height: 1.5rem;
		padding: 1rem 1.25rem;
	}

	input {
		cursor: pointer;
		width: 100%;
	}

	input::placeholder {
		opacity: 0.5;
		font-weight: 300;
		font-style: italic;
	}

	.input {
		display: flex;
		flex-direction: row;
		border: 1px solid;
		border-radius: 0.5rem;
		border-color: var(--border);
		overflow: hidden;
		min-height: 1.5rem;
		min-width: 1.5rem;
		transition: border-color 0.1s ease;
	}

	.input.small {
		min-height: 1rem;
		min-width: 1rem;
	}

	.input.small input,
	.input.small .prefix,
	.input.small .icon {
		padding: 0.75rem 1rem;
	}

	.input:focus-within {
		border-color: var(--accent);
	}

	.input:focus-within .icon :global(svg *) {
		stroke: var(--accent);
	}

	.input.disabled {
		opacity: 0.5;
		pointer-events: none;
		user-select: none;
	}

	.input.warning {
		border-color: var(--warning);
	}

	.input.warning .prefix {
		color: var(--warning);
	}

	.input.error {
		border-color: var(--danger);
	}

	.input.error .prefix {
		color: var(--danger);
	}

	.prefix {
		opacity: 0.5;
		padding-right: 0;
		margin-right: -1.25rem;
		letter-spacing: -0.05rem;
		user-select: none;
		min-width: fit-content;
	}

	.icon {
		display: flex;
		padding: 1rem;
		padding-left: 0 !important;
		user-select: none;
		align-items: center;
		min-width: fit-content;
		justify-content: center;
	}

	.icon :global(svg) {
		display: block;
		width: 1.5rem;
		height: 1.5rem;
	}

	.icon :global(svg *) {
		stroke: var(--border);
		transition: 0.1s ease;
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

	/* Disable spin buttons for numbers on Edge, Safari, Chrome */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Disable spin buttons for Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
