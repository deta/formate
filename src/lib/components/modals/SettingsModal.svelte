<script>
	import { fly } from 'svelte/transition';
	import Label from '../Label.svelte';
	import Input from '../Input.svelte';
	import ColorPicker from '../ColorPicker.svelte';
	import Modal from '../Modal.svelte';
	import { form } from '$lib/stores/editor';
	import Button from '../Button.svelte';
	import { createSlug } from '$lib/utils';
	import TextArea from '../TextArea.svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { DELETE } from '$lib/http';
	import { hideModals } from '$lib/stores/modals';

	let currentTab = 'general';
	let previousName = $form.name;

	// Update slug depending on the form name
	$: {
		if (createSlug(previousName) === createSlug($form.slug)) $form.slug = createSlug($form.name);
		previousName = $form.name;
	}

	async function deleteForm() {
		await goto('/');
		await DELETE(`/api/forms/${$form.key}`);
		await invalidateAll();
		hideModals();
	}
</script>

<Modal title="Settings" bind:currentTab tabs={['general', 'preferences']}>
	{#if currentTab === 'general'}
		<div>
			<Label title="Form Name" description="Name of your form, that will be displayed on the welcome page." />
			<Input bind:value={$form.name} />
		</div>

		<div>
			<Label title="URL Slug" description="Name of your form, that will be displayed on the welcome page." />
			<Input bind:value={$form.slug} prefix="{window.location.origin}/f/" />
		</div>

		<div>
			<Label title="Delete Form" description="Name of your form, that will be displayed on the welcome page." />
			<Button style="danger" on:click={deleteForm}>Delete</Button>
		</div>
	{:else if currentTab === 'preferences'}
		<div>
			<Label title="Color Scheme" description="Accent color that will be used in the editor of your forms UI" />
			<ColorPicker bind:value={$form.color} />
		</div>

		<div>
			<Label title="Custom CSS" description="Custom CSS code, that will be injected to the form page" />
			<TextArea placeholder="Leave it blank, to ignore it" bind:value={$form.css} />
		</div>
	{/if}
</Modal>
