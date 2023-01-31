<script lang="ts">
	import Copy from './icons/Copy.svelte';
	import Input from './Input.svelte';

	// Value to put inside
	export let value: string;

	/**
	 * Copy URL on click
	 * @param event Click event
	 */
	function copyPublicURL(event: MouseEvent) {
		(event.target as HTMLInputElement).select();
		navigator.clipboard.writeText(value);
	}
</script>

<Input bind:value icon={Copy} on:focus={copyPublicURL} readonly />

<style>
	:global(.input svg) {
		cursor: pointer;
	}
</style>
