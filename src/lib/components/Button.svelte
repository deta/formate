<script lang="ts">
	// Style of the buttoh
	export let style: 'normal' | 'neutral' | 'danger' = 'normal';

	// Make button width 100%
	export let fullWidth: boolean = false;

	// Small button variant
	export let small: boolean = false;

	// Disable button
	export let disabled: boolean = false;

	// Button align position
	export let position: 'centered' | 'left' | 'right' | 'auto' = 'auto';
</script>

<button on:click class:full-width={fullWidth} class:small class:disabled class="{style} {position}">
	<slot />
</button>

<style>
	button {
		all: unset;
		box-sizing: border-box;
	}

	button {
		position: relative;
		cursor: pointer;
		gap: 0.5rem;
		width: fit-content;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		user-select: none;
		white-space: nowrap;
		color: white;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		line-height: 1rem;
		border-radius: 0.5rem;
		padding: 1rem 1.5rem;
		min-height: 3rem;
		min-width: 2rem;
		background-color: var(--accent);
		transition: 0.1s ease;
	}

	button:hover,
	button:focus {
		filter: brightness(1.05);
	}

	button:active {
		transform: translateY(2px);
	}

	button :global(svg) {
		display: block;
		width: 1rem;
		height: 1rem;
		transform: scale(1.25);
	}

	.normal {
		color: white;
		background-color: var(--accent);
	}

	.neutral {
		color: var(--accent);
		background-color: var(--neutral);
	}

	.danger {
		color: white;
		background-color: var(--danger);
	}

	.neutral :global(svg *) {
		stroke: var(--accent);
	}

	.danger :global(svg *),
	.normal :global(svg *) {
		stroke: white;
	}

	.full-width {
		width: 100%;
		padding-left: 0;
		padding-right: 0;
	}

	.disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	.small {
		min-height: 1rem;
		min-width: 1rem;
		padding: 0.75rem 1rem;
	}

	.centered {
		margin: 0 auto;
	}

	.left {
		margin-right: auto;
	}

	.right {
		margin-left: auto;
	}
</style>
