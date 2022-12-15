<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import Input from '../Input.svelte';
	import Label from '../Label.svelte';
	import Toggle from '../Toggle.svelte';
	import Button from '../Button.svelte';
	import { onMount } from 'svelte';
	import Copy from '../icons/Copy.svelte';
	import { form } from '$lib/stores/editor';

	// Click outside event
	export let shown: boolean = false;

	// Publication window element
	let element: HTMLElement;

	let isPublic: boolean = false;

	/**
	 * Copy URL on click
	 * @param event Click event
	 */
	function copyPublicURL(event: MouseEvent) {
		event.target.select();
		navigator.clipboard.writeText(`${window.location.origin}/f/${$form.slug}`);
	}

	/**
	 * Make form public
	 */
	function makePublic() {
		isPublic = true;
	}

	/**
	 * Make form private
	 */
	function makePrivate() {
		isPublic = false;
	}

	/**
	 * Apply form update
	 */
	function applyChanges() {}

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
		<Toggle active={isPublic} on:click={makePublic}>Public</Toggle>
		<Toggle active={!isPublic} on:click={makePrivate}>Private</Toggle>
	</div>

	{#if isPublic}
		<div class="publication-info" transition:slide|local={{ duration: 200 }}>
			<div>
				<Label title="Public URL" description="Click to copy & share it with your users!" />
				<Input value="{window.location.origin}/f/{$form.slug}" icon={Copy} on:click={copyPublicURL} readonly />
			</div>

			<div>
				<Label title="Update published form" description="You have some changes, thats not visible to your users." />
				<Button style="neutral" small>Apply changes</Button>
			</div>
		</div>
	{/if}
</div>

<style>
	.publication {
		z-index: 99999999999;
		position: absolute;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		min-width: 24rem;
		top: calc(100% + 1.5rem);
		right: 2rem;
		padding: 0 2rem;
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
		padding: 2rem 0;
	}

	.publication-info {
		display: flex;
		gap: 2rem;
		flex-direction: column;
		padding-bottom: 2rem;
	}
</style>
