<script lang="ts">
	import { selectScreen } from '$lib/stores/editor';
	import type { Screen } from '$lib/types';

	import { browser } from '$app/environment';
	import { addScreen, deleteScreen, form, screen } from '$lib/stores/editor';
	import ScreenEditor from './ScreenEditor.svelte';
	import Sidebar from './Sidebar.svelte';

	// Update color scheme of the editor
	$: if (browser && $form.color) {
		document.documentElement.className = '';
		document.documentElement.classList.add($form.color);
	}

	// Find screen index by key
	$: screenIndex = $form.screens.findIndex((value) => value.key === $screen.key);

	// Update form store on screen change
	function onScreenChange(data: Screen) {
		$form.screens[screenIndex] = data;
	}
</script>

<div class="editor">
	<Sidebar
		screens={$form.screens}
		selectedScreen={$screen?.key}
		on:add={addScreen}
		on:select={({ detail }) => selectScreen(detail)}
		on:delete={({ detail }) => deleteScreen(detail)}
	/>

	{#if $screen}
		{#key $screen.key}
			<ScreenEditor screen={$screen} on:change={({ detail }) => onScreenChange(detail)} />
		{/key}
	{/if}
</div>

<style>
	.editor {
		position: relative;
		height: calc(100vh - 4rem);
		width: 100%;
		display: flex;
		flex-direction: row;
	}
</style>
