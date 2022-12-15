<script lang="ts">
	import { slide } from 'svelte/transition';

	export let value: string = '';
	export let disabled: boolean = false;
	export let error: string | boolean = false;
	export let type: 'date' | 'time' | 'email' | 'text' | 'tel' | 'url' | 'number' = 'text';
	export let prefix: string = undefined;
	export let icon: ConstructorOfATypedSvelteComponent = undefined;
	export let placeholder: string = '';
	export let readonly: boolean = false;
	export let spellcheck: boolean = false;

	let inputElement: HTMLInputElement;

	// Focus on the input element
	const focus = () => inputElement && inputElement.focus();

	// Handle inputs
	const handleInput = (event: any) => {
		if (readonly) return;
		value = type.match(/^(number|range)$/) ? +event.target.value : event.target.value;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div>
	<div class="input-wrapper" class:disabled class:error>
		{#if prefix}
			<span class="prefix" on:click={focus}>{prefix}</span>
		{/if}

		<input bind:this={inputElement} on:input={handleInput} on:change on:keyup on:click on:focus on:blur {placeholder} {type} {value} {spellcheck} {disabled} {readonly} />

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
		min-height: 1.5rem;
		min-width: 1.5rem;
		transition: border-color 0.1s ease;
	}

	.input-wrapper:focus-within {
		border-color: var(--accent);
	}

	.input-wrapper:focus-within .icon :global(svg *) {
		stroke: var(--accent);
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
		font-weight: 300;
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
		user-select: none;
		min-width: fit-content;
	}

	.icon {
		margin-left: 0.5rem;
		margin-right: -0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon :global(svg) {
		display: block;
		width: 1.5rem;
		height: 1.5rem;
	}

	.icon :global(svg *) {
		stroke: var(--border);
	}

	.error-message {
		color: var(--danger);
		padding: 0 1rem;
		margin-top: 0.5rem;
		font-size: 0.75rem;
		font-weight: 300;
	}
</style>
