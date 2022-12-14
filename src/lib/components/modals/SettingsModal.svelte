<script>
	import { fly } from 'svelte/transition';
	import Label from '../Label.svelte';
	import Input from '../Input.svelte';
	import ColorPicker from '../ColorPicker.svelte';
	import Modal from '../Modal.svelte';
	import { form } from '$lib/stores/editor';
	import Button from '../Button.svelte';
	import { createSlug } from '$lib/utils';

	let currentTab = 'general';
	let previousName = $form.name;

	// Update slug depending on the form name
	$: {
		if (createSlug(previousName) === createSlug($form.slug)) $form.slug = createSlug($form.name);
		previousName = $form.name;
	}
</script>

<Modal title="Settings" bind:currentTab tabs={['general', 'preferences']}>
	{#if currentTab === 'general'}
		<div in:fly={{ duration: 200, x: -8, delay: 0 }}>
			<Label title="Form Name" description="Name of your form, that will be displayed on the welcome page." />
			<Input bind:value={$form.name} />
		</div>

		<div in:fly={{ duration: 200, x: -8, delay: 0 }}>
			<Label title="URL Slug" description="Name of your form, that will be displayed on the welcome page." />
			<Input bind:value={$form.slug} prefix="{window.location.origin}/f/" />
		</div>

		<div in:fly={{ duration: 200, x: -8, delay: 50 }}>
			<Label title="Delete Form" description="Name of your form, that will be displayed on the welcome page." />
			<Button style="danger">Delete</Button>
		</div>
	{:else if currentTab === 'preferences'}
		<div in:fly={{ duration: 200, x: -8, delay: 0 }}>
			<Label title="Color Scheme" description="Accent color that will be used in the editor of your forms UI" />
			<ColorPicker bind:value={$form.color} />
		</div>
	{/if}
</Modal>
