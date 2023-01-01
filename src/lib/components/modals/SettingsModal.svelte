<script>
	import { form } from '$lib/stores/editor';
	import { setFormDeleteCandidate } from '$lib/stores/modals';
	import { createPublication, deletePublication, publication } from '$lib/stores/publication';
	import { createSlug } from '$lib/utils';
	import { fly } from 'svelte/transition';
	import Button from '../Button.svelte';
	import ColorPicker from '../ColorPicker.svelte';
	import TrashBin from '../icons/TrashBin.svelte';
	import Input from '../Input.svelte';
	import Label from '../Label.svelte';
	import Modal from '../Modal.svelte';
	import StylePicker from '../StylePicker.svelte';
	import TextArea from '../TextArea.svelte';
	import Toggle from '../Toggle.svelte';

	let currentTab = 'general';
	let previousName = $form.name;

	// Update slug & table name depending on the form name
	$: {
		const previousSlug = createSlug(previousName);
		if (previousSlug === createSlug($form.slug)) $form.slug = createSlug($form.name);
		if (`submissions-${previousSlug}` === createSlug($form.table)) $form.table = `submissions-${createSlug($form.name)}`;
		previousName = $form.name;
	}

	/**
	 * On modal close
	 */
	function onClose() {
		$form.slug = createSlug($form.slug); // Format slug
	}
</script>

<Modal title="Settings" bind:currentTab tabs={['general', 'preferences', 'other']} on:hide={onClose}>
	{#if currentTab === 'general'}
		<div in:fly|local={{ duration: 200, x: -8 }}>
			<Label title="Form Name" description="Name of your form, that will be displayed on the welcome page." required />
			<Input bind:value={$form.name} />
		</div>

		<div in:fly|local={{ duration: 200, x: -8, delay: 50 }}>
			<Label title="Storage Table" description="Name of the table, that will be used for storing submissions" required />
			<Input bind:value={$form.table} />
		</div>

		<div in:fly|local={{ duration: 200, x: -8, delay: 100 }}>
			<Label title="URL Slug" description="The link, where the final published form will be available!" required />
			<Input bind:value={$form.slug} prefix="{window.location.origin}/f/" />
		</div>
	{:else if currentTab === 'preferences'}
		<div in:fly|local={{ duration: 200, x: -8 }}>
			<Label title="Color Scheme" description="Accent color that will be used in the editor of your forms UI" />
			<ColorPicker bind:value={$form.color} />
		</div>

		<div in:fly|local={{ duration: 200, x: -8, delay: 50 }}>
			<Label title="Style" description="Style of the form layout" />
			<StylePicker bind:value={$form.style} />
		</div>

		<div in:fly|local={{ duration: 200, x: -8, delay: 100 }}>
			<Label title="Custom CSS" description="Custom CSS code, that will be injected to the form page" />
			<TextArea placeholder="Leave blank so that no additional styles are added" bind:value={$form.css} />
		</div>
	{:else if currentTab === 'other'}
		<div in:fly|local={{ duration: 200, x: -8 }}>
			<Label title="Publication" description="You can unpublish the form, the public link will no longer be available." />

			<div class="buttons">
				<Toggle value={!!$publication} controlled on:click={() => createPublication($form)}>Public</Toggle>
				<Toggle value={!$publication} controlled on:click={() => deletePublication($form.key)}>Private</Toggle>
			</div>
		</div>

		<div in:fly|local={{ duration: 200, x: -8, delay: 50 }}>
			<Label title="Delete Form" description="Delete this form (Submissions wont be removed)" />
			<Button style="danger" on:click={() => setFormDeleteCandidate($form.key)}><TrashBin /></Button>
		</div>
	{/if}
</Modal>

<style>
	.buttons {
		display: flex;
		gap: 0.5rem;
	}
</style>
