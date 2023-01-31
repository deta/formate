<script lang="ts">
	import Editor from '$lib/components/editor/Editor.svelte';
	import Header from '$lib/components/Header.svelte';
	import AddFieldModal from '$lib/components/modals/AddFieldModal.svelte';
	import DeleteFormModal from '$lib/components/modals/DeleteFormModal.svelte';
	import SettingsModal from '$lib/components/modals/SettingsModal.svelte';
	import type { PageData } from './$types';

	import DataModal from '$lib/components/modals/DataModal.svelte';
	import { form, screen } from '$lib/stores/editor';
	import { deleteFormCandidate, openedModal } from '$lib/stores/modals';
	import { publication } from '$lib/stores/publication';

	export let data: PageData;

	// Automatically set form & publication data
	$: $form = data.form;
	$: $publication = data.publication;
	$: $screen = data.form?.screens?.[0];
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

{#if $openedModal === 'data'}
	<DataModal />
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
