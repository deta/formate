<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { hideModals } from '$lib/stores/modals';
	import type { ColorScheme, Form } from '$lib/types';
	import { createSlug } from '$lib/utils';
	import { nanoid } from 'nanoid';
	import Button from '../Button.svelte';
	import ColorPicker from '../ColorPicker.svelte';
	import Input from '../Input.svelte';
	import Label from '../Label.svelte';
	import Modal from '../Modal.svelte';

	interface CreateFormValues {
		name: string;
		color: ColorScheme;
	}

	// Form values
	let inputs: CreateFormValues = {
		name: '',
		color: 'orange'
	};

	// Form errors
	let errors: Partial<Record<keyof CreateFormValues, string | undefined>> = {};

	// Check if errors exists
	$: hasErrors = Object.keys(errors).some((key) => typeof errors[key] === 'string');

	/**
	 * Handle form submit
	 */
	async function submit() {
		const isValid = validate();
		if (!isValid) return;

		const data: Partial<Form> = { ...inputs };

		// Set default values
		data.key = data.key || nanoid(8);
		data.layout = data.layout || 'clean';
		data.color = data.color || 'orange';
		data.table = data.table || `submissions-${createSlug(data.name)}`;
		data.slug = data.slug || createSlug(data.name);
		data.screens = data.screens || [];

		await fetch('/api/forms', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' }
		});

		await invalidateAll();

		hideModals();
		await goto(`/editor/${data.key}`);
	}

	/**
	 * Validate form inputs
	 */
	function validate() {
		let isValid = true;

		if (!inputs.name || inputs.name.length < 4) {
			errors.name = 'Name must be at least 4 characters';
			isValid = false;
		}

		return isValid;
	}
</script>

<Modal title="Create Form" centered={true}>
	<div>
		<Label title="Form Name" description="Name of your form, that will be displayed on the welcome page." required />
		<Input bind:value={inputs.name} error={errors.name} on:keyup={() => (errors.name = undefined)} />
	</div>

	<div>
		<Label title="Color Scheme" description="Accent color that will be used in the editor of your forms UI" />
		<ColorPicker bind:value={inputs.color} />
	</div>

	<Button position="right" on:click={submit} disabled={hasErrors}>Create</Button>
</Modal>
