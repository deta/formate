<script lang="ts">
	import { fly } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import ArrowLeft from '$lib/components/icons/ArrowLeft.svelte';
	import { form } from '$lib/stores/editor';
	import Publication from './modals/Publication.svelte';
	import { POST } from '$lib/http';
	import { openSettingsModal } from '$lib/stores/modals';
	import Rocket from './icons/Rocket.svelte';

	let isPublicationShow = false;

	/**
	 * Open form preview
	 */
	function openPreview() {
		window.open(`/preview/${$form.key}`);
	}

	function togglePublish() {
		isPublicationShow = !isPublicationShow;
	}
</script>

<header>
	<div class="left" in:fly={{ y: 8, duration: 200 }}>
		<a class="go-back" href="/">
			<ArrowLeft />
			<span>Back to forms</span>
		</a>
	</div>

	<div class="center" in:fly={{ delay: 100, y: 8, duration: 200 }}>
		<span class="form-name">{$form?.name}</span>
	</div>

	<div class="right" in:fly={{ delay: 200, y: 8, duration: 200 }}>
		<Button small style="neutral" on:click={openSettingsModal}>Settings</Button>
		<Button small style="neutral" on:click={openPreview}>Preview</Button>
		<Button small on:click={togglePublish}>Publish<Rocket /></Button>
	</div>

	{#if isPublicationShow}
		<Publication bind:shown={isPublicationShow} />
	{/if}
</header>

<style>
	header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 4rem;
		gap: 0.75rem;
		padding: 1rem 2rem;
		border-bottom: 1px solid;
		border-color: var(--border);
	}

	.left {
		width: 100%;
		gap: 0.75rem;
		display: flex;
		justify-content: start;
	}

	.center {
		width: 100%;
		gap: 0.75rem;
		display: flex;
		justify-content: center;
	}

	.right {
		width: 100%;
		gap: 0.75rem;
		display: flex;
		justify-content: flex-end;
	}

	.go-back {
		all: unset;
		gap: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.5;
		transition: 0.1s ease;
	}

	.go-back:hover {
		cursor: pointer;
		opacity: 1;
	}

	.go-back :global(svg *) {
		stroke: var(--text);
	}

	.go-back :global(svg) {
		transition: 0.1s ease;
	}

	.go-back:hover :global(svg) {
		transform: translateX(-4px);
	}

	.form-name {
		font-weight: 500;
		max-width: 16rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
