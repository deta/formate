<script lang="ts">
	import Pencil from './icons/Pencil.svelte';

	export let value: string;

	let element: HTMLDivElement;
	const focus = () => element.focus();
</script>

<div class="editable">
	<div class="input" bind:this={element} spellcheck="false" contenteditable bind:textContent={value} />

	{#if !value}
		<i class="input empty" on:keydown={focus} contenteditable>empty</i>
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
		min-height: 1rem;
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
