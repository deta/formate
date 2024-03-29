<script lang="ts">
	import { hideModals } from '$lib/stores/modals';
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	// Modal title
	export let title: string;

	// Add padding to the content
	export let paddings: boolean = true;

	// Array of tabs
	export let tabs: string[] = [];

	// Current opened tab
	export let currentTab: string = tabs?.[0] || '';

	// Fix on top
	export let centered: boolean = false;

	// Make form wider
	export let wider: boolean = false;

	// Dispatch close event
	const dispatch = createEventDispatcher();

	// Handle click on tab
	const createTabHandler = (tab: string) => () => (currentTab = tab);

	/**
	 * Hide modal
	 */
	function hide() {
		dispatch('hide');
		hideModals();
	}
</script>

<div class="wrapper" class:centered transition:fade={{ duration: 200 }}>
	<div class="modal" class:wider transition:fly={{ y: 32, opacity: 1, duration: 200 }}>
		<h2>{title}</h2>

		<div class="tabs">
			{#each tabs as tab}
				<button class="tab" class:active={currentTab === tab} on:click={createTabHandler(tab)}>{tab}</button>
			{/each}
		</div>
		{#key currentTab}
			<div class="content" class:paddings in:fly|local={{ duration: 200, x: -16 }}>
				<slot />
			</div>
		{/key}
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="overlay" on:click={hide} />
</div>

<style>
	.wrapper {
		z-index: 9999;
		position: fixed;
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		padding: 1rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: start;
	}

	.wrapper.centered {
		justify-content: center;
	}

	.modal {
		position: relative;
		display: flex;
		flex-direction: column;
		height: fit-content;
		overflow: hidden;
		max-height: 100%;
		z-index: 999999;
		width: 100%;
		min-height: 200px;
		max-width: 600px;
		border-radius: 1rem;
		background-color: white;
	}

	.modal.wider {
		max-width: 1000px;
	}

	.overlay {
		position: fixed;
		cursor: pointer;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.tabs {
		display: flex;
		gap: 1.25rem;
		width: 100%;
		padding: 0 2.5rem;
		background-color: var(--neutral);
	}

	.tab {
		all: unset;
		opacity: 0.5;
		cursor: pointer;
		color: var(--accent);
		padding-bottom: 0.75rem;
		font-size: 0.9rem;
		font-weight: 400;
		text-transform: capitalize;
		transition: 0.1s ease;
	}

	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		gap: 2.5rem;
	}

	.tab.active {
		box-shadow: inset 0 -2px 0px var(--accent);
	}

	.tab:hover,
	.tab.active {
		opacity: 1;
	}

	.paddings {
		padding: 2.5rem;
		padding-top: 2rem;
		padding-bottom: 3rem;
	}

	h2 {
		margin: 0;
		padding: 2rem 2.5rem;
		padding-bottom: 1.5rem;
		font-weight: 700;
		font-size: 1.5rem;
		color: var(--accent);
		background-color: var(--neutral);
	}
</style>
