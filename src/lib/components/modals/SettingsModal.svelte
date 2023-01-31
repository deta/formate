<script>
	import { form } from '$lib/stores/editor';
	import { setFormDeleteCandidate } from '$lib/stores/modals';
	import { createPublication, deletePublication, publication } from '$lib/stores/publication';
	import { createSlug } from '$lib/utils';
	import { slide } from 'svelte/transition';
	import Button from '../Button.svelte';
	import ColorPicker from '../ColorPicker.svelte';
	import Alert from '../icons/Alert.svelte';
	import Input from '../Input.svelte';
	import Label from '../Label.svelte';
	import LayoutPicker from '../LayoutPicker.svelte';
	import Modal from '../Modal.svelte';
	import TextArea from '../TextArea.svelte';
	import Toggle from '../Toggle.svelte';

	let currentTab = 'general';
	let previousName = $form.name;
	let tableWarning = false;
	let warning = false;

	/**
	 * Check is settings has unpublished changes
	 */
	function checkChanges() {
		warning = false;
		if ($form.name !== $publication.content.name) return (warning = true);
		if ($form.table !== $publication.content.table) return (warning = true);
		if ($form.slug !== $publication.slug) return (warning = true);
		if ($form.color !== $publication.content.color) return (warning = true);
		if ($form.layout !== $publication.content.layout) return (warning = true);
		if ($form.css !== $publication.content.css) return (warning = true);
	}

	// Show warning if has unpublished changes
	$: if ($form && $publication) checkChanges();

	// Update slug & table name depending on the form name
	$: {
		const previousSlug = createSlug(previousName);
		if (previousSlug === createSlug($form.slug)) $form.slug = createSlug($form.name);
		if (`submissions-${previousSlug}` === $form.table) $form.table = `submissions-${createSlug($form.name)}`;
		previousName = $form.name;
	}

	/**
	 * On modal close
	 */
	function onClose() {
		$form.slug = createSlug($form.slug); // Format slug
	}

	/**
	 * Fill empty field on blur
	 */
	function onBlur() {
		if ($form.name === '') $form.name = 'My form';
		if ($form.table === '' || $form.table === 'forms' || $form.table === 'publications') $form.table = `submissions-${createSlug($form.name)}`;
		if ($form.slug === '') $form.slug = createSlug($form.name);
		tableWarning = false;
	}

	// Errors
	$: nameError = $form.name === '' && 'Form name cant be empty';
	$: tableError = ($form.table === '' || $form.table === 'forms' || $form.table === 'publications') && 'Invalid table name';
	$: slugError = $form.slug === '' && 'URL slug cant be empty';
</script>

<Modal title="Settings" bind:currentTab tabs={['general', 'preferences', 'other']} on:hide={onClose}>
	{#if currentTab === 'general'}
		<div>
			<Label title="Name" description="Name of your form, that will be displayed on the welcome page." required />
			<Input bind:value={$form.name} on:blur={onBlur} error={nameError} />
		</div>

		<div>
			<Label title="Submissions Table" description="Name of the table, that will be used for storing submissions." required />
			<Input
				bind:value={$form.table}
				on:focus={() => (tableWarning = true)}
				on:blur={onBlur}
				error={tableError}
				warning={tableWarning && 'Do not change this value if you have already published the form! After changing you may lose old submissions!'}
			/>
		</div>

		<div>
			<Label title="URL Slug" description="The link, where the final published form will be available!" required />
			<Input bind:value={$form.slug} on:blur={onBlur} prefix="{window.location.origin}/f/" error={slugError} />
		</div>
	{:else if currentTab === 'preferences'}
		<div>
			<Label title="Color Scheme" description="Accent color that will be used in the editor and form UI." />
			<ColorPicker bind:value={$form.color} />
		</div>

		<div>
			<Label title="Layout" description="Style of the form layout." />
			<LayoutPicker bind:value={$form.layout} />
		</div>

		<div>
			<Label title="Custom CSS" description="Custom CSS code, that will be injected to the form page." />
			<TextArea placeholder="Leave blank so that no additional styles are added" bind:value={$form.css} />
		</div>
	{:else if currentTab === 'other'}
		<div>
			<Label title="Publication" description="You can unpublish the form, the public link will no longer be available." />

			<div class="buttons">
				<Toggle value={!!$publication} controlled on:click={() => createPublication($form)}>Public</Toggle>
				<Toggle value={!$publication} controlled on:click={() => deletePublication($form.key)}>Private</Toggle>
			</div>
		</div>

		<div>
			<Label title="Delete Form" description="Delete this form. (Submissions wont be removed)" />
			<Button style="danger" on:click={() => setFormDeleteCandidate($form.key)}>Delete</Button>
		</div>
	{/if}

	<div>
		{#if warning}
			<div class="warning" transition:slide|local={{ duration: 200 }}>
				<Alert />
				You have changes, that will be applied only after publishing the form!
			</div>
		{/if}
	</div>
</Modal>

<style>
	.buttons {
		display: flex;
		gap: 0.5rem;
	}

	.warning {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: var(--warning);
	}

	.warning :global(svg *) {
		stroke: var(--warning);
	}
</style>
