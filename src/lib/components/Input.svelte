<script lang="ts">
	import { slide } from 'svelte/transition';

	export let value: string = '';
	export let disabled: boolean = false;
	export let error: string | boolean = false;
	export let type: 'date' | 'time' | 'email' | 'text' | 'tel' | 'url' | 'number' = 'text';
	export let prefix: string = undefined;
	export let icon: ConstructorOfATypedSvelteComponent = undefined;
	export let placeholder: string = '';

	let inputElemenet: HTMLInputElement;

	// Focus on the input element
	const focus = () => inputElemenet && inputElemenet.focus();

	// Handle inputs
	const handleInput = (event: any) => {
		value = type.match(/^(number|range)$/) ? +event.target.value : event.target.value;
	};
</script>

<div>
	<div class="input-wrapper" class:disabled class:error>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		{#if prefix}
			<span class="prefix" on:click={focus}>{prefix}</span>
		{/if}

		<input bind:this={inputElemenet} on:input={handleInput} on:change on:keyup on:click on:focus on:blur {placeholder} {type} {value} />

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		{#if icon}
			<span class="icon" on:click={focus}>
				<svelte:component this={icon} />
			</span>
		{/if}
	</div>

	{#if typeof error === 'string'}
		<div class="error-message" transition:slide={{ duration: 100 }}>{error}</div>
	{/if}
</div>

<style>
	.input-wrapper {
		display: flex;
		flex-direction: row;
		border: 1px solid;
		border-radius: 0.5rem;
		border-color: var(--border);
		padding: 0 1.25rem;
		overflow-x: auto;
		overflow-y: hidden;
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

	.input-wrapper.error .prefix {
		color: var(--danger);
	}

	input::placeholder {
		opacity: 0.5;
	}

	input,
	.prefix,
	.icon {
		all: unset;
		font-size: 1rem;
		line-height: 1.5rem;
		padding: 1rem 0;
	}

	input {
		width: 100%;
	}

	.prefix,
	.icon {
		opacity: 0.3;
		user-select: none;
		min-width: fit-content;
	}

	.icon {
		margin-left: 0.25rem;
	}

	.icon :global(svg) {
		display: block;
	}

	.error-message {
		color: var(--danger);
		padding: 0 1rem;
		margin-top: 0.5rem;
		font-size: 0.75rem;
		font-weight: 300;
	}
</style>
