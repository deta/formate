<script lang="ts">
	import Pencil from './icons/Pencil.svelte';

	// Input value
	export let value: string;

	// Placeholder text
	export let placeholder: string = 'empty';

	// ContentEditable element
	let element: HTMLDivElement;

	// Focuse on the element
	const focus = () => element.focus();

	// Disable Enter press to prevent newline
	const disableNewline = (event: KeyboardEvent) => event.key === 'Enter' && event.preventDefault();
</script>

<div class="editable">
	<div
		class="input"
		spellcheck="false"
		contenteditable
		bind:this={element}
		bind:textContent={value}
		on:keydown={disableNewline}
		on:blur
		on:focus
		on:click
	/>

	{#if !value}
		<i class="input empty" on:keydown={focus} contenteditable>{placeholder}</i>
	{/if}

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="icon" on:click={focus}>
		<Pencil />
	</div>
</div>

<style>
	.editable {
		position: relative;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.input {
		word-break: break-all;
		min-height: 1rem;
		line-height: 1.5em;
	}

	.input,
	.input:focus,
	.input:active {
		outline: none;
	}

	.empty {
		opacity: 0.5;
	}

	.icon {
		opacity: 0;
		transition: 0.1s ease;
		margin-left: 0.5rem;
	}

	.icon :global(svg) {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
	}

	.icon :global(svg *) {
		stroke: var(--text);
	}

	.editable:hover .icon {
		opacity: 0.3;
	}

	.editable:focus-within .icon {
		opacity: 1;
	}
</style>
