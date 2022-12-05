<script lang="ts">
	import { fade } from "svelte/transition";
	import { isOverlayShown } from "../state/ui";

	// Hide overlay on click
	function hideOverlay() {
		$isOverlayShown = false;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if $isOverlayShown}
	<div
		class="overlay"
		on:click={hideOverlay}
		transition:fade={{ duration: 100 }}
	/>
{/if}

<style>
	.overlay {
		position: fixed;
		cursor: pointer;
		z-index: 9999999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		user-select: none;
		background-color: rgba(0, 0, 0, 0.3);
	}
</style>
