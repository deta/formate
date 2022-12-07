<script lang="ts">
    import type { ColorScheme } from '../../types';
    import Button from '../Button.svelte';
    import Modal from '../Modal.svelte';
    import Input from '../Input.svelte';
    import Label from '../Label.svelte';
    import ColorPicker from '../ColorPicker.svelte';

    import { createForm } from '../../stores/forms';
    import { form, formKey } from '../../stores/form';
    import { currentPage, hideAllModals } from '../../stores/ui';

    import { HeadlessForm } from '../../utils';

    interface CreateFormValues {
        name: string;
        color: ColorScheme;
    }

    const initialValues = {
        name: '',
        color: 'orange',
    };

    const validators = {
        name: (value) => {
            if (value.length < 4) throw new TypeError('Name must be at least 4 characters');
        },
    };

    const { errors, hasErrors, values, validate, resetKeyError } = HeadlessForm<CreateFormValues>(initialValues, validators);

    /**
     * Handle form submit
     */
    async function submit() {
        validate();
        if ($hasErrors) return;

        const newForm = await createForm($values);
        $form = newForm;
        $formKey = newForm.key;

        hideAllModals();
        $currentPage = 'dashboard';
    }
</script>

<Modal title="Create Form">
    <div>
        <Label title="Form Name" description="Name of your form, that will be displayed on the welcome page." />
        <Input bind:value={$values.name} error={$errors.name} on:keyup={() => resetKeyError('name')} />
    </div>

    <div>
        <Label title="Color Scheme" description="Name of your form, that will be displayed on the welcome page." />
        <ColorPicker bind:value={$values.color} />
    </div>

    <Button position="right" on:click={submit} disabled={$hasErrors}>Create</Button>
</Modal>

