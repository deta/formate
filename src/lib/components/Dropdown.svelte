<script lang="ts">
	import { slide } from 'svelte/transition';
	import ArrowUp from './icons/ArrowUp.svelte';

	// Selected value
	export let value: string = 'sdffsd';

	// Pickable options
	export let options: string[] = [];

	// Set to true to disable any interactions
	export let disabled: boolean = false;

	// Error message
	export let error: string | boolean = false;

	// Warning message
	export let warning: string | boolean = false;

	// Small variant
	export let small: boolean = true;

	// Is opened
	export let opened: boolean = false;

	// Placeholder where it is nothing to select
	export let placeholder: string = '';

	let buttonElement: HTMLButtonElement;

	// Automatically select value from options
	$: if (!options.includes(value)) value = options[0];

	// Scroll to element if error appeared
	$: if (error) {
		buttonElement?.scrollIntoView({ block: 'center' });
	}

	// Is something selected
	$: isSelected = typeof value === 'string';

	// If has options to pick from
	$: hasOptions = options.length > 0;

	/**
	 * Hide on click outside
	 */
	function clickOutside(event) {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			opened = false;
		}
	}

	/**
	 * On dropdown open/close
	 */
	function onToggle() {
		opened = !opened;
	}
</script>

<div>
	<button
		class="dropdown"
		bind:this={buttonElement}
		on:blur={clickOutside}
		on:click={onToggle}
		class:disabled
		class:error
		class:warning
		class:small
		class:opened
		class:disable-rounding={opened && hasOptions}
	>
		<span class="value" class:placeholder={!isSelected}>{isSelected ? value : placeholder}</span>

		<span class="icon">
			<ArrowUp />
		</span>

		{#if opened && hasOptions}
			<div class="options" transition:slide|local={{ duration: 200 }}>
				{#each options as option}
					<button class="option" on:click={() => (value = option)}>
						<div class="option-value">{option}</div>
					</button>
				{/each}
			</div>
		{/if}
	</button>

	{#if typeof error === 'string' || typeof warning === 'string'}
		<div class="message" class:error class:warning transition:slide|local={{ duration: 100 }}>{error || warning}</div>
	{/if}
</div>

<style>
	.options {
		z-index: 9999999999;
		position: absolute;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		width: calc(100% + 2px);
		left: -1px;
		top: 100%;
		border: 1px solid;
		border-top: none;
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		border-color: var(--border);
		background-color: white;
		transition: border-color 0.1s ease;
	}

	.dropdown {
		all: unset;
		box-sizing: border-box;
		position: relative;
		cursor: pointer;
		width: 100%;
		display: flex;
		flex-direction: row;
		border: 1px solid;
		border-radius: 0.5rem;
		border-color: var(--border);
		min-height: 1.5rem;
		min-width: 1.5rem;
		transition: border-color 0.1s ease, border-radius 0.05s linear;
		transition-delay: 100ms;
	}

	.dropdown.small {
		min-height: 1rem;
		min-width: 1rem;
	}

	.dropdown.opened {
		border-color: var(--accent);
		transition: border-color 0.1s ease;
		transition-delay: 0;
	}

	.disable-rounding {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.dropdown.opened .icon :global(svg *) {
		stroke: var(--accent);
	}

	.dropdown.opened .icon :global(svg) {
		transform: scaleY(-100%);
	}

	.dropdown.opened .options {
		border-color: var(--accent);
		border-top: 0px solid;
	}

	.dropdown.disabled {
		opacity: 0.5;
		pointer-events: none;
		user-select: none;
	}

	.dropdown.warning,
	.dropdown.warning .options {
		border-color: var(--warning);
	}

	.dropdown.error,
	.dropdown.error .options {
		border-color: var(--danger);
	}

	.value,
	.option {
		all: unset;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		font-size: 1rem;
		line-height: 1.5rem;
		padding: 1rem 1.25rem;
	}

	.placeholder {
		opacity: 0.5;
		font-weight: 300;
		font-style: italic;
	}

	.option {
		min-height: 1.5rem;
		min-width: 1.5rem;
		border-top: 1px solid;
		border-color: var(--border);
	}

	.option-value {
		opacity: 0.5;
		white-space: nowrap;
		transition: 0.1s ease;
	}

	.option:hover .option-value {
		opacity: 1;
	}

	.icon {
		all: unset;
		font-size: 1rem;
		line-height: 1.5rem;
		padding: 1rem 0;
		padding-left: 0;
		user-select: none;
		min-width: fit-content;
		padding-right: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon :global(svg) {
		display: block;
		width: 1.5rem;
		height: 1.5rem;
		transition: transform 0.1s linear;
	}

	.icon :global(svg *) {
		stroke: var(--border);
	}

	.dropdown.small .value,
	.dropdown.small .option,
	.dropdown.small .icon {
		padding: 0.75rem 1rem;
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
