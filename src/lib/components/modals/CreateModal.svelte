<script lang="ts">
	import type { ColorScheme, Form } from '$lib/types';
	import { nanoid } from 'nanoid';
	import { createSlug } from '$lib/utils';

	import Button from '../Button.svelte';
	import Modal from '../Modal.svelte';
	import Input from '../Input.svelte';
	import Label from '../Label.svelte';
	import ColorPicker from '../ColorPicker.svelte';

	import { form } from '$lib/stores/editor';
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import { GET, POST, DELETE } from '$lib/http';

	import { HeadlessForm } from '$lib/utils';
	import { hideModals } from '$lib/stores/modals';

	interface CreateFormValues {
		name: string;
		color: ColorScheme;
	}

	const initialValues: CreateFormValues = {
		name: '',
		color: 'orange'
	};

	const validators = {
		name: (value) => {
			if (value.length < 4) throw new TypeError('Name must be at least 4 characters');
		}
	};

	const { errors, hasErrors, values, validate, resetKeyError } = HeadlessForm<CreateFormValues>(initialValues, validators);

	/**
	 * Handle form submit
	 */
	async function submit() {
		validate();
		if ($hasErrors) return;

		const data: Partial<Form> = { ...$values };

		// Set default values
		data.key = data.key || nanoid();
		data.style = data.style || 'clean';
		data.color = data.color || 'orange';
		data.slug = data.slug || createSlug(data.name);
		data.screens = data.screens || [];

		const response = await POST('/api/forms', data);
		await invalidateAll();

		hideModals();
		await goto(`/editor/${data.key}`);
	}
</script>

<Modal title="Create Form">
	<div>
		<Label title="Form Name" description="Name of your form, that will be displayed on the welcome page." />
		<Input bind:value={$values.name} error={$errors.name} on:keyup={() => resetKeyError('name')} />
	</div>

	<div>
		<Label title="Color Scheme" description="Accent color that will be used in the editor of your forms UI" />
		<ColorPicker bind:value={$values.color} />
	</div>

	<Button position="right" on:click={submit} disabled={$hasErrors}>Create</Button>
</Modal>
