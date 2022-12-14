<script lang="ts">
	import { fly } from 'svelte/transition';
	import Input from '../Input.svelte';
	import Label from '../Label.svelte';
	import Toggle from '../Toggle.svelte';
	import Button from '../Button.svelte';
	import { onMount } from 'svelte';

	// Click outside event
	export let shown: boolean = false;

	// Publication window element
	let element: HTMLElement;

	// Handle outside click
	onMount(() => {
		const handler = (event) => {
			if (!element.contains(event.target)) shown = false;
		};

		document.addEventListener('click', handler, true);
		return () => document.removeEventListener('click', handler, true);
	});
</script>

<div class="publication" bind:this={element} transition:fly|local={{ duration: 200, y: -8 }}>
	<div class="buttons">
		<Toggle>Public</Toggle>
		<Toggle active>Private</Toggle>
	</div>

	<div>
		<Label title="Public URL" description="Public URL to your form. Click to copy the link." />
		<Input />
	</div>

	<div>
		<Label title="Public URL" description="Public URL to your form. Click to copy the link." />
		<Button style="neutral" small>Apply changes</Button>
	</div>
</div>

<style>
	.publication {
		z-index: 99999999999;
		position: absolute;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		gap: 2rem;
		min-width: 24rem;
		top: calc(100% + 1.5rem);
		right: 2rem;
		padding: 2rem;
		border-radius: 1rem;
		border: 1px solid;
		border-color: var(--accent);
		background-color: white;
		box-shadow: 0 0.5rem 2rem var(--neutral);
	}

	.buttons {
		display: flex;
		justify-content: row;
		gap: 0.5rem;
	}
</style>
