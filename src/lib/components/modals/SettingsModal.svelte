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
	import StylePicker from '../StylePicker.svelte';

	let currentTab = 'general';
	let previousName = $form.name;

	// Update slug depending on the form name
	$: {
		if (createSlug(previousName) === createSlug($form.slug)) $form.slug = createSlug($form.name);
		previousName = $form.name;
	}

	/**
	 * On modal close
	 */
	function onClose() {
		// Format slug
		$form.slug = createSlug($form.slug);
	}

	async function deleteForm() {
		await goto('/');
		await DELETE(`/api/forms/${$form.key}`);
		await invalidateAll();
		hideModals();
	}
</script>

<Modal title="Settings" bind:currentTab tabs={['general', 'preferences']} on:hide={onClose}>
	{#if currentTab === 'general'}
		<div in:fly|local={{ duration: 200, x: -8 }}>
			<Label title="Form Name" description="Name of your form, that will be displayed on the welcome page." />
			<Input bind:value={$form.name} />
		</div>

		<div in:fly|local={{ duration: 200, x: -8, delay: 50 }}>
			<Label title="URL Slug" description="The link, where the final published form will be available!" />
			<Input bind:value={$form.slug} prefix="{window.location.origin}/f/" />
		</div>

		<div in:fly|local={{ duration: 200, x: -8, delay: 100  }}>
			<Label title="Delete Form" description="Delete this form (Submissions wont be removed)" />
			<Button style="danger" on:click={deleteForm}>Delete</Button>
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
			<TextArea placeholder="Leave it blank, to ignore it" bind:value={$form.css} />
		</div>
	{/if}
</Modal>
