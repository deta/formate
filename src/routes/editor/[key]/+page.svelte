<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/components/Header.svelte';
	import Editor from '$lib/components/Editor.svelte';
	import SettingsModal from '$lib/components/modals/SettingsModal.svelte';
	import AddFieldModal from '$lib/components/modals/AddFieldModal.svelte';
	import { deleteFormCandidate, openedModal } from '$lib/stores/modals';
	import { form, selectedScreenIndex } from '$lib/stores/editor';
	import { publication } from '$lib/stores/publication';
	import DeleteFormModal from '$lib/components/modals/DeleteFormModal.svelte';

	export let data: PageData;

	// Automatically set form & publication data
	$: $form = data.form;
	$: $publication = data.publication;
</script>

<svelte:head>
	<title>Formate | {$form.name}</title>
</svelte:head>

{#if $openedModal === 'settings'}
	<SettingsModal />
{/if}

{#if $openedModal === 'add_field'}
	<AddFieldModal />
{/if}

{#if $deleteFormCandidate}
	<DeleteFormModal />
{/if}

<div class="wrapper">
	<Header />
	<Editor />
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100vh;
	}
</style>
