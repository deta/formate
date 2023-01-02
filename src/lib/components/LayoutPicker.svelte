<script lang="ts">
	import type { Layout } from '$lib/types';
	import { fade } from 'svelte/transition';
	import Checkmark from './icons/Checkmark.svelte';

	export let value: Layout = 'clean';
</script>

<div class="layouts">
	<button class="layout" on:click={() => (value = 'clean')}>
		{#if value === 'clean'}
			<div class="selection" in:fade={{ duration: 200 }}>
				<Checkmark />
			</div>
		{/if}
		<svg width="128" height="96" viewBox="0 0 128 96" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="128" height="96" fill="white" />
			<rect x="32" y="22" width="63" height="4" fill="var(--text)" />
			<rect x="32" y="28" width="48" height="3" fill="var(--text)" />
			<rect x="32" y="33" width="38" height="3" fill="var(--border)" />
			<rect x="32" y="45" width="63" height="4" fill="var(--border)" />
			<rect x="32" y="42" width="29" height="2" fill="var(--neutral)" />
			<rect x="32" y="56" width="63" height="4" fill="var(--border)" />
			<rect x="32" y="53" width="37" height="2" fill="var(--neutral)" />
			<rect x="85" y="70" width="10" height="4" fill="var(--accent)" />
			<rect x="73" y="70" width="10" height="4" fill="var(--neutral)" />
		</svg>
	</button>

	<button class="layout" on:click={() => (value = 'framed')}>
		{#if value === 'framed'}
			<div class="selection" in:fade={{ duration: 200 }}>
				<Checkmark />
			</div>
		{/if}

		<svg width="128" height="96" viewBox="0 0 128 96" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="128" height="96" fill="var(--accent)" />
			<rect x="20" y="11" width="88" height="70" rx="8" fill="white" />
			<rect x="32" y="22" width="63" height="4" fill="var(--text)" />
			<rect x="32" y="28" width="48" height="3" fill="var(--text)" />
			<rect x="32" y="33" width="38" height="3" fill="var(--border)" />
			<rect x="32" y="45" width="63" height="4" fill="var(--border)" />
			<rect x="32" y="42" width="29" height="2" fill="var(--neutral)" />
			<rect x="32" y="56" width="63" height="4" fill="var(--border)" />
			<rect x="32" y="53" width="37" height="2" fill="var(--neutral)" />
			<rect x="85" y="70" width="10" height="4" fill="var(--accent)" />
			<rect x="73" y="70" width="10" height="4" fill="var(--neutral)" />
		</svg>
	</button>

	<button class="layout" on:click={() => (value = 'long')}>
		{#if value === 'long'}
			<div class="selection" in:fade={{ duration: 200 }}>
				<Checkmark />
			</div>
		{/if}

		<svg width="128" height="96" viewBox="0 0 128 96" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="128" height="96" fill="var(--accent)" />
			<rect x="22" width="83" height="96" fill="white" />
			<rect x="32" y="22" width="63" height="4" fill="var(--text)" />
			<rect x="32" y="28" width="48" height="3" fill="var(--text)" />
			<rect x="32" y="33" width="38" height="3" fill="var(--border)" />
			<rect x="32" y="45" width="63" height="4" fill="var(--border)" />
			<rect x="32" y="42" width="29" height="2" fill="var(--neutral)" />
			<rect x="32" y="56" width="63" height="4" fill="var(--border)" />
			<rect x="32" y="53" width="37" height="2" fill="var(--neutral)" />
			<rect x="85" y="70" width="10" height="4" fill="var(--accent)" />
			<rect x="73" y="70" width="10" height="4" fill="var(--neutral)" />
		</svg>
	</button>
</div>

<style>
	button {
		all: unset;
		cursor: pointer;
		display: block;
	}

	.layouts {
		gap: 1rem;
		display: flex;
		justify-content: row;
	}

	.layout {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		width: 8rem;
		height: 6rem;
		border: 1px solid;
		border-color: var(--border);
		border-radius: 0.5rem;
		transition: 0.1s ease;
	}

	.layout:hover {
		filter: grayscale(0%);
	}

	.layout:active {
		transform: scale(0.95);
	}

	.selection {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.selection :global(svg) {
		width: 2rem;
		height: 2rem;
	}

	.selection :global(svg *) {
		stroke: white;
	}
</style>
